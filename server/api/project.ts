export default defineEventHandler(async (event) => {
    const { slug } = getQuery(event)

    const config = useRuntimeConfig();
    const projectID = config.SANITY_PROJECT_ID
    const dataset = config.SANITY_DATASET
    const query = encodeURIComponent(
        `*[_type == "project" && slug.current == "${slug}"]{_id, title, "slug": slug.current, synopsis, description, publishedAt, metaDescription, "thumbnailImage": thumbnailImage.asset->url, "projectImages": projectImages[].asset->url, liveUrl, frameworks}`
    );

    const URL = `https://${projectID}.api.sanity.io/v2022-12-14/data/query/${dataset}?query=${query}`;
    const response = await fetch(URL);
    const { result } = await response.json();
    return result[0];

})