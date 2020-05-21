import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import { remote } from 'electron';
export default ({ store }) => {
  Vue.use(new VueSocketIO({
    debug: false,
    connection: remote.getGlobal('sharedObj').socketUrl,
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_',
    },
  })
  );
};
