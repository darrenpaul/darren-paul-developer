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
            <div class="label-group">
              <label>{{ CONTACT_COPY.name }}</label>
              <small v-if="nameError" class="error">{{ CONTACT_COPY.invalidInput }}</small>
            </div>
            <input
              v-model="name"
              :placeholder="CONTACT_COPY.namePlaceholder"
              name="name"
              type="name"
              @input="onNameChange"
            />
          </div>

          <div class="input-group">
            <div class="label-group">
              <label>{{ CONTACT_COPY.emailAddress }}</label>
              <small v-if="emailError" class="error">{{ CONTACT_COPY.invalidInput }}</small>
            </div>
            <input
              v-model="email"
              :placeholder="CONTACT_COPY.emailAddressPlaceholder"
              name="email"
              type="email"
              @input="onEmailChange"
            />
          </div>
        </div>

        <div class="input-group">
          <div class="label-group">
            <label>{{ CONTACT_COPY.subject }}</label>
            <small v-if="subjectError" class="error">{{ CONTACT_COPY.invalidInput }}</small>
          </div>
          <input
            v-model="subject"
            :placeholder="CONTACT_COPY.subjectPlaceholder"
            name="subject"
            type="subject"
            @input="onSubjectChange"
          />
        </div>

        <div class="input-group">
          <div class="label-group">
            <label>{{ CONTACT_COPY.message }}</label>
            <small v-if="messageError" class="error">{{ CONTACT_COPY.invalidInput }}</small>
          </div>
          <textarea
            v-model="message"
            :placeholder="CONTACT_COPY.messagePlaceholder"
            name="message"
            type="message"
            @input="onMessageChange"
          />
        </div>

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
const nameError = ref(false)
const email = ref('')
const emailError = ref(false)
const subject = ref('')
const subjectError = ref(false)
const message = ref('')
const messageError = ref(false)

const validateName = () => {
  nameError.value = false
  if (!name.value) {
    nameError.value = true
  }
  if (!isAlpha(name.value)) {
    nameError.value = true
  }
}

const validateEmail = () => {
  emailError.value = false
  if (!email.value) {
    emailError.value = true
  }
  if (!isEmail(email.value)) {
    emailError.value = true
  }
}

const validateSubject = () => {
  subjectError.value = false
  if (!subject.value) {
    subjectError.value = true
  }
}

const validateMessage = () => {
  messageError.value = false
  if (!message.value) {
    messageError.value = true
  }
}

const onNameChange = () => {
  validateName()
}

const onEmailChange = () => {
  validateEmail()
}

const onSubjectChange = () => {
  validateSubject()
}

const onMessageChange = () => {
  validateMessage()
}

const handleSendMessage = async (event) => {
  event.preventDefault()

  validateName()
  validateEmail()
  validateSubject()
  validateMessage()
}
</script>
