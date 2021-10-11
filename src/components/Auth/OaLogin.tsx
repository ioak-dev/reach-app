import React, { useEffect } from 'react';
import './Login.scss';

const queryString = require('query-string');

interface Props {
  cookies: any;
  history: any;
  location: any;
}

const OaLogin = (props: Props) => {
  useEffect(() => {
    if (props.location.search) {
      const query = queryString.parse(props.location.search);
      props.cookies.set(`reach-access_token`, query.access_token);
      props.cookies.set(`reach-refresh_token`, query.refresh_token);
      props.history.push(query.from ? query.from : '/reach');
    }
  }, []);

  return <></>;
};

export default OaLogin;
