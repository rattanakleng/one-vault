import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ViewPassword from './components/pages/ViewPassword'
import CreatePassword from './components/pages/CreatePassword'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Alerts from './components/layout/Alerts'
import PrivateRoute from './components/routing/PrivateRoute'
import PasswordState from './context/password/PasswordState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import './App.css'

const App = () => {
  return (
    <AuthState>
      <PasswordState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />

              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={ViewPassword} />
                <Route
                  exact
                  path="/createpassword"
                  component={CreatePassword}
                />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Fragment>
          </Router>
        </AlertState>
      </PasswordState>
    </AuthState>
  )
}

export default App
