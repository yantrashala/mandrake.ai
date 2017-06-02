import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { spacing, typography } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { blue600, grey500, white } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import ThemeDefault from '../../themes/theme-default';
import * as appActions from '../../containers/App/actions';

class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    this.props.actions.signIn();
  }

  render() {
    const styles = {
      loginContainer: {
        minWidth: 320,
        maxWidth: 400,
        height: 'auto',
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        margin: 'auto',
      },
      logoImg: {
        marginRight: 10,
        minWidth: 25,
      },
      logo: {
        cursor: 'pointer',
        fontSize: 22,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: blue600,
        paddingLeft: 35,
        height: 60,
      },
      paper: {
        padding: 20,
        overflow: 'auto',
      },
      buttonsDiv: {
        textAlign: 'center',
        padding: 10,
      },
      flatButton: {
        color: grey500,
      },
      checkRemember: {
        style: {
          float: 'left',
          maxWidth: 180,
          paddingTop: 5,
        },
        labelStyle: {
          color: grey500,
        },
        iconStyle: {
          color: grey500,
          borderColor: grey500,
          fill: grey500,
        },
      },
      loginBtn: {
        float: 'right',
      },
      btn: {
        background: '#4f81e9',
        color: white,
        padding: 7,
        borderRadius: 2,
        margin: 2,
        fontSize: 13,
      },
      btnFacebook: {
        background: '#4f81e9',
      },
      btnGoogle: {
        background: '#e14441',
      },
      btnSpan: {
        marginLeft: 5,
      },
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div id="login-form">
          <div style={styles.loginContainer}>
            <div style={styles.logo}>
              Fortress Admin Template
            </div>
            <Paper style={styles.paper}>

              <form>
                <TextField
                  hintText="E-mail"
                  floatingLabelText="E-mail"
                  fullWidth
                />
                <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  fullWidth
                  type="password"
                />

                <div>
                  <Checkbox
                    label="Remember me"
                    style={styles.checkRemember.style}
                    labelStyle={styles.checkRemember.labelStyle}
                    iconStyle={styles.checkRemember.iconStyle}
                  />

                  <Link to="/">
                    <RaisedButton
                      label="Login"
                      primary
                      style={styles.loginBtn}
                      onClick={this.signIn}
                    />
                  </Link>
                </div>
              </form>
            </Paper>

            <div style={styles.buttonsDiv}>
              <FlatButton
                label="Forgot Password?"
                href="/"
                style={styles.flatButton}
                icon={<FontIcon className="material-icons">help</FontIcon>}
              />
              <FlatButton
                label="Register"
                href="/"
                style={styles.flatButton}
                icon={<FontIcon className="material-icons">person_add</FontIcon>}
              />
            </div>

            <div style={styles.buttonsDiv}>
              <Link
                to="/"
                style={{ ...styles.btn, ...styles.btnFacebook }}
                onClick={this.signIn}
              >
                <i className="fa fa-facebook fa-lg" />
                <span style={styles.btnSpan}>Log in with Facebook</span>
              </Link>
              <Link
                to="/"
                style={{ ...styles.btn, ...styles.btnGoogle }}
                onClick={this.signIn}
              >
                <i className="fa fa-google-plus fa-lg" />
                <span style={styles.btnSpan}>Log in with Google</span>
              </Link>
            </div>
          </div>
        </div>
      </MuiThemeProvider >
    );
  }
}


LoginPage.propTypes = {
  actions: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
