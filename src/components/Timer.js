/* @flow */
import React, { Component } from 'react';
import { ipcRenderer } from 'electron';

const updateSomething = () => {
  ipcRenderer.send('event', 'value');
};

export default class extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}
