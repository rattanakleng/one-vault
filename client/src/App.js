import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/share/Navbar/Navbar'
import CreatePassword from './components/pages/CreatePassword'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import ViewPassword from './components/pages/ViewPassword'
import PasswordState from './context/password/PasswordState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import Alerts from './components/share/Alerts/Alerts'

function App() {
  return (
    <div className="App">
      <AuthState>
        <PasswordState>
          <AlertState>
            <Router>
              <Navbar />
              <Alerts />
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/viewPassword" component={ViewPassword} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/createPassword"
                  component={CreatePassword}
                />
              </Switch>
            </Router>
          </AlertState>
        </PasswordState>
      </AuthState>
    </div>
  )
}

export default App
