import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderItem({ item }) {
    return (<ListItem employee={item} />);
  }

  render() {
    console.log(this.props);
    return (
      <FlatList
        style={styles.container}
        data={this.props.employees}
        renderItem={this.renderItem} // Only for test
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => ({
      ...val,
      key: uid
  }));
  return { employees };
};

export default connect(mapStateToProps, {
  employeesFetch
})(EmployeeList);
