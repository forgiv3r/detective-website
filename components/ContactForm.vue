<template>
  <form
    class="form"
    :class="{ main: !narrow, 'form--narrow': narrow }"
    @submit.prevent
    ref="fom"
  >
    <h2 class="form__header">{{ $t("contact_form_header") }}</h2>
    <p class="form__caption">{{ $t("contact_form_caption") }}</p>
    <div class="form__body">
      <div class="form__body__inputs">
        <BaseInput
          class="form__body__input"
          :placeholder="$t('contact_form_name_input')"
          v-model="form.name"
        />
        <BaseInput
          class="form__body__input"
          placeholder="E-mail"
          v-model="form.from"
        />
      </div>
      <BaseTextarea
        class="form__body__textarea"
        :placeholder="$t('contact_form_message_input')"
        v-model="form.text"
      />
      <recaptcha
        class="form__recaptcha"
        @error="onError"
        @success="onSuccess"
        @expired="onError"
      />
      <BaseButton
        class="form__body__button"
        :disabled="!recaptchaSuccessful"
        :onClick="sendEmail"
        >{{ $t("contact_form_button") }}</BaseButton
      >
    </div>
    <p class="form__message" ref="message">{{ message }}</p>
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
      message: "",
      form: {
        from: "",
        name: "",
        text: ""
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
    setMessage(text, color = "red") {
      this.$refs.message.style.color = color;
      this.message = text;
      setTimeout(() => {
        this.message = "";
      }, 2000);
    },
    prepareEmailData() {
      return {
        to: "jaranwebsite@gmail.com",
        from: "formularz@jaran.com.pl",
        subject: `Nowa wiadomość z formularza kontaktowego!`,
        html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email template</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      font-family: 'Helvetica Neue', sans-serif;
      background-color: #f9f9f9;
      font-size: 90%;
    "
  >
    <div style="padding: 3rem 0">
      <div
        style="
          color: white;
          background-color: #92140c;
          padding: 3rem 2rem;
          margin: 0 auto;
          max-width: 400px;
        "
      >
        <h2
          style="
            color: white;
            margin-top: 1rem;
            font-weight: 500;
          "
        >
          ${this.form.name} pisze:
        </h2>
        <p style="line-height: 1.4">
          ${this.form.text}
        </p>
        <p style="margin-bottom: 0;">Odpowiedź proszę przesłać na adres: ${this.form.from}</p>
      </div>
    </div>
  </body>
</html>`
      };
    },
    async sendEmail() {
      const { from, text, name } = this.form;
      if (!from || !text || !name) {
        this.setMessage("Żadne z pól formularza nie może pozostać puste!");
        return;
      }

      const emailData = this.prepareEmailData();

      try {
        await this.$axios.$post("email", emailData);
        this.handleSendSuccess();
      } catch {
        this.handleSendFailure();
      }
    },
    handleSendSuccess() {
      this.setMessage("Wiadomość wysłana pomyślnie!", "green");
      this.form = {
        from: "",
        name: "",
        text: ""
      };
    },
    handleSendFailure() {
      this.setMessage("Coś poszło nie tak. Sprawdź połączenie z Internetem.");
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

.form__message {
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
