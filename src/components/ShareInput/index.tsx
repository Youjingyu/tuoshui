import avatar from 'assets/img/avatar.png';
import * as React from 'react';
import './shareInput.scss';

export default class Header extends React.Component {
  public render () {
    return (
      <div className="send_input clearfix">
        <img src={avatar} alt="" />
        <div className="input">和脱友们分享自己的想法…</div>
      </div>
    );
  }
}