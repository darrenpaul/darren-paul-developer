import { eventHandler } from 'h3'
export default defineEventHandler(async (event) => {
    const { name, email, subject, message } = getQuery(event)

    const config = useRuntimeConfig();
    const EMAIL_SERVER = config.EMAIL_SERVER
    const SEND_TO_EMAIL = config.SEND_TO_EMAIL


    const data = {
        to: SEND_TO_EMAIL,
        from: email,
        subject,
        message: `Name: ${name} Message: ${message}`
    }

    return await $fetch(EMAIL_SERVER, {
        method: 'POST',
        body: data
    })
})