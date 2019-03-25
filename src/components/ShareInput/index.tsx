import avatar from "assets/img/avatar.png"
import * as React from "react"
import "./shareInput.scss"

export default class Header extends React.Component {
  public render() {
    return (
      <div className="clearfix" styleName="send_input">
        <img src={avatar} alt="" />
        <div styleName="input">和脱友们分享自己的想法…</div>
      </div>
    )
  }
}
