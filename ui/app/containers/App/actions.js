import * as ActionTypes from './constants';

export function openView(menuItem) {
  return {
    type: ActionTypes.OPEN_VIEW,
    menuItem,
  };
}

export function closeView(id) {
  return {
    type: ActionTypes.CLOSE_VIEW,
    id,
  };
}

export function selectMenuItem(id) {
  return {
    type: ActionTypes.SELECT_MENU_ITEM,
    id,
  };
}

export function loadMenuSuccess(data) {
  return {
    type: ActionTypes.LOAD_MENU_SUCCESS,
    data,
  };
}

export function loadMenu() {
  return {
    type: ActionTypes.LOAD_MENU,
  };
}

export function signIn() {
  return {
    type: ActionTypes.SIGN_IN,
  };
}

export function signOut() {
  return {
    type: ActionTypes.SIGN_OUT,
  };
}

export function NavigatingTabs() {
  return {
    type: ActionTypes.NAVIGATING_TABS,
  };
}

export function NavigatingOpenViews() {
  return {
    type: ActionTypes.NAVIGATING_OPEN_VIEWS,
  };
}

export function NavigatingMenu() {
  return {
    type: ActionTypes.NAVIGATING_MENU,
  };
}

export function openSettingsDrawer() {
  return {
    type: ActionTypes.OPEN_SETTING_DRAWER,
  };
}

export function closeSettingsDrawer() {
  return {
    type: ActionTypes.CLOSE_SETTING_DRAWER,
  };
}

export function changeTheme(theme) {
  return {
    type: ActionTypes.CHANGE_THEME,
    theme,
  };
}

export function changeShowTabs(value) {
  return {
    type: ActionTypes.CHANGE_SHOWS_TABS,
    value,
  };
}

export function changeShowOpenViews(value) {
  return {
    type: ActionTypes.CHANGE_SHOW_OPEN_VIEWS,
    value,
  };
}

export function animateMenus(menuId, willCloseMenu) {
  return {
    type: ActionTypes.ANIMATE_MENUS,
    menuId,
    willCloseMenu,
  };
}

export function toggleMenus(menuId) {
  return {
    type: ActionTypes.TOGGLE_MENUS,
    menuId,
  };
}

export function animateRootMenus(rootMenuName, willCloseRootMenu) {
  return {
    type: ActionTypes.ANIMATE_ROOT_MENUS,
    rootMenuName,
    willCloseRootMenu,
  };
}

export function toggleRootMenus(rootMenuName) {
  return {
    type: ActionTypes.TOGGLE_ROOT_MENUS,
    rootMenuName,
  };
}
