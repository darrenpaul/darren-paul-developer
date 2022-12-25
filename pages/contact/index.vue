<template>
  <section class="contact-section">
    <div class="contact">
      <div class="contact-description-card">
        <div class="contact-description">
          <h3>{{ CONTACT_COPY.title }}</h3>
          <p>
            {{ CONTACT_COPY.description }}
          </p>
        </div>
      </div>

      <form>
        <div class="form-group">
          <div class="input-group">
            <label>{{ CONTACT_COPY.name }}</label>
            <input v-model="name" :placeholder="CONTACT_COPY.namePlaceholder" name="name" type="name" />
            <small v-if="nameError" class="error">{{ nameError }}</small>
          </div>
          <div class="input-group">
            <label>{{ CONTACT_COPY.emailAddress }}</label>
            <input v-model="email" :placeholder="CONTACT_COPY.emailAddressPlaceholder" name="email" type="email" />
            <small v-if="emailError" class="error">{{ emailError }}</small>
          </div>
        </div>
        <label>{{ CONTACT_COPY.subject }}</label>
        <input v-model="subject" :placeholder="CONTACT_COPY.subjectPlaceholder" name="subject" type="subject" />
        <label>{{ CONTACT_COPY.message }}</label>
        <textarea v-model="message" :placeholder="CONTACT_COPY.messagePlaceholder" name="message" type="message" />
        <small v-if="messageError" class="error">{{ messageError }}</small>

        <button class="contact-button" @click="handleSendMessage">{{ CONTACT_COPY.sendMessage }}</button>
      </form>
    </div>
  </section>
</template>

    <script setup lang="ts">
import isEmail from 'validator/es/lib/isEmail'
import isAlpha from 'validator/es/lib/isAlpha'
import { CONTACT_COPY } from '~~/constants/copy'

const name = ref('')
const nameError = ref('')
const email = ref('')
const emailError = ref('')
const subject = ref('')
const message = ref('')
const messageError = ref('')

const handleSendMessage = async (event) => {
  event.preventDefault()

  if (!name.value) {
    nameError.value = CONTACT_COPY.nameErrorEmpty
  }
  if (!email.value) {
    emailError.value = CONTACT_COPY.emailErrorEmpty
  }
  if (!message.value) {
    messageError.value = CONTACT_COPY.messageErrorEmpty
  }

  if (!isAlpha(name.value)) {
    nameError.value = CONTACT_COPY.nameErrorInvalid
  }
  if (!isEmail(email.value)) {
    emailError.value = CONTACT_COPY.emailErrorInvalid
  }
}
</script>
