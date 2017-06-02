import React from 'react';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import PageBase from '../../../components/PageBase';
import Data from '../../../data';

const TablePage = () => {
  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      color: grey500,
    },
    columns: {
      id: {
        width: '10%',
      },
      name: {
        width: '40%',
      },
      salary: {
        width: '20%',
      },
      department: {
        width: '20%',
      },
      edit: {
        width: '10%',
      },
    },
  };

  return (
    <PageBase
      title="Table Page"
      navigation="Application / Table Page"
      minHeight={466}
    >

      <Link to="/form" >
        <FloatingActionButton style={styles.floatingActionButton} iconStyle={{ backgroundColor: pink500 }}>
          <FontIcon className="material-icons">add</FontIcon>
        </FloatingActionButton>
      </Link>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.salary}>Salary</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.department}>Department</TableHeaderColumn>
            <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Data.tablePage.items.map((item) =>
            <TableRow key={item.id}>
              <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
              <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>
              <TableRowColumn style={styles.columns.salary}>{item.salary}</TableRowColumn>
              <TableRowColumn style={styles.columns.department}>{item.department}</TableRowColumn>
              <TableRowColumn style={styles.columns.edit}>
                <Link className="button" to="/form">
                  <FloatingActionButton
                    zDepth={0}
                    mini
                    backgroundColor={grey200}
                    iconStyle={styles.editButton}
                  >
                    <FontIcon className="material-icons">create</FontIcon>
                  </FloatingActionButton>
                </Link>
              </TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </PageBase>
  );
};

export default TablePage;
