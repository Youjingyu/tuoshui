import * as React from 'react';
import './header.scss';

export default class Header extends React.Component {
  public render () {
    return (
      <nav className="header clearfix">
        <span className="active">广场</span>
        <span>好友</span>
        <span>自己</span>
      </nav>
    );
  }
}