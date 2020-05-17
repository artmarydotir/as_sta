const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

const { Organization } = require('@aasaam/information')

Object.keys(Organization).forEach((lang) => {
  const d = Organization[lang]
  const p = path.resolve(__dirname, `../locales/${lang}/info.js`)
  fs.writeFileSync(p, `export default ${JSON.stringify(d, null, 2)}`)

  exec(`./node_modules/.bin/prettier ${p} --write`)
})
