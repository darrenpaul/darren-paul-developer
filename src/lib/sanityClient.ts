import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
import { PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';


export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: SANITY_TOKEN_KEY // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client);
export const urlForImage = (source) => builder.image(source).url();