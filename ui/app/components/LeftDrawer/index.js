import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from 'material-ui/Drawer';
import { spacing, typography } from 'material-ui/styles';
import { Link, browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import SelectableList from '../SelectableList';
import * as appActions from '../../containers/App/actions';
import { selectGlobal } from '../../containers/App/selectors';
import Theme from '../../config/theme';

const theme = new Theme();

class LeftDrawer extends React.Component {
  constructor(props) {
    super(props);

    let isMobileBrowser = false;

    if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      isMobileBrowser = true;
    }

    this.state = {
      menusHasItems: true,
      openViewsHasItems: true,
      isNavigatingTabs: false,
      isNavigatingMenu: false,
      currentTheme: theme.get(props.appStore.currentTheme),
      isMobileBrowser,
    };

    this.onSelectedIndexChanged = this.onSelectedIndexChanged.bind(this);
    this.onSelectedOpenedMenuIndexChanged = this.onSelectedOpenedMenuIndexChanged.bind(this);
    this.handleClickOpenViews = this.handleClickOpenViews.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleMenuItemsNestedListToggle = this.handleMenuItemsNestedListToggle.bind(this);
    this.handleOpenViewNestedListToggle = this.handleOpenViewNestedListToggle.bind(this);
    this.handleMenusNestedListToggle = this.handleMenusNestedListToggle.bind(this);
    this.animateMenu = this.animateMenu.bind(this);
    this.animateRootMenu = this.animateRootMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateMenuDimensions);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.appStore.selectedOpenedMenuItem !== this.props.appStore.selectedOpenedMenuItem) {
      const itemOpenedFound = this.props.appStore.openViews.find((item) =>
                        item.id === newProps.appStore.selectedOpenedMenuItem.id);

      if (this.props.appStore.openViews.indexOf(itemOpenedFound) === -1) {
        this.props.actions.openView(newProps.appStore.selectedOpenedMenuItem);
      }

      if (newProps.appStore.currentTheme !== this.props.appStore.currentTheme) {
        this.setState({
          currentTheme: theme.get(newProps.appStore.currentTheme),
        });
      }
    }

    if ((newProps.appStore.selectedMenuIndex !== this.props.appStore.selectedMenuIndex ||
    newProps.appStore.selectedOpenedMenuIndex !== this.props.appStore.selectedOpenedMenuIndex) &&
    this.props.appStore.showOpenViews) {
      this.selectableMenuList.setSelectedIndex(newProps.appStore.selectedMenuIndex);
      this.selectableOpenViewList.setSelectedIndex(newProps.appStore.selectedOpenedMenuIndex);
    }

    if (newProps.appStore.selectedOpenedMenuIndex !== this.props.appStore.selectedOpenedMenuIndex) {
      browserHistory.push(newProps.appStore.selectedOpenedMenuItem.url);
    }

    if (newProps.appStore.isNavigatingTabs !== this.props.appStore.isNavigatingTabs) {
      this.setState({
        isNavigatingTabs: newProps.appStore.isNavigatingTabs,
      });
    }

    if (newProps.appStore.isNavigatingMenu !== this.props.appStore.isNavigatingMenu) {
      this.setState({
        isNavigatingMenu: newProps.appStore.isNavigatingMenu,
      });
    }

    if (newProps.appStore.currentTheme !== this.props.appStore.currentTheme) {
      this.setState({
        currentTheme: theme.get(newProps.appStore.currentTheme),
      });
    }
  }

  componentWillUpdate() {
    this.updateMenuDimensions();
  }

  componentDidUpdate() {
    this.initialMenuItem();
    this.updateMenuDimensions();
    setTimeout(() => {
      if (this.state.isNavigatingTabs || this.state.isNavigatingMenu) {
        const openMenuElement = document.querySelector('.open-views-menu > div > div');

        if (openMenuElement) {
          let index = this.props.appStore.openViews.indexOf(this.props.appStore.selectedOpenedMenuItem);
          if (index === -1) {
            index = 0;
          }
          openMenuElement.scrollTop = index * 48;
        }
      }
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateMenuDimensions);
  }

  onSelectedOpenedMenuIndexChanged(index) {
    const id = this.props.appStore.openViews[index].id;
    this.props.actions.selectMenuItem(id);
  }

  onSelectedIndexChanged(index) {
    const menuItem = this.findMenuItem('index', index);

    if (menuItem && menuItem.id) {
      this.props.actions.selectMenuItem(menuItem.id);
    }
  }

  updateMenuDimensions() {
    const menuElement = document.querySelector('.views-menu > div > div');

    if (menuElement) {
      const height = window.innerHeight - menuElement.offsetTop;

      menuElement.style.height = `${height - 15}px`;
    }
  }

  initialMenuItem() {
    const url = browserHistory.getCurrentLocation().pathname;
    const menuItem = this.findMenuItem('url', url);

    if (menuItem && menuItem.index) {
      this.onSelectedIndexChanged(menuItem.index);
    }
  }

  findMenuItem(key, value) {
    let menuItem;

    this.props.appStore.menus.forEach((menu) => {
      if (menu[key] === value) {
        menuItem = menu;
      }
      if (menu.children) {
        menu.children.forEach((child) => {
          if (child[key] === value) {
            menuItem = child;
          }
        });
      }
    });

    return menuItem;
  }

  handleClickOpenViews(event) {
    const x = event.pageX - event.currentTarget.offsetLeft;
    const y = event.pageY - event.currentTarget.getBoundingClientRect().top;

    if (x > 178 && y > 16 && y < 31) {
      const id = event.currentTarget.getAttribute('data-id');
      this.props.actions.closeView(id);
    } else {
      this.props.actions.NavigatingOpenViews();
    }
  }

  handleClickMenu() {
    this.props.actions.NavigatingMenu();
  }

  handleMenusNestedListToggle = (item) => {
    if (!this.state.isMobileBrowser) {
      const rootMenuName = 'menus';
      if (!item.state.open) {
        this.props.actions.animateRootMenus(rootMenuName, true);

        setTimeout(() => {
          this.props.actions.toggleRootMenus(rootMenuName);
        }, 100);
      } else {
        this.props.actions.toggleRootMenus(rootMenuName);

        setTimeout(() => {
          this.props.actions.animateRootMenus(rootMenuName, false);
        }, 0);
      }
    }
    this.setState({
      menusHasItems: item.state.open,
    });
  }

  handleMenuItemsNestedListToggle = (item) => {
    if (!this.state.isMobileBrowser) {
      if (item.props.open) {
        this.props.actions.animateMenus(item.props['data-id'], true);

        setTimeout(() => {
          this.props.actions.toggleMenus(item.props['data-id']);
        }, 100);
      } else {
        this.props.actions.toggleMenus(item.props['data-id']);

        setTimeout(() => {
          this.props.actions.animateMenus(item.props['data-id'], false);
        }, 0);
      }
    }
  }

  handleOpenViewNestedListToggle = (item) => {
    if (!this.state.isMobileBrowser) {
      const rootMenuName = 'openViews';
      if (!item.state.open) {
        this.props.actions.animateRootMenus(rootMenuName, true);

        setTimeout(() => {
          this.props.actions.toggleRootMenus(rootMenuName);
        }, 100);
      } else {
        this.props.actions.toggleRootMenus(rootMenuName);

        setTimeout(() => {
          this.props.actions.animateRootMenus(rootMenuName, false);
        }, 0);
      }
    }
    this.setState({
      openViewsHasItems: item.state.open,
    });
  }

  animateRootMenu(menu, child) {
    let className = ' hide';

    if ((menu.open && child.animatingRootMenu && !menu.willCloseRootMenu) ||
    child.animatingRootMenu === undefined) {
      className = '';
    }

    return className;
  }

  animateMenu(menu, child) {
    let className = ' hide';

    if ((menu.open && child.animating && !menu.willCloseMenu) ||
    this.state.isMobileBrowser) {
      className = '';
    }

    return className;
  }

  render() {
    const currentTheme = this.state.currentTheme;

    const styles = {
      logo: {
        fontSize: 22,
        color: currentTheme.logoColor,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: currentTheme.logoBackgroundColor,
        paddingLeft: 35,
        height: 56,
      },
      headerItem: {
        color: currentTheme.headerItemColor,
        fontSize: 14,
        boxShadow: currentTheme.headerItemBoxShadow,
        backgroundColor: currentTheme.headerItemBackgroundColor,
        fontWeight: currentTheme.headerItemFontWeight,
      },
      selectedMenuListItem: {
        color: currentTheme.selectedMenuListItemColor,
        fontSize: 14,
        background: currentTheme.selectedMenuListItemBackgroundColor,
      },
      selectedListItem: {
        color: currentTheme.selectedListItemColor,
        fontSize: 14,
        background: currentTheme.selectedListItemBackgroundColor,
      },
      menuItem: {
        color: currentTheme.menuItemColor,
        fontSize: 14,
      },
      avatar: {
        div: {
          padding: '15px 0 20px 15px',
          height: 45,
        },
        icon: {
          float: 'left',
          display: 'block',
          marginRight: 15,
          boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)',
        },
        span: {
          paddingTop: 12,
          display: 'block',
          color: currentTheme.avatarSpanColor,
          fontWeight: 300,
          textShadow: currentTheme.avatarSpanTextShadow,
        },
      },
    };
    const { navDrawerOpen } = this.props;

    return (
      <Drawer
        className="left-drawner"
        docked
        open={navDrawerOpen}
      >
        <div style={styles.logo}>
          Fortress Admin
        </div>
        <div style={styles.avatar.div}>
          <Avatar
            src="http://www.material-ui.com/images/ok-128.jpg"
            size={50}
            style={styles.avatar.icon}
          />
          <span style={styles.avatar.span}>{this.props.username}</span>
        </div>
        {
          this.props.appStore.showOpenViews ? (
            <SelectableList
              className={`open-views-menu${this.props.appStore.openViews.length > 0 &&
              this.props.appStore.openViews[0].animatingRootMenu ? ' animating' : ''}`}
              defaultValue={this.props.appStore.selectedOpenedMenuIndex}
              defaultItem={this.props.appStore.selectedOpenedMenuItem}
              onSelectedIndexChanged={this.onSelectedOpenedMenuIndexChanged}
              ref={(selectableList) => {
                this.selectableOpenViewList = selectableList;
              }}
            >
              <ListItem
                value={-1}
                className="menu-text-color"
                primaryText="OPEN VIEWS"
                style={styles.headerItem}
                open={this.state.openViewsHasItems}
                onNestedListToggle={this.handleOpenViewNestedListToggle}
                primaryTogglesNestedList
                nestedItems={this.props.appStore.openViews.length > 0 ?
                  this.props.appStore.openViews.map((menu, index) =>
                    (menu.id === 'dashboard' ? (
                      <ListItem
                        className={`list-item ${this.props.appStore.selectedOpenedMenuIndex === index ? 'selected' : ''}
                        ${this.animateRootMenu({ open: this.state.openViewsHasItems }, menu)}`}
                        value={index}
                        style={this.props.appStore.selectedOpenedMenuIndex === index ? styles.selectedListItem : styles.menuItem}
                        primaryText={menu.text}
                        leftIcon={menu.icon}
                        containerElement={
                          <Link to={menu.url}>``</Link>
                        }
                      />
                    ) : (
                      <ListItem
                        className={`list-item open-views${this.state.isMobileBrowser ? '' : ' desktop-browser'} ${this.props.appStore.selectedOpenedMenuIndex === index ? 'selected' : ''}
                        ${this.animateRootMenu({ open: this.state.openViewsHasItems }, menu)}`}
                        value={index}
                        style={this.props.appStore.selectedOpenedMenuIndex === index ? styles.selectedListItem : styles.menuItem}
                        primaryText={menu.text}
                        leftIcon={menu.icon}
                        rightIcon={<FontIcon className="material-icons">close</FontIcon>}
                        onClick={this.handleClickOpenViews}
                        containerElement={<div className="close-tab" />}
                        data-id={menu.id}
                        data-url={menu.url}
                      />
                    )
                  )) : []}
              />
            </SelectableList>
          ) : null
        }
        <SelectableList
          className={`views-menu${this.state.isMobileBrowser ? '' : ' desktop-browser'}`}
          defaultValue={this.props.appStore.selectedMenuIndex}
          onSelectedIndexChanged={this.onSelectedIndexChanged}
          defaultItem={this.props.appStore.selectedMenuItem}
          ref={(selectableList) => {
            this.selectableMenuList = selectableList;
          }}
        >
          <ListItem
            value={-1}
            className="menu-text-color"
            primaryText="MENU"
            style={styles.headerItem}
            open={this.state.menusHasItems}
            onNestedListToggle={this.handleMenusNestedListToggle}
            primaryTogglesNestedList
            nestedItems={this.props.appStore.menus.length > 0 ?
              this.props.appStore.menus.map((menu) =>
                <ListItem
                  className={`list-item${this.animateRootMenu({ open: this.state.menusHasItems }, menu)}`}
                  value={menu.index}
                  style={this.props.appStore.selectedMenuIndex === menu.index ? styles.selectedMenuListItem : styles.menuItem}
                  primaryText={menu.text}
                  leftIcon={menu.icon}
                  primaryTogglesNestedList={menu.children && menu.children.length > 0}
                  onClick={this.handleClickMenu}
                  onNestedListToggle={this.handleMenuItemsNestedListToggle}
                  open={menu.open}
                  data-id={menu.id}
                  data-url={menu.url}
                  nestedItems={menu.children && menu.children.length > 0 ?
                    menu.children.map((child) =>
                      <ListItem
                        className={`list-item${this.animateMenu(menu, child)}`}
                        value={child.index}
                        style={this.props.appStore.selectedMenuIndex === child.index ? styles.selectedMenuListItem : styles.menuItem}
                        primaryText={child.text}
                        onClick={this.handleClickMenu}
                        data-id={child.id}
                        data-url={child.url}
                      />
                    ) : []}
                />
              ) : []}
          />
        </SelectableList>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  username: PropTypes.string,
  actions: PropTypes.any,
  appStore: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  appStore: selectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer);
