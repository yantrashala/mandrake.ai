/*
  Get more info from:
  http://www.material-ui.com/#/components/time-picker
*/

import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import PageBase from '../../../../components/PageBase';

const styles = {
  container: {
    marginTop: 50,
  },
};

class TimePickerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value24: null,
      value12: null,
    };

    this.handleChangeTimePicker24 = this.handleChangeTimePicker24.bind(this);
    this.handleChangeTimePicker12 = this.handleChangeTimePicker12.bind(this);
  }

  handleChangeTimePicker24(event, date) {
    this.setState({ value24: date });
  }

  handleChangeTimePicker12(event, date) {
    this.setState({ value12: date });
  }

  render() {
    return (
      <PageBase
        title="TimePicker Page"
        navigation="Application / Form Elements / TimePicker Page"
        minHeight={220}
      >
        <div className="row" style={styles.container}>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <TimePicker
              hintText="12hr Format"
            />
            <TimePicker
              hintText="12hr Format with auto ok"
              autoOk
            />
            <TimePicker
              format="24hr"
              hintText="24hr Format"
            />
            <TimePicker
              disabled
              format="24hr"
              hintText="Disabled TimePicker"
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <TimePicker
              format="ampm"
              hintText="12hr Format"
              value={this.state.value12}
              onChange={this.handleChangeTimePicker12}
            />
            <TimePicker
              format="24hr"
              hintText="24hr Format"
              value={this.state.value24}
              onChange={this.handleChangeTimePicker24}
            />
            <TimePicker
              hintText="Custom Labels"
              okLabel="确定"
              cancelLabel="取消"
            />
          </div>
        </div>
      </PageBase>
    );
  }
}

export default TimePickerPage;
