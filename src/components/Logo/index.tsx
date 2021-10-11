import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import './style.scss';
import reachWhite from '../../images/reach_white.svg';
import reachBlack from '../../images/reach_black.svg';

const Logo = () => {
  const authorization = useSelector((state: any) => state.authorization);

  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  return (
    <div className="logo">
      {profile.theme === 'theme_light' && (
        <img className="logo--image" src={reachBlack} alt="Reach logo" />
      )}
      {profile.theme !== 'theme_light' && (
        <img className="logo--image" src={reachWhite} alt="Reach logo" />
      )}
    </div>
  );
};

export default Logo;
