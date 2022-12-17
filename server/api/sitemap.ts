import { eventHandler } from 'h3'

export default eventHandler(async (event) => {
    const { req, res } = event
    if (req.method !== 'POST') {
        res.statusCode = 405
        res.end()
        return
    }
    const config = useRuntimeConfig()


    const fetchRoutes = async (slug) => {
        const routes = []

        const query = `*[_type == "${slug}"]`
        const projectId = config.public.sanity.projectId
        const dataset = config.public.sanity.dataset
        const URL = `https://${projectId}.api.sanity.io/v2022-12-14/data/query/${dataset}?query=${query}`;
        const response = await fetch(URL);
        const { result } = await response.json();
        result.forEach(page => {
            const pageSlug = page.slug.current
            routes.push(`${slug}/${pageSlug}`)

        });
        return routes
    }

    return [...(await fetchRoutes('blog')), ...(await fetchRoutes('gallery')), ...(await fetchRoutes('poetry'))]
})