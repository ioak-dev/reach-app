import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import ListSpaces from './ListSpaces';
import GettingStartedSpace from './GettingStartedSpace';

interface Props {
  history: any;
}

const Home = (props: Props) => {
  const authorization = useSelector((state: any) => state.authorization);

  const goToLogin = () => {
    window.location.href = `${process.env.REACT_APP_ONEAUTH_URL}/#/realm/${process.env.REACT_APP_ONEAUTH_APPSPACE_ID}/login/${process.env.REACT_APP_ONEAUTH_APP_ID}`;
  };

  return (
    <div className="landing">
      {/* <ListSpaces history={props.history} /> */}
      Welcome to reach home
    </div>
  );
};

export default Home;
