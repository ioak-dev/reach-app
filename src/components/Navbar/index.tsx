import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import './style.scss';

import OakButton from '../../oakui/wc/OakButton';
import Logo from '../Logo';
import RightNav from '../Topbar/RightNav';

interface Props {
  cookies: any;
  //   location: any;
  //   match: any;
  hideSidebarOnDesktop?: boolean;
}

const Navbar = (props: Props) => {
  const history = useHistory();
  const authorization = useSelector((state: any) => state.authorization);

  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  const goToHome = () => {
    history.push(`/home`);
  };

  const reachBlog = () => {
    history.push(`/reach`);
  };

  const newArticle = () => {
    history.push(`/reach?type=create`);
  };

  return (
    <div className="navbar">
      <div className="navbar--left">
        <div className="navbar__left__logo">
          <Logo />
        </div>
        <OakButton
          theme="default"
          shape="sharp"
          variant="outline"
          handleClick={goToHome}
        >
          Home
        </OakButton>
        <OakButton
          theme="default"
          shape="sharp"
          variant="outline"
          handleClick={reachBlog}
        >
          Reach
        </OakButton>
      </div>
      <div className="navbar--right">
        <OakButton
          theme="default"
          shape="sharp"
          variant="outline"
          handleClick={newArticle}
        >
          New Article
        </OakButton>
        <RightNav cookies={props.cookies} />
      </div>
    </div>
  );
};

export default Navbar;
