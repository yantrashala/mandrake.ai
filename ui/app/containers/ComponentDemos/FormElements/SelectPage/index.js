/*
  Get more info from:
  http://www.material-ui.com/#/components/select-field
*/

import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PageBase from '../../../../components/PageBase';

const styles = {
  container: {
    marginTop: 50,
  },
  customWidth: {
    width: 150,
  },
};

class SelectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 1,
      value2: null,
    };

    this.handleChangeExample1 = this.handleChangeExample1.bind(this);
    this.handleChangeExample2 = this.handleChangeExample2.bind(this);
  }

  handleChangeExample1(event, index, value) {
    this.setState({
      value1: value,
    });
  }

  handleChangeExample2(event, index, value) {
    this.setState({
      value2: value,
    });
  }

  render() {
    return (
      <PageBase
        title="Select Page"
        navigation="Application / Form Elements / Select Page"
        minHeight={420}
      >
        <div className="row" style={styles.container}>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
            <SelectField
              floatingLabelText="Frequency"
              value={this.state.value1}
              onChange={this.handleChangeExample1}
            >
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <br />
            <SelectField floatingLabelText="Frequency" value={1} disabled>
              <MenuItem value={1} primaryText="Disabled" />
              <MenuItem value={2} primaryText="Every Night" />
            </SelectField>
            <br />
            <SelectField
              floatingLabelText="Frequency"
              value={this.state.value1}
              onChange={this.handleChangeExample1}
              style={styles.customWidth}
            >
              <MenuItem value={1} primaryText="Custom width" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <br />
            <SelectField
              floatingLabelText="Frequency"
              value={this.state.value1}
              onChange={this.handleChangeExample1}
              autoWidth
            >
              <MenuItem value={1} primaryText="Auto width" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </SelectField>
            <br />
            <SelectField
              floatingLabelText="Ready?"
              value={this.state.value2}
              onChange={this.handleChangeExample2}
            >
              <MenuItem value={null} primaryText="" />
              <MenuItem value={false} primaryText="No" />
              <MenuItem value primaryText="Yes" />
            </SelectField>
          </div>
        </div>
      </PageBase>
    );
  }
}

export default SelectPage;
