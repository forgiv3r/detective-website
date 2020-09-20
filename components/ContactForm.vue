<template>
  <form
    class="form"
    :class="{ main: !narrow, 'form--narrow': narrow }"
    @submit.prevent
    ref="fom"
  >
    <h2 class="form__header">{{ contents.header }}</h2>
    <p class="form__caption">{{ contents.caption }}</p>
    <div class="form__body">
      <div class="form__body__inputs">
        <BaseInput class="form__body__input" :placeholder="contents.placeholders.name" />
        <BaseInput class="form__body__input" :placeholder="contents.placeholders.email" />
      </div>
      <BaseTextarea
        class="form__body__textarea"
        :placeholder="contents.placeholders.message"
      />
      <recaptcha
        class="form__recaptcha"
        @error="onError"
        @success="onSuccess"
        @expired="onError"
      />
      <BaseButton class="form__body__button" :disabled="!recaptchaSuccessful"
        >{{ contents.buttonText }}</BaseButton
      >
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
      recaptchaSuccessful: false,
      error: "",
      contents: {
        header: this.$route.query.lang ? "Contact us!" : "Napisz do nas",
        caption: this.$route.query.lang ? 
          "In Jaran we always have time for our customers. Leave us a message including your name and e-mail address. Describe your case and how you would expect us to help you. We will get back to you as soon as possible." :
          "W biurze detektywistycznym Jaran zawsze mamy dla Ciebie czas. Skontaktuj się z nami, zostawiając swoje imię oraz adres e-mail. Opisz swoją sprawę oraz sposób, w jaki możemy Ci pomóc. Otrzymasz od nas odpowiedź najszybciej, jak to możliwe.",
        placeholders: {
          name: this.$route.query.lang ? "Name" : "Imię", 
          email: "E-mail",
          message: this.$route.query.lang ? "Your message" : "Twoja wiadomość",
        }, 
        buttonText: this.$route.query.lang ? "Send" : "Wyślij"
      },
      form: {
        to: "jaranwebsite@gmail.com",
        from: "lsliwaradioluz@gmail.com",
        subject: "Łukasz hehehehehehe",
        text: "Hej ziom!"
      }
    };
  },
  methods: {
    onSuccess() {
      this.recaptchaSuccessful = true;
    },
    onError() {
      this.recaptchaSuccessful = false;
    },
    // async send() {
    //   const { from, subject, text } = this.form;
    //   if (!from || !subject || !text) {
    //     this.error = "Żadne z pól formularza nie może pozostać puste!"
    //     return;
    //   }

    //   try {
    //     await this.$axios.$post("email", this.form);
    //     this.handleSendSuccess();
    //   } catch (err) {
    //     this.handleSendFailure();
    //   }
    // },
    handleSendSuccess() {},
    handleSendFailure() {
      // this.$store.commit("utils/setNotification", this.errorMessage);
    }
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
  width: 100%;
  display: inline-block;
}

.form__body__textarea {
  margin-bottom: 1rem;
}

.form__body__button {
  width: 100%;
  margin-top: 1rem;
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
