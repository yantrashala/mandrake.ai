/*
  Get more info from:
  http://www.material-ui.com/#/components/text-field
*/

import React from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import PageBase from '../../../../components/PageBase';

const styles = {
  block: {
    marginTop: '1em',
  },
};

function TextFieldPage() {
  return (
    <PageBase
      title="Text Field Page"
      navigation="Application / Form Elements / Text Field Page"
      minHeight={780}
    >
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <h3>Simple</h3>
          <Divider />
          <div style={styles.block}>
            <TextField
              hintText="Hint Text"
            /><br />
            <br />
            <TextField
              hintText="The hint text can be as long as you want, it will wrap."
            /><br />
            <TextField
              id="text-field-default"
              defaultValue="Default Value"
            /><br />
            <TextField
              hintText="Hint Text"
              floatingLabelText="Floating Label Text"
            /><br />
            <TextField
              defaultValue="Default Value"
              floatingLabelText="Floating Label Text"
            /><br />
            <TextField
              hintText="Hint Text"
              floatingLabelText="Fixed Floating Label Text"
              floatingLabelFixed
            /><br />
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"
              type="password"
            /><br />
            <TextField
              hintText="MultiLine with rows: 2 and rowsMax: 4"
              multiLine
              rows={2}
              rowsMax={4}
            /><br />
            <TextField
              hintText="Message Field"
              floatingLabelText="MultiLine and FloatingLabel"
              multiLine
              rows={2}
            /><br />
            <TextField
              hintText="Full width"
              fullWidth
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <h3>Error</h3>
          <Divider />
          <div style={styles.block}>
            <TextField
              hintText="Hint Text"
              errorText="This field is required"
            /><br />
            <TextField
              hintText="Hint Text"
              errorText="The error text can be as long as you want, it will wrap."
            /><br />
            <TextField
              hintText="Hint Text"
              errorText="This field is required"
              floatingLabelText="Floating Label Text"
            /><br />
            <TextField
              hintText="Message Field"
              errorText="This field is required."
              floatingLabelText="MultiLine and FloatingLabel"
              multiLine
              rows={2}
            />
          </div>
        </div>
      </div>
    </PageBase>
  );
}

export default TextFieldPage;
