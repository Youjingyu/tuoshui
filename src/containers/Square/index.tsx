import * as React from 'react';
import { ShareInput } from '../../components';
import './square.scss';

export default class Header extends React.Component {
  public render () {
    return (
      <main styleName="square">
        <ShareInput/>
      </main>
    );
  }
}