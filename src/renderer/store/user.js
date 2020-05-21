import { remote } from 'electron';

export const state = () => ({
  user: {
    username: '',
    entryNumber: 0,
  },
});

export const actions = {
  SOCKET_entryAsk (context, data) {
    const user = remote.getGlobal('user');
    user.id = data;
    const sendData = {};
    sendData.username = user.username;
    sendData.entryNumber = user.entryNumber;
    context.commit('UPDATEUSER', sendData);
    this._vm.$socket.emit('entry', sendData);
  },
};

export const mutations = {
  UPDATEUSER (state, data) {
    state.user.username = data.username;
    state.user.entryNumber = data.entryNumber;
  },
};

export const getters = {
  getUser (state) {
    return state.user;
  },
};
