/*
 *
 * ApidemoPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  Card,
  CardActions,
  CardHeader,
  CardText } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import { white, lightBlue600, pink500 } from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';
import * as apidemoActions from './actions';
import makeSelectApidemoPage from './selectors';
import { selectGlobal } from '../../../containers/App/selectors';
import PageBase from '../../../components/PageBase';

const styles = {
  container: {
    marginTop: 50,
  },
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex: 1,
  },
  cardHeader: {
    backgroundColor: 'black',
  },
  cardActions: {
    backgroundColor: lightBlue600,
  },
  cardButtonActions: {
    color: white,
  },
};

export class ApidemoPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      openAddEditDialog: false,
      addOrEditText: 'Add',
      selectedPost: null,
      posts: [],
      showSnackbar: false,
      snackbarMessage: '',
    };

    this.addEditPost = this.addEditPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.selectPostToBeAdded = this.selectPostToBeAdded.bind(this);
    this.selectPostToBeDeleted = this.selectPostToBeDeleted.bind(this);
    this.selectPostToBeEdited = this.selectPostToBeEdited.bind(this);
    this.handleCloseDeleteDialog = this.handleCloseDeleteDialog.bind(this);
    this.handleCloseAddEditDialog = this.handleCloseAddEditDialog.bind(this);
    this.titleTextFieldChanged = this.titleTextFieldChanged.bind(this);
    this.bodyTextFieldChanged = this.bodyTextFieldChanged.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
  }

  componentDidMount() {
    this.props.actions.getPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.apiDemoStore.message !==
    nextProps.apiDemoStore.message &&
    nextProps.apiDemoStore.message !== '') {
      this.setState({
        showSnackbar: true,
        snackbarMessage: nextProps.apiDemoStore.message,
      });
    }
  }

  getAvatar(userId) {
    let avatar = '';
    switch (userId) {
      case 1:
      case 9:
      case 5:
      case 7:
        avatar = 'http://www.material-ui.com/images/ok-128.jpg';
        break;
      case 3:
      case 4:
      case 8:
        avatar = 'http://www.material-ui.com/images/uxceo-128.jpg';
        break;
      case 6:
      case 2:
      case 10:
        avatar = 'http://www.material-ui.com/images/jsa-128.jpg';
        break;
      default:
        break;
    }

    return avatar;
  }

  addEditPost() {
    const selectedPost = this.state.selectedPost;

    if (this.state.addOrEditText === 'Add') {
      this.props.actions.createPost(selectedPost);
    } else {
      this.props.actions.updatePost(selectedPost);
    }

    this.setState({
      openAddEditDialog: false,
      selectedPost: null,
    });
  }

  deletePost() {
    const selectedPost = this.state.selectedPost;

    this.setState({
      openDeleteDialog: false,
      selectedPost: null,
    });

    this.props.actions.deletePost(selectedPost);
  }

  selectPostToBeAdded() {
    this.setState({
      addOrEditText: 'Add',
      openAddEditDialog: true,
      selectedPost: {
        userId: 1, // Default user
        title: '',
        body: '',
      },
    });
  }

  selectPostToBeEdited(post) {
    this.setState({
      addOrEditText: 'Edit',
      openAddEditDialog: true,
      selectedPost: post,
    });
  }

  selectPostToBeDeleted(post) {
    this.setState({
      openDeleteDialog: true,
      selectedPost: post,
    });
  }

  handleCloseAddEditDialog() {
    this.setState({
      openAddEditDialog: false,
      selectedPost: null,
    });
  }

  handleCloseDeleteDialog() {
    this.setState({
      openDeleteDialog: false,
      selectedPost: null,
    });
  }

  titleTextFieldChanged(input) {
    const title = input.target.value;
    const selectedPost = Object.assign({}, this.state.selectedPost, { title });

    this.setState({
      selectedPost,
    });
  }

  bodyTextFieldChanged(input) {
    const body = input.target.value;
    const selectedPost = Object.assign({}, this.state.selectedPost, { body });

    this.setState({
      selectedPost,
    });
  }

  handleSnackbarClose() {
    this.props.actions.clearMessage();

    this.setState({
      showSnackbar: false,
    });
  }

  render() {
    const actionsAddEdit = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleCloseAddEditDialog}
      />,
      <FlatButton
        label={this.state.addOrEditText}
        primary
        keyboardFocused
        onTouchTap={this.addEditPost}
        disabled={this.state.selectedPost
        && (this.state.selectedPost.title.length === 0
        || this.state.selectedPost.body.length === 0)}
      />,
    ];

    const actionsDelete = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleCloseDeleteDialog}
      />,
      <FlatButton
        label="Delete"
        secondary
        keyboardFocused
        onTouchTap={this.deletePost}
      />,
    ];

    return (
      <PageBase
        title="API Demo"
        navigation="Application / API Demo"
        minHeight={180}
      >
        <p>
          We are using rest web APIs from <a href="https://jsonplaceholder.typicode.com/" target="_blank">http://jsonplaceholder.typicode.com</a> website for this demo.
        </p>
        <p>
          Data from this service is fake and use for testing and prototyping purposes.
        </p>
        <p>
          The following API calls are executed through <strong>actions, sagas and reducers</strong>:
        </p>
        <div className="row">
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md m-b-15">
            <Table>
              <TableBody
                displayRowCheckbox={false}
                showRowHover
                stripedRows={false}
              >
                <TableRow>
                  <TableRowColumn>
                    <strong>GET</strong>
                  </TableRowColumn>
                  <TableRowColumn>
                    <a
                      href="https://jsonplaceholder.typicode.com/posts" target="_blank"
                    >
                      /posts
                    </a>
                  </TableRowColumn>
                  <TableRowColumn>
                      100 items
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>
                    <strong>GET</strong>
                  </TableRowColumn>
                  <TableRowColumn>
                    <a
                      href="https://jsonplaceholder.typicode.com/posts/1" target="_blank"
                    >
                      /posts/1
                    </a>
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>
                    <strong>POST</strong>
                  </TableRowColumn>
                  <TableRowColumn>
                      /posts
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>
                    <strong>PUT</strong>
                  </TableRowColumn>
                  <TableRowColumn>
                      /posts/1
                  </TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>
                    <strong>DELETE</strong>
                  </TableRowColumn>
                  <TableRowColumn>
                      /posts/1
                  </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <p>
          Try adding, editing or removing posts:
        </p>
        <div className="row" style={styles.container}>
          { this.props.apiDemoStore.loading ? (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md m-b-15">
              loading...
            </div>
          ) : (
            this.props.apiDemoStore.posts.map((post) => (
              <div key={post.id} className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md m-b-15">
                <Card>
                  <CardHeader
                    title={post.id}
                    subtitle={post.title}
                    avatar={this.getAvatar(post.userId)}
                    actAsExpander
                    showExpandableButton
                    subtitleColor={'black'}
                  />
                  <CardActions
                    style={styles.cardActions}
                  >
                    <FlatButton style={styles.cardButtonActions} label="Edit" onClick={() => this.selectPostToBeEdited(post)} />
                    <FlatButton style={styles.cardButtonActions} label="Delete" onClick={() => this.selectPostToBeDeleted(post)} />
                  </CardActions>
                  <CardText expandable>
                    {post.body}
                  </CardText>
                </Card>
              </div>
            ))
          )}
        </div>
        <FloatingActionButton style={styles.floatingActionButton} iconStyle={{ backgroundColor: pink500 }}>
          <FontIcon onClick={this.selectPostToBeAdded} className="material-icons">add</FontIcon>
        </FloatingActionButton>
        <Dialog
          title={`Delete post ${this.state.selectedPost && this.state.selectedPost.id}`}
          actions={actionsDelete}
          modal={false}
          open={this.state.openDeleteDialog}
          onRequestClose={this.handleCloseDeleteDialog}
        >
          Are you sure you want to delete this post?
        </Dialog>
        <Dialog
          title={`${this.state.addOrEditText} post ${this.state.selectedPost && this.state.addOrEditText === 'Edit' ? this.state.selectedPost.id : ''}`}
          actions={actionsAddEdit}
          modal
          open={this.state.openAddEditDialog}
          onRequestClose={this.handleCloseAddEditDialog}
        >
          {
            this.state.selectedPost ? (
              <div>
                <TextField
                  floatingLabelText="Title"
                  underlineShow={false}
                  defaultValue={this.state.selectedPost.title}
                  fullWidth
                  errorText={this.state.selectedPost.title.length === 0 ? 'This field is required.' : ''}
                  onBlur={this.titleTextFieldChanged}
                />
                <Divider />
                <TextField
                  floatingLabelText="Body"
                  underlineShow={false}
                  multiLine
                  rows={4}
                  defaultValue={this.state.selectedPost.body}
                  fullWidth
                  errorText={this.state.selectedPost.body.length === 0 ? 'This field is required.' : ''}
                  onBlur={this.bodyTextFieldChanged}
                />
                <Divider />
              </div>
            ) : null
          }
        </Dialog>
        <Snackbar
          open={this.state.showSnackbar}
          message={this.state.snackbarMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleSnackbarClose}
        />
      </PageBase>
    );
  }
}

ApidemoPage.propTypes = {
  actions: React.PropTypes.object.isRequired,
  apiDemoStore: React.PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  apiDemoStore: makeSelectApidemoPage(),
  appStore: selectGlobal(),
});

function mapDispatchToProps(dispatch) {
  // You can use actions from another container, for example appActions, like this:
  // const actions = bindActionCreators({ ...appActions, ...apidemoActions }, dispatch);

  const actions = bindActionCreators({ ...apidemoActions }, dispatch);
  return {
    actions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApidemoPage);
