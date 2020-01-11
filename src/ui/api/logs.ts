import { ipcRenderer } from 'electron';
import store from '@ui/store';

export const listenForLogs = () => {
  ipcRenderer.on('api/logs/addWidgetLog', (_event, { text, id }) => {
    store.addWidgetLog({ id, text });
  });
};
