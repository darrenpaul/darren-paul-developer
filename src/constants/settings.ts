export default {
  domain: import.meta.env.PUBLIC_DOMAIN,
  siteUrl: import.meta.env.PUBLIC_SITE_URL,
  siteName: import.meta.env.PUBLIC_SITE_NAME,
  posthogKey: import.meta.env.PUBLIC_POSTHOG_KEY,
  posthogHost: import.meta.env.PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
};
