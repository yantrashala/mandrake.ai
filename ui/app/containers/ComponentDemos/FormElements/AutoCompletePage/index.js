/*
  Get more info from:
  http://www.material-ui.com/#/components/auto-complete
*/

import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import PageBase from '../../../../components/PageBase';

const styles = {
  container: {
    marginTop: 50,
  },
};

const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];

const dataSource2 = ['12345', '23456', '34567'];

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

class AutoCompletePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    return (
      <PageBase
        title="Auto Complete Page"
        navigation="Application / Form Elements / Auto Complete Page"
        minHeight={430}
      >
        <div className="row" style={styles.container}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md m-b-15">
            <AutoComplete
              hintText="Type anything"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
            />
            <AutoComplete
              hintText="Type anything"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
              floatingLabelText="Full width"
              fullWidth
            />
            <AutoComplete
              hintText="text-value data"
              filter={AutoComplete.noFilter}
              dataSource={dataSource1}
            /><br />
            <AutoComplete
              floatingLabelText="showAllItems"
              filter={AutoComplete.noFilter}
              openOnFocus
              dataSource={dataSource2}
            /><br />
            <AutoComplete
              floatingLabelText="Type 'r', case insensitive"
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={colors}
            />
            <br />
            <AutoComplete
              floatingLabelText="Type 'peah', fuzzy search"
              filter={AutoComplete.fuzzyFilter}
              dataSource={fruit}
              maxSearchResults={5}
            />
          </div>
        </div>
      </PageBase>
    );
  }
}

export default AutoCompletePage;
