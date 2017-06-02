/*
  Get more info from:
  https://material.io/icons/
  https://github.com/mikamaunula/react-material-icons
*/

import React from 'react';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import PageBase from '../../../components/PageBase';
import actionIcons from './MaterialIcons/Action';
import alertIcons from './MaterialIcons/Alert';
import avIcons from './MaterialIcons/AV';
import communicationIcons from './MaterialIcons/Communication';
import contentIcons from './MaterialIcons/Content';
import deviceIcons from './MaterialIcons/Device';
import editorIcons from './MaterialIcons/Editor';
import fileIcons from './MaterialIcons/File';
import hardwareIcons from './MaterialIcons/Hardware';
import imageIcons from './MaterialIcons/Image';
import mapsIcons from './MaterialIcons/Maps';
import navigationIcons from './MaterialIcons/Navigation';
import notificationIcons from './MaterialIcons/Notification';
import socialIcons from './MaterialIcons/Social';
import toggleIcons from './MaterialIcons/Toggle';

const styles = {
  container: {
    marginTop: 0,
  },
  radioButton: {
    marginTop: 16,
  },
  iconsGroup: {
    marginTop: 10,
  },
  icons: {
    marginTop: 5,
    marginBottom: 5,
    minWidth: 100,
    textAlign: 'center',
  },
  icon: {
    fontSize: 48,
    height: 48,
    width: 48,
    color: '#757575',
  },
  iconDisplayName: {
    fontSize: 11,
    color: '#757575',
  },
  divider: {
    marginTop: 10,
  },
};

class CardPage extends React.Component {
  constructor() {
    super();

    this.state = {
      icons: [],
    };

    this.createIconsList = this.createIconsList.bind(this);
    this.getIconDisplayName = this.getIconDisplayName.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }

  componentWillMount() {
    this.createIconsList('Action', actionIcons);
    this.createIconsList('Alert', alertIcons);
    this.createIconsList('AV', avIcons);
    this.createIconsList('Communication', communicationIcons);
    this.createIconsList('Content', contentIcons);
    this.createIconsList('Device', deviceIcons);
    this.createIconsList('Editor', editorIcons);
    this.createIconsList('File', fileIcons);
    this.createIconsList('Hardware', hardwareIcons);
    this.createIconsList('Image', imageIcons);
    this.createIconsList('Maps', mapsIcons);
    this.createIconsList('Navigation', navigationIcons);
    this.createIconsList('Notification', notificationIcons);
    this.createIconsList('Social', socialIcons);
    this.createIconsList('Toggle', toggleIcons);
  }

  getIconDisplayName(icon) {
    return icon
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, (str) => str.toUpperCase());
  }

  createIconsList(iconLibraryTitle, iconLibrary) {
    const icons = this.state.icons;
    icons.push({
      iconLibraryTitle,
      iconLibrary,
    });

    this.setState({
      icons,
    });
  }

  renderIcon(icon) {
    return <FontIcon style={styles.icon} className="material-icons">{icon}</FontIcon>;
  }

  render() {
    return (<PageBase
      title="Icons Page"
      navigation="Application / Icons Page"
      minHeight={500}
    >
      <div className="row" style={styles.container}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md m-b-15">
          {this.state.icons.map((library, index) =>
            <div key={index}>
              <h3>{library.iconLibraryTitle}</h3>
              <Divider />
              <div style={styles.iconsGroup} className="row">
                {Object.keys(library.iconLibrary).map((item, childIndex) =>
                  <div key={childIndex} style={styles.icons} className="col-xs-2 col-sm-2 col-md-1 col-lg-1 col-md">
                    {this.renderIcon(library.iconLibrary[item])}
                    <div
                      style={styles.iconDisplayName}
                    >
                      {this.getIconDisplayName(item)}
                    </div>
                  </div>
                )}
              </div>
              <Divider style={styles.divider} />
            </div>
          )}
        </div>
      </div>
    </PageBase>);
  }
}

export default CardPage;
