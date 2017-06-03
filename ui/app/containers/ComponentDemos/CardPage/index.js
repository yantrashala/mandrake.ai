/*
  Get more info from:
  http://www.material-ui.com/#/components/card
*/

import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  CardMedia,
  CardTitle,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import { blue600, white, red400 } from 'material-ui/styles/colors';
import PageBase from '../../../components/PageBase';

const styles = {
  container: {
    marginTop: 50,
  },
  radioButton: {
    marginTop: 16,
  },
};

class CardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
  }

  handleExpandChange(expanded) {
    this.setState({
      expanded,
    });
  }

  handleToggle(event, toggle) {
    this.setState({
      expanded: toggle,
    });
  }

  handleExpand() {
    this.setState({
      expanded: true,
    });
  }

  handleReduce() {
    this.setState({
      expanded: false,
    });
  }

  render() {
    return (
      <PageBase
        title="Card Page"
        navigation="Application / Card Page"
        minHeight={180}
      >
        <div className="row" style={styles.container}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md m-b-15">
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar="http://www.material-ui.com/images/ok-128.jpg"
                actAsExpander
                showExpandableButton
                style={{ backgroundColor: blue600 }}
                titleColor={white}
                subtitleColor={white}
                className="card-open-close-icon"
              />
              <CardText>
                <Toggle
                  toggled={this.state.expanded}
                  onToggle={this.handleToggle}
                  labelPosition="right"
                  label="This toggle controls the expanded state of the component."
                />
              </CardText>
              <CardMedia
                expandable
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="nature-600-337" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" expandable />
              <CardText expandable>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label="Expand" onTouchTap={this.handleExpand} />
                <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="row" style={styles.container}>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md m-b-15">
            <Card>
              <CardHeader
                title="Without Avatar"
                subtitle="Subtitle"
                actAsExpander
                showExpandableButton
                style={{ backgroundColor: red400 }}
                titleColor={white}
                subtitleColor={white}
                className="card-open-close-icon"
              />
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
              <CardText expandable>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </div>
      </PageBase>
    );
  }
}

export default CardPage;
