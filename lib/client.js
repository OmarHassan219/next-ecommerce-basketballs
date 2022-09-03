

import imageUrlBuilder from '@sanity/image-url'







const sanityClient = require('@sanity/client')
export const client = sanityClient({
  projectId: 'j3a7b0xf',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_TOKEN , // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning:true , 
})



const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}