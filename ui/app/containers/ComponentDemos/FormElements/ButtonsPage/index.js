/*
  Get more info from:
  http://www.material-ui.com/#/components/flat-button
  http://www.material-ui.com/#/components/raised-button
  http://www.material-ui.com/#/components/floating-action-button
  http://www.material-ui.com/#/components/icon-button
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import PageBase from '../../../../components/PageBase';

const styles = {
  block: {
    marginTop: '1em',
  },
  raisedButton: {
    margin: 12,
  },
  floatingActionButton: {
    marginRight: 20,
  },
};

function SwitchesPage() {
  return (
    <PageBase
      title="Buttons Page"
      navigation="Application / Buttons Page"
      minHeight={400}
    >
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <h3>Flat Button</h3>
          <Divider />
          <div style={styles.block}>
            <FlatButton label="Default" />
            <FlatButton label="Primary" primary />
            <FlatButton label="Secondary" secondary />
            <FlatButton label="Disabled" disabled />
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <h3>Raised Button</h3>
          <Divider />
          <div style={styles.block}>
            <RaisedButton label="Default" style={styles.raisedButton} />
            <RaisedButton label="Primary" style={styles.raisedButton} primary />
            <RaisedButton label="Secondary" style={styles.raisedButton} secondary />
            <RaisedButton label="Disabled" style={styles.raisedButton} disabled />
            <br />
            <br />
            <RaisedButton label="Full width" fullWidth />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <h3>Floating Action Button</h3>
          <Divider />
          <div style={styles.block}>
            <FloatingActionButton style={styles.floatingActionButton}>
              <FontIcon className="material-icons">add</FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini style={styles.floatingActionButton}>
              <FontIcon className="material-icons">add</FontIcon>
            </FloatingActionButton>
            <FloatingActionButton secondary style={styles.floatingActionButton}>
              <FontIcon className="material-icons">add</FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini secondary style={styles.floatingActionButton}>
              <FontIcon className="material-icons">add</FontIcon>
            </FloatingActionButton>
            <FloatingActionButton disabled style={styles.floatingActionButton}>
              <FontIcon className="material-icons">add</FontIcon>
            </FloatingActionButton>
            <FloatingActionButton mini disabled style={styles.floatingActionButton}>
              <FontIcon className="material-icons">add</FontIcon>
            </FloatingActionButton>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <h3>Icon Button</h3>
          <Divider />
          <div style={styles.block}>
            <IconButton tooltip="bottom-right" touch tooltipPosition="bottom-right">
              <FontIcon className="material-icons">grade</FontIcon>
            </IconButton>
            <IconButton tooltip="bottom-center" touch tooltipPosition="bottom-center">
              <FontIcon className="material-icons">grade</FontIcon>
            </IconButton>
            <IconButton tooltip="bottom-left" touch tooltipPosition="bottom-left">
              <FontIcon className="material-icons">grade</FontIcon>
            </IconButton>
            <IconButton tooltip="top-right" touch tooltipPosition="top-right">
              <FontIcon className="material-icons">grade</FontIcon>
            </IconButton>
            <IconButton tooltip="top-center" touch tooltipPosition="top-center">
              <FontIcon className="material-icons">grade</FontIcon>
            </IconButton>
            <IconButton tooltip="top-left" touch tooltipPosition="top-left">
              <FontIcon className="material-icons">grade</FontIcon>
            </IconButton>
          </div>
        </div>
      </div>
    </PageBase>
  );
}

export default SwitchesPage;
