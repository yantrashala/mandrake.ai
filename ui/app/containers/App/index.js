import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import Header from '../../components/Header';
import LeftDrawer from '../../components/LeftDrawer';
import ThemeDefault from '../../themes/theme-default';
import ThemeLight from '../../themes/theme-light';
import ThemeBlue from '../../themes/theme-blue';
import ThemeGray from '../../themes/theme-gray';
import ThemeDarkBlue from '../../themes/theme-dark-blue';
import * as appActions from './actions';
import { selectGlobal } from './selectors';
import LoginPage from '../LoginPage';
import Theme from '../../config/theme';

const theme = new Theme();

class App extends React.Component {

  constructor(props) {
    super(props);

    let isMobileBrowser = false;

    if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      isMobileBrowser = true;
    }

    this.state = {
      navDrawerOpen: false,
      transitionDirection: 'right',
      currentTheme: theme.get(props.appStore.currentTheme),
      themeSelected: 'dark',
      isMobileBrowser,
      closeSettingDrawnerOnce: false,
    };

    this.handleChangeRequestNavDrawer = this.handleChangeRequestNavDrawer.bind(this);
    this.closeSettingsDrawer = this.closeSettingsDrawer.bind(this);
    this.themeChanged = this.themeChanged.bind(this);
    this.showTabsChanged = this.showTabsChanged.bind(this);
    this.openViewsChanged = this.openViewsChanged.bind(this);
  }

  componentWillMount() {
    const { width } = this.props;
    this.setState({ navDrawerOpen: width === LARGE });
  }

  componentDidMount() {
    // Remove this code if you don't want the settings drawer to display at load
    if (!this.state.isMobileBrowser) {
      setTimeout(() => {
        if (this.props.location.pathname === '/') {
          this.props.actions.openSettingsDrawer();
        }
      }, 3000);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== '/' &&
    !this.state.closeSettingDrawnerOnce) {
      this.setState({
        closeSettingDrawnerOnce: true,
      });
      this.props.actions.closeSettingsDrawer();
    }

    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }

    if (nextProps.appStore.selectedOpenedMenuIndex !== this.props.appStore.selectedOpenedMenuIndex) {
      let transitionDirection = 'right';

      if (this.props.appStore.selectedOpenedMenuIndex > nextProps.appStore.selectedOpenedMenuIndex) {
        transitionDirection = 'left';
      }

      this.setState({
        transitionDirection,
      });
    }

    if (nextProps.appStore.currentTheme !== this.props.appStore.currentTheme) {
      this.setState({
        currentTheme: theme.get(nextProps.appStore.currentTheme),
      });
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  }

  closeSettingsDrawer() {
    this.props.actions.closeSettingsDrawer();
  }

  themeChanged(e, newSelection) {
    this.props.actions.changeTheme(newSelection);
  }

  showTabsChanged(e, newSelection) {
    this.props.actions.changeShowTabs(newSelection);
  }

  openViewsChanged(e, newSelection) {
    this.props.actions.changeShowOpenViews(newSelection);
  }

  render() {
    const { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;
    const currentTheme = this.state.currentTheme;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0,
      },
      settingDrawer: {
        backgroundColor: currentTheme.logoBackgroundColor,
        color: currentTheme.logoColor,
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0,
      },
      themeOptions: {
        paddingTop: 10,
        paddingLeft: 25,
      },
      radioButton: {
        marginBottom: 16,
      },
      radioButtonLabel: {
        color: currentTheme.settingsOptionsColor,
      },
      headerItem: {
        color: currentTheme.headerItemColor,
        fontSize: 14,
        backgroundColor: currentTheme.headerItemBackgroundColor,
        fontWeight: currentTheme.headerItemFontWeight,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
      },
      swithStyle: {
        paddingLeft: 25,
        width: 200,
      },
      swithColor: {
        color: currentTheme.settingsOptionsColor,
      },
    };

    const path = this.props.location.pathname;
    let muiTheme;

    switch (this.props.appStore.currentTheme) {
      case 'lightTheme':
        muiTheme = ThemeLight;
        break;
      case 'blueTheme':
        muiTheme = ThemeBlue;
        break;
      case 'grayTheme':
        muiTheme = ThemeGray;
        break;
      case 'darkBlueTheme':
        muiTheme = ThemeDarkBlue;
        break;
      default:
        muiTheme = ThemeDefault;
        break;
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {
          this.props.appStore.userIsAuthenticated ? (
            <div className={this.props.appStore.currentTheme}>
              <Header
                styles={styles.header}
                handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer}
              />

              <LeftDrawer
                navDrawerOpen={navDrawerOpen}
                username="User Admin"
              />

              <div style={styles.container}>
                <ReactCSSTransitionGroup
                  transitionName="transition-animation"
                  transitionAppear
                  transitionAppearTimeout={1500}
                  transitionEnterTimeout={0}
                  transitionLeave={false}
                >
                  {React.cloneElement(this.props.children, {
                    key: path,
                  })}
                </ReactCSSTransitionGroup>
              </div>

              <Drawer
                openSecondary
                open={this.props.appStore.openSettingDrawer}
              >
                <AppBar
                  title="Settings"
                  style={styles.settingDrawer}
                  iconElementLeft={
                    <IconButton onClick={this.closeSettingsDrawer}>
                      <FontIcon className="material-icons">close</FontIcon>
                    </IconButton>
                  }
                />
                <h2
                  style={styles.headerItem}
                >
                  THEME COLOR
                </h2>
                <RadioButtonGroup
                  style={styles.themeOptions}
                  name="themes"
                  defaultSelected="darkTheme"
                  ref={(selectedTheme) => {
                    this.selectedTheme = selectedTheme;
                  }}
                  onChange={this.themeChanged}
                >
                  <RadioButton
                    value="darkTheme"
                    label="Dark Theme"
                    style={styles.radioButton}
                    labelStyle={styles.radioButtonLabel}
                  />
                  <RadioButton
                    value="lightTheme"
                    label="Light Theme"
                    style={styles.radioButton}
                    labelStyle={styles.radioButtonLabel}
                  />
                  <RadioButton
                    value="blueTheme"
                    label="Blue Theme"
                    style={styles.radioButton}
                    labelStyle={styles.radioButtonLabel}
                  />
                  <RadioButton
                    value="grayTheme"
                    label="Gray Theme"
                    style={styles.radioButton}
                    labelStyle={styles.radioButtonLabel}
                  />
                  <RadioButton
                    value="darkBlueTheme"
                    label="Dark Blue Theme"
                    style={styles.radioButton}
                    labelStyle={styles.radioButtonLabel}
                  />
                </RadioButtonGroup>
                <h2
                  style={styles.headerItem}
                >
                  TABS
                </h2>
                <Toggle
                  labelPosition={'right'}
                  style={styles.swithStyle}
                  label="Show Header Tabs"
                  labelStyle={styles.swithColor}
                  toggled={this.props.appStore.showTabs}
                  onToggle={this.showTabsChanged}
                />
                <h2
                  style={styles.headerItem}
                >
                  OPEN VIEWS
                </h2>
                <Toggle
                  labelPosition={'right'}
                  style={styles.swithStyle}
                  label="Show Open Views"
                  labelStyle={styles.swithColor}
                  toggled={this.props.appStore.showOpenViews}
                  onToggle={this.openViewsChanged}
                />
              </Drawer>
            </div>
          ) : (
            <LoginPage />
          )
        }
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number,
  location: PropTypes.object,
  appStore: PropTypes.any,
  actions: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  appStore: selectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(App));
