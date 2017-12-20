import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card style={styles.container}>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate(
              { prop: 'name', value: text }
            )}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate(
              { prop: 'phone', value }
            )}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerStyle}>Select a Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate(
              { prop: 'shift', value }
            )}
          >

            <Picker.Item label="Monday" value="monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />

          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickerStyle: {
    fontSize: 18,
    paddingLeft: 20,
    alignSelf: 'center'
  }
});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);