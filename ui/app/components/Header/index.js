import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Tabs, Tab } from 'material-ui/Tabs';
import { createStructuredSelector } from 'reselect';
import FontIcon from 'material-ui/FontIcon';
import * as appActions from '../../containers/App/actions';
import { selectGlobal } from '../../containers/App/selectors';
import Theme from '../../config/theme';

const theme = new Theme();

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      currentTheme: theme.get(props.appStore.currentTheme),
    };

    this.getTabsWidth = this.getTabsWidth.bind(this);
    this.signOut = this.signOut.bind(this);
    this.openSettingsDrawer = this.openSettingsDrawer.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.appStore.currentTheme !== this.props.appStore.currentTheme) {
      this.setState({
        currentTheme: theme.get(newProps.appStore.currentTheme),
      });
    }
  }

  componentDidUpdate() {
    if ((this.props.appStore.isNavigatingOpenViews || this.props.appStore.isNavigatingMenu) &&
    this.props.appStore.showTabs) {
      const index = this.props.appStore.selectedOpenedMenuIndex;
      ReactDOM.findDOMNode(this.tabs).scrollLeft = ((index - 1) * 200) + 100; // eslint-disable-line
    }
  }

  getTabsWidth() {
    const totalOpenViews = this.props.appStore.openViews.length;

    return {
      width: (200 * (!totalOpenViews ? 1 : totalOpenViews)),
    };
  }

  handleChange = (index) => {
    const id = this.props.appStore.openViews[index].id;
    this.props.actions.selectMenuItem(id);
  };

  handleClick = (event) => {
    const x = event.pageX - event.currentTarget.getBoundingClientRect().left;
    const y = event.pageY - event.currentTarget.offsetTop;

    if (x > 180 && y > 17 && y < 30) {
      const id = event.currentTarget.getAttribute('data-id');
      this.props.actions.closeView(id);
    } else {
      this.props.actions.NavigatingTabs();
    }
  };

  signOut() {
    this.props.actions.signOut();
  }

  openSettingsDrawer() {
    this.props.actions.openSettingsDrawer();
  }

  render() {
    const { styles, handleChangeRequestNavDrawer } = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
      },
      menuButton: {
        marginLeft: 10,
      },
      iconsRightContainer: {
        marginLeft: 20,
      },
      tabsScrollbars: {
        overflowX: 'overlay',
        overflowY: 'hidden',
      },
      iconButton: {
        fill: this.state.currentTheme.appBarMenuButtonColor,
      },
    };

    return (
      <div>
        <AppBar
          style={{ ...styles, ...style.appBar }}
          title={
            <div>
              {
                this.props.appStore.showTabs ? (
                  <Tabs
                    id="header-close-tabs"
                    style={style.tabsScrollbars}
                    tabItemContainerStyle={this.getTabsWidth()}
                    onChange={this.handleChange}
                    value={this.props.appStore.selectedOpenedMenuIndex}
                    ref={(tabs) => { this.tabs = tabs; }}
                  >
                    {
                      this.props.appStore.openViews.length > 0 ?
                      this.props.appStore.openViews.map((menu, index) =>
                        (menu.id === 'dashboard' ? (
                          <Tab
                            key={menu.id}
                            label={menu.text}
                            value={index}
                            onClick={this.handleClick}
                            containerElement={
                              <Link to={menu.url}>``</Link>
                            }
                          />
                        ) : (
                          <Tab
                            key={menu.id}
                            label={menu.text}
                            value={index}
                            onClick={this.handleClick}
                            containerElement={<div className="close-tab" />}
                            data-id={menu.id}
                            data-url={menu.url}
                          />
                        ))
                      ) : null
                    }
                  </Tabs>
                ) : null
              }
            </div>
        }
          iconElementLeft={
            <IconButton
              iconStyle={style.iconButton}
              style={style.menuButton}
              onClick={handleChangeRequestNavDrawer}
            >
              <FontIcon color={this.state.currentTheme.appBarMenuButtonColor} className="material-icons">menu</FontIcon>
            </IconButton>
          }
          iconElementRight={
            <div style={style.iconsRightContainer}>
              <IconButton
                iconStyle={style.iconButton}
                onClick={this.openSettingsDrawer}
              >
                <FontIcon color={this.state.currentTheme.appBarMenuButtonColor} className="material-icons">settings</FontIcon>
              </IconButton>
              <IconMenu
                className="header-apps"
                color={this.state.currentTheme.appBarMenuButtonColor}
                iconButtonElement={
                  <IconButton>
                    <FontIcon color={this.state.currentTheme.appBarMenuButtonColor} className="material-icons">view_module</FontIcon>
                  </IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem key={1} primaryText="Application 1" />
                <MenuItem key={2} primaryText="Application 2" />
                <MenuItem key={3} primaryText="Application 3" />
              </IconMenu>
              <IconMenu
                color={this.state.currentTheme.appBarMenuButtonColor}
                iconButtonElement={
                  <IconButton>
                    <FontIcon color={this.state.currentTheme.appBarMenuButtonColor} className="material-icons">more_vert_icon</FontIcon>
                  </IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem
                  primaryText="Sign out"
                  onClick={this.signOut}
                />
              </IconMenu>
            </div>
        }
        />
      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func,
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
