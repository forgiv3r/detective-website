<template>
  <div class="reminder" ref="reminder">
    <transition name="slide-left">
      <nuxt-link to="/kontakt" class="reminder__message" v-if="messageVisible">
        <p class="reminder__message__text">
          {{ message }}
        </p>
      </nuxt-link>
    </transition>
    <transition name="slide-up" appear>
      <div class="reminder__icon" @click="toggleMessage" v-if="iconVisible">
        <span v-show="!messageVisible">?</span>
        <span v-show="messageVisible">X</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showIconAfter: {
      type: Number,
      default: 2000
    },
    showMessageAfter: {
      type: Number,
      default: 2500
    }
  },
  data() {
    return {
      iconVisible: false,
      messageVisible: false,
      iconTimeout: null,
      messageTimeout: null,
      message: this.$route.query.lang
        ? "Schedule your FREE appointment with us!"
        : "Umów się na bezpłatną konsultację!"
    };
  },
  methods: {
    toggleMessage() {
      this.messageVisible = !this.messageVisible;
      if (this.messageVisible) {
        this.$refs.reminder.style.paddingLeft = "400px";
      } else {
        this.messageTimeout = setTimeout(() => {
          this.$refs.reminder.style.paddingLeft = "0";
        }, 1000);
      }
    },
    showIcon() {
      this.iconVisible = true;
      this.iconTimeout = setTimeout(() => {
        this.$refs.reminder.style.overflow = "hidden";
      }, 500);
    }
  },
  mounted() {
    this.iconTimeout = setTimeout(this.showIcon, this.showIconAfter);
    this.messageTimeout = setTimeout(this.toggleMessage, this.showMessageAfter);
  },
  beforeDestroy() {
    clearTimeout(this.iconTimeout);
    clearTimeout(this.messageTimeout);
  }
};
</script>

<style lang="scss" scoped>
.reminder {
  position: fixed;
  display: none;
  bottom: 2vw;
  right: 2vw;
  animation: slide-up 1s ease-out;
  border-radius: 30px;
  cursor: pointer;
}

.reminder__icon {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: black;
  border: 2px solid color(accents);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  span {
    transition: opacity 0.3s;
  }
  &:hover span {
    opacity: 0.8;
  }
}

.reminder__message {
  background-color: black;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 15px;
  white-space: nowrap;
  height: 50px;
  z-index: 0;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 70px;
  border-radius: 30px;
  border: 2px solid color(accents);
  z-index: -1;
  .reminder__message__text {
    transition: opacity 0.3s;
  }
  &:hover .reminder__message__text {
    opacity: 0.8;
  }
}

.slide-left-enter-active {
  animation: slide-left 1s;
}

.slide-left-leave-active {
  animation: slide-left 1s reverse;
}

@keyframes slide-left {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translate(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 446px) {
  .reminder {
    display: block;
  }
}
</style>
