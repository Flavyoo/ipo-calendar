import * as serviceWorker from './serviceWorker'
import { MuiThemeProvider } from '@material-ui/core'

import { DefaultThemeLight } from './theme/theme'
import { CompanyDataPage, Home } from './pages'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

const AppToRender = () => {
  return (
    <React.StrictMode>
      <MuiThemeProvider theme={DefaultThemeLight}>
        <Router>
          <Home path="/" />
          <CompanyDataPage path="/:companySlug" />
        </Router>
      </MuiThemeProvider>
    </React.StrictMode>
  )
}
ReactDOM.render(<AppToRender />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
