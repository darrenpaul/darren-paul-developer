const DOMAIN = 'https://www.darrenpaul.dev'
const CLOUDINARY = 'https://res.cloudinary.com/darren-paul-photography/image/upload'

const ICON = 'v1672139202/darren-paul-developer/darren-paul-logo_oimrkp.ico'
const COVER_IMAGE = "v1672140864/darren-paul-developer/darren-paul-cover-min_ytvald.jpg"

const META_TITLE = 'Darren Paul Software Engineer and Front-end Developer'
const META_DESCRIPTION = 'For a reliable and innovative front-end developer, look no further than Darren. Darren is an experienced Software Engineer with a track record of creating stunning front-end websites and web applications. His blend of technology and creativity is sure to provide a unique and enriching experience for clients.'
const META_IMAGE = `${CLOUDINARY}/${COVER_IMAGE}`

export const SITE_OWNER_COPY = {
  meta: {
    title: META_TITLE,
    htmlAttrs: {
      lang: 'en-GB',
    }, link: [
      { rel: 'icon', type: 'image/x-icon', href: `${CLOUDINARY}/${ICON}` },
      {

        hid: 'canonical',
        rel: 'canonical',
        href: DOMAIN
      }
    ],
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
  name: "Name",
  namePlaceholder: "Jane",
  nameErrorEmpty: "Please provide a name",
  nameErrorInvalid: "Invalid characters",
  emailAddress: "Email Address",
  emailAddressPlaceholder: "jane@email.com",
  subject: "Subject",
  subjectPlaceholder: "website design",
  message: "Message",
  messagePlaceholder: "I would love to have a website designed by you, please get in-touch.",
  invalidInput: "Invalid",
  sendMessage: 'Send Message',
  pleaseWait: "Please wait...",
  messageSent: "Message has been sent",
  formErrors: "Invalid form"
}

export const FOOTER_COPY = {
  copyright: "2023 Copyright - Darren Paul",
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
