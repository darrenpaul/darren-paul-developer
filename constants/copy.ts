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
}

export const PROJECTS_COPY = {
  meta: {
    title: `Projects | ${META_TITLE}`
  },
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
}

export const ABOUT_COPY = {
  meta: {
    title: `About | ${META_TITLE}`,
    link: {
      hid: 'canonical',
      rel: 'canonical',
      href: `${DOMAIN}/about`
    }
  },
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
