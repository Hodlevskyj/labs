<template>
  <v-container>
    <h2>Contact Me</h2>
    <v-form v-model="valid" ref="formRef">
      <v-text-field
        v-model="name"
        label="Name"
        :rules="[rules.required]"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        :rules="[rules.required, rules.email]"
        required
      ></v-text-field>
      <v-text-field
        v-model="subject"
        label="Subject"
        :rules="[rules.required]"
      ></v-text-field>
      <v-textarea
        v-model="message"
        label="Message"
        :rules="[rules.required]"
        rows="4"
      ></v-textarea>
      <v-btn :disabled="!valid" @click="submitForm">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const valid = ref(false);

const rules = {
  required: (value) => !!value || "This field is required.",
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || "Invalid email.";
  },
};

const formRef = ref(null);

function submitForm() {
  if (valid.value) {
    console.log("Form submitted:", {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });

    resetForm();
  } else {
    console.warn("Form validation failed.");
  }
}

function resetForm() {
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  
  //скинути перевірку форми
  valid.value = false; //сикнути дійсний стан
  formRef.value.reset(); //скинути форму
}
</script>