const DOMAIN = 'https://www.darrenpaul.dev'
const CLOUDINARY = 'https://res.cloudinary.com/darren-paul-photography/image/upload/v1671261750/alicia-chamaille'


const META_TITLE = 'Darren Paul Front-end Developer'
const META_DESCRIPTION = 'meta description'
const META_IMAGE = ""

export const SITE_OWNER_COPY = {
  meta: {
    title: META_TITLE,
    htmlAttrs: {
      lang: 'en-GB',
    }, link: [{ rel: 'icon', type: 'image/x-icon', href: 'img/branding.ico' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: META_DESCRIPTION
      },
      // canonical
      {
        hid: 'canonical',
        rel: 'canonical',
        href: DOMAIN
      },
      // Schema.org markup for Google+
      {
        itemprop: 'name',
        content: META_TITLE
      },
      {
        itemprop: 'description',
        content: META_DESCRIPTION
      },
      {
        itemprop: 'image',
        content: META_IMAGE
      }, // Twitter Card
      {
        name: 'twitter:title',
        content: META_TITLE
      },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:image',
        content: META_IMAGE
      }, // Open Graph data
      {
        hid: 'og:title',
        property: 'og:title',
        content: META_TITLE
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: DOMAIN
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: META_IMAGE
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: '1200px'
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: '800px'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: META_DESCRIPTION
      }
    ],
    noscript: [
      { children: 'Javascript is required' }
    ]
  },
  domain: DOMAIN,
  branding: `${CLOUDINARY}/alicia-chamaille-logo-grey_hfgofq.png`,
  brandingIcon: `${CLOUDINARY}/alicia-chamaille-logo-grey_hfgofq.png`,
  brandingTitle: 'Darren Paul',
  brandingAlt: 'Darren Paul logo',
  cms: 'https://darrenpauldeveloper.sanity.studio/',
}

export const HOME_COPY = {
  meta: {
    title: `Home | ${META_TITLE}`
  },
  darrenPaul: "Darren Paul",
  frontendDeveloper: "Front-end Developer",
  latestProjects: "Latest Projects"
}

export const PROJECTS_COPY = {
  meta: {
    title: `Projects | ${META_TITLE}`
  },
}

export const PROJECT_COPY = {
  frameworks: "Frameworks"
}

export const CONTACT_COPY = {
  meta: {
    title: `Contact | ${META_TITLE}`,
    link: {
      hid: 'canonical',
      rel: 'canonical',
      href: `${DOMAIN}/contact`
    }
  },
  title: "Wanna get in touch?",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  name: "Name",
  namePlaceholder: "Enter your name",
  nameErrorEmpty: "Please provide a name",
  nameErrorInvalid: "Invalid characters",
  emailAddress: "Email Address",
  emailAddressPlaceholder: "Enter your email address",
  emailErrorEmpty: "Please provide a email",
  emailErrorInvalid: "Invalid email address",
  subject: "Subject",
  subjectPlaceholder: "Enter the subject for your message",
  message: "Message",
  messagePlaceholder: "Enter your message",
  messageErrorEmpty: "Please provide a message",
  sendMessage: 'Send Message'
}

export const FOOTER_COPY = {
  copyright: "2022 Copyright - Darren Paul",
  github: {
    url: "https://github.com/darrenpaul/",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/darren-paul-16765ab2/",
  },
  instagram: {
    url: "https://www.instagram.com/darrenrpaul/",
  },
}
