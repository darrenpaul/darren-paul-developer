const DOMAIN = 'https://www.darrenpaul.dev'
const CLOUDINARY = 'https://res.cloudinary.com/darren-paul-photography/image/upload'

const ICON = '/img/darren-paul-logo.ico'
const COVER_IMAGE = "v1672140864/darren-paul-developer/darren-paul-cover-min_ytvald.jpg"

const META_TITLE = 'Darren Paul Web Developer'
const META_DESCRIPTION = 'For a reliable and innovative Front End Web Developer, look no further than Darren. Darren is an experienced Software Engineer with a track record of creating stunning websites and web applications. His blend of technology and creativity is sure to provide a unique and enriching experience for clients.'
const META_PROJECTS_DESCRIPTION ='This website is dedicated to showcasing the web development projects that I have worked on. As a web developer, I have extensive experience in HTML, CSS, JavaScript, Nuxt, Vue, Next and React. My work has been used by clients in a variety of industries and applications. From building custom websites to creating many personal projects, I have the skills and experience to create any type of web development project. I strive to keep up with the latest web development trends and technologies to ensure that my clients receive the best possible results. No matter the project, I am committed to delivering quality work in a timely and efficient manner. If you need any help with your web development projects, please don`t hesitate to reach out. I`m always available to discuss your project and provide you with the best possible solutions.'
const META_CONTACT_DESCRIPTION = 'If you’re looking for an experienced Front End Web Developer with a passion for creating visually stunning websites and web applications that actually work, then I’m your guy.'
const META_IMAGE = `${CLOUDINARY}/${COVER_IMAGE}`

export const SITE_OWNER_COPY = {
  meta: {
    title: META_TITLE,
    htmlAttrs: {
      lang: 'en-GB',
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: ICON },
    ],
    noscript: [
      { children: 'Javascript is required' }
    ]
  },
  domain: DOMAIN,
  darrenPaul: "Darren Paul",
  cms: 'https://darrenpauldeveloper.sanity.studio/',
}

export const HOME_COPY = {
  meta: {
    title: `Home | ${META_TITLE}`,
    link: [
      // canonical
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
      // Schema.org markup for Google+
      {
        itemprop: 'name',
        content: `Home | ${META_TITLE}`
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
        content: `Home | ${META_TITLE}`
      },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:image',
        content: META_IMAGE
      }, // Open Graph data
      {
        hid: 'og:title',
        property: 'og:title',
        content: `Home | ${META_TITLE}`
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
    ]
  },
  darrenPaul: "Darren Paul",
  frontendDeveloper: "Front-End Developer",
  latestProjects: "Latest Projects"
}

export const PROJECTS_COPY = {
  meta: {
    title: `Projects | ${META_TITLE}`,
    link: [
      // canonical
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `${DOMAIN}/projects`
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: META_PROJECTS_DESCRIPTION
      },
      // Schema.org markup for Google+
      {
        itemprop: 'name',
        content: `Projects | ${META_TITLE}`
      },
      {
        itemprop: 'description',
        content: META_PROJECTS_DESCRIPTION
      },
      {
        itemprop: 'image',
        content: META_IMAGE
      }, // Twitter Card
      {
        name: 'twitter:title',
        content: `Projects | ${META_TITLE}`
      },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:image',
        content: META_IMAGE
      }, // Open Graph data
      {
        hid: 'og:title',
        property: 'og:title',
        content: `Projects | ${META_TITLE}`
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${DOMAIN}/projects`
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
        content: META_PROJECTS_DESCRIPTION
      }
    ]
  },
}

export const PROJECT_COPY = {
  meta: {
    title: `${META_TITLE}`
  },
  frameworks: "Frameworks"
}

export const CONTACT_COPY = {
  meta: {
    title: `Contact | ${META_TITLE}`,
    link: [
      // canonical
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `${DOMAIN}/Contact`
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: META_CONTACT_DESCRIPTION
      },
      // Schema.org markup for Google+
      {
        itemprop: 'name',
        content: `Contact | ${META_TITLE}`
      },
      {
        itemprop: 'description',
        content: META_CONTACT_DESCRIPTION
      },
      {
        itemprop: 'image',
        content: META_IMAGE
      }, // Twitter Card
      {
        name: 'twitter:title',
        content: `Contact | ${META_TITLE}`
      },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:image',
        content: META_IMAGE
      }, // Open Graph data
      {
        hid: 'og:title',
        property: 'og:title',
        content: `Contact | ${META_TITLE}`
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${DOMAIN}/Contact`
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
        content: META_CONTACT_DESCRIPTION
      }
    ]
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
