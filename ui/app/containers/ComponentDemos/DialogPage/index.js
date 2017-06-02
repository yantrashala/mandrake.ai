/*
  Get more info from:
  http://www.material-ui.com/#/components/dialog
*/

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { white, lime500 } from 'material-ui/styles/colors';
import PageBase from '../../../components/PageBase';

const styles = {
  container: {
    marginTop: 50,
  },
  radioButton: {
    marginTop: 16,
  },
};

class DialogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openExample1: false,
      openExample2: false,
      openExample3: false,
    };

    this.handleOpenExample1 = this.handleOpenExample1.bind(this);
    this.handleOpenExample2 = this.handleOpenExample2.bind(this);
    this.handleOpenExample3 = this.handleOpenExample3.bind(this);
    this.handleCloseExample1 = this.handleCloseExample1.bind(this);
    this.handleCloseExample2 = this.handleCloseExample2.bind(this);
    this.handleCloseExample3 = this.handleCloseExample3.bind(this);
  }

  handleOpenExample1() {
    this.setState({
      openExample1: true,
    });
  }

  handleOpenExample2() {
    this.setState({
      openExample2: true,
    });
  }

  handleOpenExample3() {
    this.setState({
      openExample3: true,
    });
  }

  handleCloseExample1() {
    this.setState({
      openExample1: false,
    });
  }

  handleCloseExample2() {
    this.setState({
      openExample2: false,
    });
  }

  handleCloseExample3() {
    this.setState({
      openExample3: false,
    });
  }

  render() {
    const actionsExample1 = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleCloseExample1}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.handleCloseExample1}
      />,
    ];

    const actionsExample2 = [
      <FlatButton
        label="Ok"
        primary
        keyboardFocused
        onTouchTap={this.handleCloseExample2}
      />,
    ];

    const actionsExample3 = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleCloseExample3}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.handleCloseExample3}
      />,
    ];

    const radios = [];
    for (let i = 0; i < 30; i += 1) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${i + 1}`}
          style={styles.radioButton}
        />
      );
    }

    return (
      <PageBase
        title="Dialog Page"
        navigation="Application / Dialog Page"
        minHeight={180}
      >
        <div className="row" style={styles.container}>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <RaisedButton primary label="Dialog" onTouchTap={this.handleOpenExample1} />
            <Dialog
              title="Dialog With Actions"
              actions={actionsExample1}
              modal={false}
              open={this.state.openExample1}
              onRequestClose={this.handleCloseExample1}
            >
              The actions in this window were passed in as an array of React objects.
            </Dialog>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <RaisedButton secondary label="Scrollable Dialog" onTouchTap={this.handleOpenExample3} />
            <Dialog
              title="Scrollable Dialog"
              actions={actionsExample3}
              modal={false}
              open={this.state.openExample3}
              onRequestClose={this.handleCloseExample3}
              autoScrollBodyContent
            >
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                {radios}
              </RadioButtonGroup>
            </Dialog>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <RaisedButton labelColor={white} backgroundColor={lime500} label="Dialog With Date Picker" onTouchTap={this.handleOpenExample2} />
            <Dialog
              title="Dialog With Date Picker"
              actions={actionsExample2}
              modal={false}
              open={this.state.openExample2}
              onRequestClose={this.handleCloseExample2}
            >
              Open a Date Picker dialog from within a dialog.
              <DatePicker hintText="Date Picker" />
            </Dialog>
          </div>
        </div>
      </PageBase>
    );
  }
}

export default DialogPage;
