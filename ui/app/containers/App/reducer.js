import { fromJS } from 'immutable';
import * as ActionTypes from './constants';

const initialState = fromJS({
  menus: [],
  openViews: [],
  selectedMenuIndex: 0,
  selectedMenuItem: null,
  selectedOpenedMenuIndex: 0,
  selectedOpenedMenuItem: null,
  userIsAuthenticated: true,
  isNavigatingTabs: false,
  isNavigatingOpenViews: false,
  currentTheme: 'darkTheme', // darkTheme, lightTheme, blueTheme, grayTheme, darkBlueTheme
  openSettingDrawer: false,
  showTabs: true,
  showOpenViews: true,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return state.set('currentTheme', action.theme);
    case ActionTypes.CHANGE_SHOWS_TABS:
      return state.set('showTabs', action.value);
    case ActionTypes.CHANGE_SHOW_OPEN_VIEWS:
      return state.set('showOpenViews', action.value);
    case ActionTypes.SIGN_IN:
      {
        const menus = state.get('menus');
        const openViews = state.get('openViews');
        const menuItem = menus[0];
        const openedMenuItem = openViews[0];

        return state.set('userIsAuthenticated', true)
            .set('selectedMenuIndex', 0)
            .set('selectedMenuItem', menuItem)
            .set('selectedOpenedMenuIndex', 0)
            .set('selectedOpenedMenuItem', openedMenuItem);
      }
    case ActionTypes.SIGN_OUT:
      return state.set('userIsAuthenticated', false);
    case ActionTypes.NAVIGATING_TABS:
      return state.set('isNavigatingTabs', true)
            .set('isNavigatingOpenViews', false);
    case ActionTypes.NAVIGATING_OPEN_VIEWS:
      return state.set('isNavigatingOpenViews', true)
            .set('isNavigatingTabs', false);
    case ActionTypes.NAVIGATING_MENU:
      return state.set('isNavigatingOpenViews', true)
            .set('isNavigatingTabs', true);
    case ActionTypes.LOAD_MENU_SUCCESS:
      {
        const data = action.data;

        return state.set('menus', data.menus)
          .set('openViews', data.openViews)
          .set('selectedMenuItem', data.selectedMenuItem)
          .set('selectedOpenedMenuItem', data.selectedOpenedMenuItem);
      }
    case ActionTypes.OPEN_VIEW:
      {
        const openViews = state.get('openViews');

        if (openViews.indexOf(action.menuItem) === -1) {
          openViews.push(action.menuItem);
          return state.set('openViews', openViews);
        }
        return state;
      }
    case ActionTypes.CLOSE_VIEW:
      {
        const menus = state.get('menus');
        const openViews = state.get('openViews');

        let itemFound = openViews.find((item) =>
                        item.id === action.id);

        const indexToBeRemoved = openViews.indexOf(itemFound);
        let openedIndex = 0;

        if (indexToBeRemoved > 0) {
          openedIndex = indexToBeRemoved - 1;
        }

        const itemOpenedFound = openViews[openedIndex];
        let menuIndex;

        menus.forEach((menu) => {
          if (itemOpenedFound.id === menu.id) {
            itemFound = menu;
            menuIndex = menu.index;
          }
          if (menu.children) {
            menu.children.forEach((child) => {
              if (itemOpenedFound.id === child.id) {
                itemFound = child;
                menuIndex = child.index;
              }
            });
          }
        });

        openViews.splice(indexToBeRemoved, 1);

        return state.set('openViews', openViews)
          .set('selectedMenuIndex', menuIndex)
          .set('selectedMenuItem', itemFound)
          .set('selectedOpenedMenuIndex', openedIndex)
          .set('selectedOpenedMenuItem', itemOpenedFound);
      }
    case ActionTypes.SELECT_MENU_ITEM:
      {
        const menus = state.get('menus');
        const openViews = state.get('openViews');

        let itemFound;
        let index;

        menus.forEach((menu) => {
          if (action.id === menu.id) {
            itemFound = menu;
            index = menu.index;
          }
          if (menu.children) {
            menu.children.forEach((child) => {
              if (action.id === child.id) {
                itemFound = child;
                itemFound.icon = menu.icon;
                index = child.index;
              }
            });
          }
        });

        let itemOpenedFound = openViews.find((item) =>
                        item.id === itemFound.id);

        let openedIndex = 0;

        if (!itemOpenedFound) {
          itemOpenedFound = Object.assign({}, itemFound);
          openedIndex = openViews.length;
        } else {
          openedIndex = openViews.indexOf(itemOpenedFound);
        }

        return state
          .set('selectedMenuIndex', index)
          .set('selectedMenuItem', itemFound)
          .set('selectedOpenedMenuIndex', openedIndex)
          .set('selectedOpenedMenuItem', itemOpenedFound);
      }
    case ActionTypes.OPEN_SETTING_DRAWER:
      return state.set('openSettingDrawer', true);
    case ActionTypes.CLOSE_SETTING_DRAWER:
      return state.set('openSettingDrawer', false);
    case ActionTypes.ANIMATE_MENUS:
      {
        let menus = state.get('menus');

        menus = menus.map((item) => {
          let newItem = item;

          if (item.children && item.children.length > 0) {
            if (item.id === action.menuId) {
              newItem = { ...item, animating: true, willCloseMenu: action.willCloseMenu };
            } else {
              newItem = { ...item, animating: false };
            }

            newItem.children = newItem.children.map((child) => {
              let newChild = child;
              newChild = { ...child, animating: newItem.animating, willCloseMenu: newItem.willCloseMenu };
              return newChild;
            });
          }

          return newItem;
        });

        return state.set('menus', menus);
      }
    case ActionTypes.TOGGLE_MENUS:
      {
        let menus = state.get('menus');

        menus = menus.map((item) => {
          let newItem = item;

          if (item.children && item.children.length > 0) {
            if (item.id === action.menuId) {
              newItem = { ...item, open: !item.open, animating: false };
            } else {
              newItem = { ...item, open: false, animating: false };
            }
          }

          return newItem;
        });

        return state.set('menus', menus);
      }
    case ActionTypes.ANIMATE_ROOT_MENUS:
      {
        let menus = state.get(action.rootMenuName);

        menus = menus.map((item) => {
          let newItem = item;

          newItem = { ...item, animatingRootMenu: true, willCloseRootMenu: action.willCloseMenu };

          return newItem;
        });

        return state.set(action.rootMenuName, menus);
      }
    case ActionTypes.TOGGLE_ROOT_MENUS:
      {
        let menus = state.get(action.rootMenuName);

        menus = menus.map((item) => {
          let newItem = item;

          newItem = { ...item, animatingRootMenu: false };

          return newItem;
        });

        return state.set(action.rootMenuName, menus);
      }
    default:
      return state;
  }
}

export default appReducer;
