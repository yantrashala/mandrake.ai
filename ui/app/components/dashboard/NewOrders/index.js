import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { white, purple600, purple500 } from 'material-ui/styles/colors';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { typography } from 'material-ui/styles';

const NewOrders = (props) => {
  const styles = {
    paper: {
      backgroundColor: purple500,
      height: 250,
    },
    div: {
      height: 185,
      padding: '5px 15px 0 15px',
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: purple600,
      padding: 10,
    },
  };

  return (
    <Paper style={styles.paper}>
      <div style={{ ...styles.header }}>
        New Orders
      </div>
      <div style={styles.div}>
        <ResponsiveContainer >
          <LineChart data={props.data}>
            <XAxis dataKey="name" stroke="none" />
            <Line type="monotone" dataKey="New Orders" stroke="#8884d8" strokeWidth={2} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper >
  );
};

NewOrders.propTypes = {
  data: PropTypes.array,
};

export default NewOrders;
