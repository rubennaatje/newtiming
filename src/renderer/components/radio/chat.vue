<template>
  <div class="h-full">
    <div
      v-for="message in chat"
      :key="chat.message"
      class="grid grid-cols-3 gap-3 chat-message"
    >
      <div>
        <span class="chattime">{{
          new Date(message.time).toISOString().substr(11, 8)
        }}</span>
        <span :class="message.chatSender.class + '-chat'">#{{ message.chatSender.entryNumber }}
          <span v-if="showTeamName"> Toyota Gazoo Racing |</span></span>
        <span
          class="username"
          :style="'color: ' + hashCode(message.chatSender.user) + ';'"
        >
          {{ message.chatSender.user }}</span>
      </div>
      <div class="col-span-2">
        {{ message.text }}
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
      for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let colour = '#';
      for (var i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
      }
      return colour;
    },
  },
  computed: {
    ...mapGetters({ chat: 'user/getChat' }),
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
