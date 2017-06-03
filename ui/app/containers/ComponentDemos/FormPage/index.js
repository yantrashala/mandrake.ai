import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../../../components/PageBase';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({
      value,
    });
  }

  render() {
    const styles = {
      toggleDiv: {
        maxWidth: 120,
        marginTop: 40,
        marginBottom: 5,
      },
      toggleLabel: {
        color: grey400,
        fontWeight: 100,
      },
      buttons: {
        marginTop: 30,
        float: 'right',
      },
      saveButton: {
        marginLeft: 5,
      },
    };

    return (
      <PageBase
        title="Form Page"
        navigation="Application / Form Page"
        minHeight={350}
      >
        <form>

          <TextField
            hintText="First Name"
            floatingLabelText="First Name"
            fullWidth
          />

          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name"
            fullWidth
          />

          <TextField
            hintText="Address"
            floatingLabelText="Address"
            fullWidth
          />

          <SelectField
            floatingLabelText="City"
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
          >
            <MenuItem value={1} primaryText="New York" />
            <MenuItem value={2} primaryText="London" />
            <MenuItem value={3} primaryText="Paris" />
            <MenuItem value={4} primaryText="Rome" />
          </SelectField>

          <DatePicker
            hintText="Hire Date"
            floatingLabelText="Hire Date"
            fullWidth
          />

          <div style={styles.toggleDiv}>
            <Toggle
              label="Is Active"
              labelStyle={styles.toggleLabel}
            />
          </div>

          <Divider />

          <div style={styles.buttons}>
            <Link to="/table">
              <RaisedButton label="Cancel" />
            </Link>
            <Link to="/table">
              <RaisedButton
                label="Save"
                style={styles.saveButton}
                primary
              />
            </Link>
          </div>
        </form>
      </PageBase>
    );
  }
}

export default FormPage;
