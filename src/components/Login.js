import { Fragment } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import LoginGithub from 'react-login-github';

const onSuccess = response => {
  console.log(response);
  // axios.post('https://github.com/login/oauth/access_token', {
  //   client_id: '7308313581d232cf7f9c',
  //   client_secret:'13ac3e1e7e7698d3fc80fa5e981e195198b17a25' ,
  //   code: response,
  //   redirect_uri: 'http://localhost:3000/login'
  // }).then(s => console.log(s))
  // .catch(e => console.log(e))

};
const onFailure = response => console.error(response);


const Login = () => {

  return (
    <Fragment>
      <LoginGithub clientId={process.env.REACT_APP_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        scope="user"
      />
    </Fragment>
  )
}

export default Login;