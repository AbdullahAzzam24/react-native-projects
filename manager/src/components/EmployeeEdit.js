import _ from 'lodash';
import React, {Component} from 'react';
import Communications from 'react-native-communications';
import {connect} from 'react-redux';
import {employeeUpdate, employeeSave} from '../actions';
import EmployeeForm from './EmployeeForm';
import {Card, CardSection, Button} from './common';

class EmployeeEdit extends Component {
  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;

    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }

  onTextPress() {
    const {phone, shift} = this.props;

    Communications.textWithoutEncoding(
      phone,
      `Your upcoming shift in on ${shift}`,
    );
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(
  mapStateToProps,
  {employeeUpdate, employeeSave},
)(EmployeeEdit);
