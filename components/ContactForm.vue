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
        />
        <BaseInput class="form__body__input" placeholder="E-mail" />
      </div>
      <BaseTextarea
        class="form__body__textarea"
        :placeholder="$t('contact_form_message_input')"
      />
      <recaptcha
        class="form__recaptcha"
        @error="onError"
        @success="onSuccess"
        @expired="onError"
      />
      <BaseButton class="form__body__button" :disabled="!recaptchaSuccessful">{{
        $t("contact_form_button")
      }}</BaseButton>
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
