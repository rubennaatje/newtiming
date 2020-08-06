<template>
  <div class="h-full">
    <div
      v-for="(chatMessage, index) in chat"
      :key="index"
      class="grid grid-cols-3 gap-3 chat-message"
    >
      <div>
        <span class="chattime">{{
          new Date(chatMessage.time).toISOString().substr(11, 8)
        }}</span>
        <span :class="chatMessage.chatSender.class + '-chat'">#{{ chatMessage.chatSender.entryNumber }}
          <span v-if="showTeamName"> Toyota Gazoo Racing |</span></span>
        <span
          class="username"
          :style="'color: ' + hashCode(chatMessage.chatSender.user) + ';'"
        >
          {{ chatMessage.chatSender.user }}</span>
      </div>
      <div class="col-span-2">
        {{ chatMessage.text }}
      </div>
    </div>
    <div class="grid grid-cols-10 gap-2 sticky bottom-0">
      <input
        v-model="message"
        class="col-span-9"
        type="text"
        @keyup.enter="sendMessage"
      >
      <button class="btn-primary" @click="sendMessage()">Send</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    showTeamName: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      message: '',
    };
  },
  computed: {
    ...mapGetters({ chat: 'user/getChat' }),
  },
  methods: {
    sendMessage () {
      this.$socket.emit('sendMessage', {
        message: this.message,
        visibility: 'all',
      });
      this.message = '';
    },
    hashCode (str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let colour = '#';
      for (let j = 0; j < 3; j++) {
        const value = (hash >> (j * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
      }
      return colour;
    },
  },
};
</script>

<style>
.LMP1-chat {
  color: red;
}

.LMP1-chat {
  color: red;
}

.LMP1-chat {
  color: red;
}
.chattime {
  color: #5f5f5f;
}
.chat-message {
  margin-top: 10px;
}
</style>
