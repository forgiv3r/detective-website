<template>
  <form class="form" :class="{ main: !narrow, 'form--narrow': narrow }" @submit.prevent>
    <h2 class="form__header">Napisz do nas</h2>
    <p class="form__caption">
      W biurze detektywistycznym Jaran zawsze mamy dla Ciebie czas. Skontaktuj
      się z nami, zostawiając swoje imię oraz adres e-mail. Opisz swoją sprawę oraz sposób, w jaki możemy Ci pomóc. Otrzymasz
      od nas odpowiedź najszybciej, jak to możliwe.
    </p>
    <div class="form__body">
      <div class="form__body__inputs">
        <BaseInput class="form__body__input" placeholder="Imię" />
        <BaseInput class="form__body__input" placeholder="Adres email" />
      </div>
      <BaseTextarea class="form__body__textarea" placeholder="Twoja wiadomość" />
      <BaseButton class="form__body__button" :on-click="send">Wyślij</BaseButton>
    </div>
    <p class="form__error">{{ error }}</p>
  </form>
</template>

<script>
export default {
  props: {
    narrow: {
      type: Boolean, 
      default: () => false
    }
  },
  data() {
    return {
      error: "",
      form: {
        to: "jaranwebsite@gmail.com",
        from: "lsliwaradioluz@gmail.com",
        subject: "Łukasz hehehehehehe",
        text: "Hej ziom!"
      }
    };
  },
  methods: {
    async send() {
      const { from, subject, text } = this.form;
      if (!from || !subject || !text) {
        this.error = "Żadne z pól formularza nie może pozostać puste!"
        return;
      }

      try {
        await this.$axios.$post("email", this.form);
        this.handleSendSuccess();
      } catch (err) {
        this.handleSendFailure();
      }
    },
    handleSendSuccess() {
      
    },
    handleSendFailure() {
      // this.$store.commit("utils/setNotification", this.errorMessage);
    },
  }
};
</script>

<style lang="scss" scoped>
.form {
  background-color: color(text);
}

.form__header {
  margin-bottom: 1rem;
}

.form__body__input {
  margin-bottom: 1rem;
  width: 100%;
  display: inline-block;
}

.form__body__textarea {
  margin-bottom: 1rem;
}

.form__body__button {
  width: 100%;
}

.form__error {
  color: red;
}

.form--narrow {
  padding: 1rem;
}

@media (min-width: 1024px) {
  .form__caption {
    max-width: 800px;
  }
  
  .form__body {
    width: 70%; 
  }

  .form__body__inputs {
    display: flex;
    justify-content: space-between;
  }

  .form__body__input {
    width: 49.5%;
  }

  .form__body__button {
    width: 150px;
  }

  .form--narrow {
     margin-left: 5%;
     padding: 2rem;
    .form__body {
      width: 100%;
    }
    .form__body__button {
      width: 100%;
    }
  }
}
</style>
