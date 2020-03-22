import * as React from 'react'
import {Route, Redirect, RouteProps} from 'react-router'
import AuthApi from '../api/AuthApi'

interface Props extends RouteProps {
}

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({location}) =>
        AuthApi.authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location}
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute