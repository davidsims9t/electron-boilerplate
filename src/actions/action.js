import { ipcRenderer } from 'electron';
const ACTION = 'ACTION';

export const performAction = () => dispatch => {
  ipcRenderer.send('noun:verb1', 'message');
  ipcRenderer.on('noun:verb2', () => {
    dispatch({ type: ACTION, message: 'test' });
  });
};
