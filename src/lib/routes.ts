export const homeRoute = {
    path: '/',
    name: 'home',
    meta: {
        title: 'Home',
    },
}

export const projectsRoute = {
    path: '/projects',
    name: 'projects',
    meta: {
        title: 'Projects',
    },
}

export const aboutRoute = {
    path: '/about',
    name: 'about',
    meta: {
        title: 'About',
    },
}

export const contactRoute = {
    path: '/contact',
    name: 'contact',
    meta: {
        title: 'Contact',
    },
}
export const navigationRoutes = [homeRoute, projectsRoute, aboutRoute, contactRoute]