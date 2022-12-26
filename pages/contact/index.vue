<template>
  <section class="contact-section">
    <h1 class="contact-title">{{ CONTACT_COPY.title }}</h1>
    <div class="contact-container">
      <div class="contact-description-card">
        <div class="contact-description-content">
          <SanityContent :blocks="contact.description" />
        </div>
      </div>

      <form class="contact-form">
        <div class="contact-form-group">
          <div class="contact-input-group">
            <div class="contact-label-group">
              <label>{{ CONTACT_COPY.name }}</label>
              <small v-if="nameError" class="error">{{ CONTACT_COPY.invalidInput }}</small>
            </div>

            <input
              v-model="name"
              :class="[nameError && 'input-error']"
              :placeholder="CONTACT_COPY.namePlaceholder"
              name="name"
              type="name"
              @input="onNameChange"
            />
          </div>

          <div class="contact-input-group">
            <div class="contact-label-group">
              <label>{{ CONTACT_COPY.emailAddress }}</label>
              <small v-if="emailError" class="error">{{ CONTACT_COPY.invalidInput }}</small>
            </div>
            <input
              v-model="email"
              :class="[emailError && 'input-error']"
              :placeholder="CONTACT_COPY.emailAddressPlaceholder"
              name="email"
              type="email"
              @input="onEmailChange"
            />
          </div>
        </div>

        <div class="contact-input-group">
          <div class="contact-label-group">
            <label>{{ CONTACT_COPY.subject }}</label>
            <small v-if="subjectError" class="error">{{ CONTACT_COPY.invalidInput }}</small>
          </div>
          <input
            v-model="subject"
            :class="[subjectError && 'input-error']"
            :placeholder="CONTACT_COPY.subjectPlaceholder"
            name="subject"
            type="subject"
            @input="onSubjectChange"
          />
        </div>

        <div class="contact-input-group">
          <div class="contact-label-group">
            <label>{{ CONTACT_COPY.message }}</label>
            <small v-if="messageError" class="error">{{ CONTACT_COPY.invalidInput }}</small>
          </div>
          <textarea
            v-model="message"
            :class="[messageError && 'input-error']"
            :placeholder="CONTACT_COPY.messagePlaceholder"
            name="message"
            type="message"
            @input="onMessageChange"
          />
        </div>

        <button class="contact-button" @click="handleSendMessage">{{ CONTACT_COPY.sendMessage }}</button>
      </form>
    </div>

    <Notification
      :show="showNotification"
      :message="notificationMessage"
      :type="notificationType"
      :on-timer-end="onNotifcationTimerEnd"
    />
  </section>
</template>

<script setup lang="ts">
import isEmail from 'validator/es/lib/isEmail'
import isAlpha from 'validator/es/lib/isAlpha'
import { CONTACT_COPY } from '~~/constants/copy'

const { data: contact } = await useFetch('/api/contact')

const showNotification = ref(false)
const notificationMessage = ref(CONTACT_COPY.messageSent)
const notificationType = ref('success')

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
  if (!isAlpha(name.value, 'en-US', { ignore: ' ' })) {
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

const onNotifcationTimerEnd = (value) => {
  showNotification.value = value
}

const handleSendMessage = async (event) => {
  event.preventDefault()

  validateName()
  validateEmail()
  validateSubject()
  validateMessage()

  if (nameError.value || emailError.value || subjectError.value || messageError.value) {
    return
  }

  try {
    await $fetch('/api/message', {
      method: 'POST',
      params: {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
      }
    })

    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
    nameError.value = false
    emailError.value = false
    subjectError.value = false
    messageError.value = false

    notificationMessage.value = CONTACT_COPY.messageSent
    notificationType.value = 'success'
    showNotification.value = true
  } catch (error) {
    notificationMessage.value = error.message
    notificationType.value = 'error'
    showNotification.value = true
  }
}
</script>
