/*
  Get more info from:
  http://www.material-ui.com/#/components/checkbox
  http://www.material-ui.com/#/components/radio-button
  http://www.material-ui.com/#/components/toggle
*/

import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import PageBase from '../../../../components/PageBase';

const styles = {
  block: {
    marginTop: '1em',
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
  radioButton: {
    marginBottom: 16,
  },
};

function SwitchesPage() {
  return (
    <PageBase
      title="Switches Page"
      navigation="Application / Form Elements / Switches Page"
      minHeight={650}
    >
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <h3>Checkbox</h3>
          <Divider />
          <div style={styles.block}>
            <Checkbox
              label="Simple"
              style={styles.checkbox}
            />
            <Checkbox
              checkedIcon={<FontIcon className="material-icons">favorite</FontIcon>}
              uncheckedIcon={<FontIcon className="material-icons">favorite_border</FontIcon>}
              label="Custom icon"
              style={styles.checkbox}
            />
            <Checkbox
              checkedIcon={<FontIcon className="material-icons">visibility</FontIcon>}
              uncheckedIcon={<FontIcon className="material-icons">visibility_off</FontIcon>}
              label="Custom icon of different shapes"
              style={styles.checkbox}
            />
            <Checkbox
              label="Disabled unchecked"
              disabled
              style={styles.checkbox}
            />
            <Checkbox
              label="Disabled checked"
              checked
              disabled
              style={styles.checkbox}
            />
            <Checkbox
              label="Label on the left"
              labelPosition="left"
              style={styles.checkbox}
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <h3>Radio Button</h3>
          <Divider />
          <div style={styles.block}>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton
                value="light"
                label="Simple"
                style={styles.radioButton}
              />
              <RadioButton
                value="not_light"
                label="Selected by default"
                style={styles.radioButton}
              />
              <RadioButton
                value="ludicrous"
                label="Custom icon"
                checkedIcon={<FontIcon className="material-icons">favorite</FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons">favorite_border</FontIcon>}
                style={styles.radioButton}
              />
            </RadioButtonGroup>
            <RadioButtonGroup name="shipName" defaultSelected="community">
              <RadioButton
                value="enterprise"
                label="Disabled unchecked"
                disabled
                style={styles.radioButton}
              />
              <RadioButton
                value="community"
                label="Disabled checked"
                disabled
                style={styles.radioButton}
              />
            </RadioButtonGroup>
            <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
              <RadioButton
                value="reverse"
                label="Label on the left"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </div>
        </div>
      </div>
      <div className="row" style={styles.container}>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <h3>Toggle</h3>
          <Divider />
          <div style={styles.block}>
            <Toggle
              label="Simple"
              style={styles.toggle}
            />
            <Toggle
              label="Toggled by default"
              defaultToggled
              style={styles.toggle}
            />
            <Toggle
              label="Disabled"
              disabled
              style={styles.toggle}
            />
            <Toggle
              label="Label on the right"
              labelPosition="right"
              style={styles.toggle}
            />
            <Toggle
              label="Styling"
              thumbStyle={styles.thumbOff}
              trackStyle={styles.trackOff}
              thumbSwitchedStyle={styles.thumbSwitched}
              trackSwitchedStyle={styles.trackSwitched}
              labelStyle={styles.labelStyle}
            />
          </div>
        </div>
      </div>
    </PageBase>
  );
}

export default SwitchesPage;
