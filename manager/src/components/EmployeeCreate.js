import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {Card, CardSection, Input, Button} from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;

    this.props.employeeCreate({name, phone, shift});
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeHolder="Jane"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({prop: 'name', value})
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeHolder="555-555-5555"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({prop: 'phone', value})
            }
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <View style={styles.pickerView}>
            <Picker
              style={styles.pickerStyle}
              selectedValue={this.props.shift}
              onValueChange={value =>
                this.props.employeeUpdate({prop: 'shift', value})
              }>
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </View>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerView: {
    flex: 3,
  },
  pickerStyle: {
    flex: 1,
  },
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
  },
};

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(
  mapStateToProps,
  {employeeUpdate, employeeCreate},
)(EmployeeCreate);
