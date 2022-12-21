import { eventHandler } from 'h3'

export default eventHandler(async () => {
    const config = useRuntimeConfig();
    const projectID = config.SANITY_PROJECT_ID
    const dataset = config.SANITY_DATASET
    const query = encodeURIComponent(
        '*[_type == "project"]{_id, title, "slug": slug.current, synopsis, description, publishedAt, "thumbnailImage": thumbnailImage.asset->url, "projectImages": projectImages[].asset->url} | order(dateTime(publishedAt) desc)[0..1]'
    );

    const URL = `https://${projectID}.api.sanity.io/v2022-12-14/data/query/${dataset}?query=${query}`;
    const response = await fetch(URL);
    const { result } = await response.json();
    return result;

})