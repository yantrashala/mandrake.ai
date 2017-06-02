/*
  Get more info from:
  http://www.material-ui.com/#/components/date-picker
*/

import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import PageBase from '../../../../components/PageBase';

const styles = {
  container: {
    marginTop: 50,
  },
};

class DatePickerPage extends React.Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate,
      maxDate,
      autoOk: false,
      disableYearSelection: false,
      controlledDate: null,
    };

    this.handleChangeMinDate = this.handleChangeMinDate.bind(this);
    this.handleChangeMaxDate = this.handleChangeMaxDate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.disableWeekends = this.disableWeekends.bind(this);
    this.disableRandomDates = this.disableRandomDates.bind(this);
  }

  handleChangeMinDate(event, date) {
    this.setState({
      minDate: date,
    });
  }

  handleChangeMaxDate(event, date) {
    this.setState({
      maxDate: date,
    });
  }

  handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  handleChange(event, date) {
    this.setState({
      controlledDate: date,
    });
  }

  disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  disableRandomDates() {
    return Math.random() > 0.7;
  }

  render() {
    return (
      <PageBase
        title="DatePicker Page"
        navigation="Application / Form Elements / DatePicker Page"
        minHeight={420}
      >
        <div className="row" style={styles.container}>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <DatePicker hintText="Portrait Dialog" />
            <DatePicker hintText="Landscape Dialog" mode="landscape" />
            <DatePicker hintText="Dialog Disabled" disabled />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <DatePicker hintText="Portrait Inline Dialog" container="inline" />
            <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
            <DatePicker
              floatingLabelText="Ranged Date Picker"
              autoOk={this.state.autoOk}
              minDate={this.state.minDate}
              maxDate={this.state.maxDate}
              disableYearSelection={this.state.disableYearSelection}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <DatePicker
              onChange={this.handleChangeMinDate}
              autoOk={this.state.autoOk}
              floatingLabelText="Min Date"
              defaultDate={this.state.minDate}
              disableYearSelection={this.state.disableYearSelection}
            />
            <DatePicker
              onChange={this.handleChangeMaxDate}
              autoOk={this.state.autoOk}
              floatingLabelText="Max Date"
              defaultDate={this.state.maxDate}
              disableYearSelection={this.state.disableYearSelection}
            />
            <DatePicker
              hintText="Controlled Date Input"
              value={this.state.controlledDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <DatePicker hintText="Weekends Disabled" shouldDisableDate={this.disableWeekends} />
            <DatePicker hintText="Random Dates Disabled" shouldDisableDate={this.disableRandomDates} />
          </div>
        </div>
      </PageBase>
    );
  }
}

export default DatePickerPage;
