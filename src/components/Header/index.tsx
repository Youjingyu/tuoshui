import * as React from 'react';
import './header.scss';

export default class Header extends React.Component {
  public state: { activeIndex: number}
  constructor (props:any) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }
  public render () {
    const { activeIndex } = this.state
    const tagName = ['广场', '好友', '自己']
    return (
      <nav className="header clearfix">
        {tagName.map((name, i) => {
          return (<span
            key={i}
            className={activeIndex === i ? 'active' : ''}
            onClick={this.switch.bind(this, i)}
            >{name}</span>)
        })}
      </nav>
    );
  }
  private switch (index:number) {
    this.setState({
      activeIndex: index
    })
  }
}