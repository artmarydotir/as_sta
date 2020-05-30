const fs = require('fs');
const path = require('path');

const { Organization } = require('@aasaam/information');

// console.log(Organization)
Object.keys(Organization).forEach((lang) => {
  const d = Organization[lang];
  const p = path.resolve(__dirname, `../static/manifest-${lang}.json`);
  const manifest = {
    name: `${d.name}`,
    short_name: `${d.legalName}`,
    theme_color: '#f37921',
    scope: '/',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    description: `${d.description}`,
    categories: ['Web Development'],
    icons: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicons/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-36.png',
        sizes: '36x36'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-48.png',
        sizes: '48x48'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-72.png',
        sizes: '72x72'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-144.png',
        sizes: '144x144'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-192.png',
        sizes: '192x192'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-256.png',
        sizes: '256x256'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-512.png',
        sizes: '512x512'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon.png'
      }
    ]
  };
  fs.writeFileSync(p, `${JSON.stringify(manifest, null, 2)}`);
});
