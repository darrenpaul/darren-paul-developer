export const homeRoute = {
  name: 'home',
  label: 'Home',
  path: '/',
  auth: false,
};

export const projectsRoute = {
  name: 'projects',
  label: 'Projects',
  path: '/projects',
  auth: false,
};

export const contactRoute = {
  name: 'contact',
  label: 'Contact',
  path: '/contact',
  auth: false,
};

export const navigationRoutes = [homeRoute, projectsRoute];
