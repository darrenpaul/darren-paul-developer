import { SEND_TO_EMAIL, EMAIL_SERVER } from '$env/static/private';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');

    if (!name || !email || !subject || !message) throw new Error('Missing required fields');

    const payload = {
      to: SEND_TO_EMAIL,
      from: email,
      subject,
      message: `Name: ${name} Message: ${message}`
    }


    const response = await fetch(EMAIL_SERVER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })


    return [response.status, { message: 'Email sent' }]
  }
};