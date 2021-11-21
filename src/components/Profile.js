import { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const Private = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchRepos = async () => {
      const res = await axios.get('https://api.github.com/user', {
        headers: {
          "Authorization": "token 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"
        }
      })
      console.log(`res.data`, res.data);
      setUser(res.data);
      console.log(`user`, user)
    }

    fetchRepos();

  }, []);

  return (
    <Fragment>
      <h1>Username: {user.login}</h1>
      <Link to='/repos'>Get Repos</Link>
    </Fragment>
  )
}

export default Private;