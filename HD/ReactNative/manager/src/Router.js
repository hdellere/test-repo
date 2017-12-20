import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="root">

        <Scene key="auth" initial>

          <Scene
            key="login"
            component={LoginForm}
            title="Login"
            initial
          />

        </Scene>

        <Scene key="main">

          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />

          <Scene
            onRight={() => console.log('right')}
            rightTitle="Add"
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />

        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
