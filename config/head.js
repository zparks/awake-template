import siteConfig from './_siteConfig'
export default {
  title: process.env.npm_package_name || siteConfig.indexh1,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || siteConfig.tagline
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/newfavi.png' }],
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,
      id: 'netlify-identity-widget-script'
    }
  ]
}
