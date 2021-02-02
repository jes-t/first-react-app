import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HashRouter, withRouter } from 'react-router-dom'
import { store } from './redux/redux-store'
import { Provider } from 'react-redux'

const AppWithRouter = withRouter((props) => <App {...props} />)

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <AppWithRouter />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
)
