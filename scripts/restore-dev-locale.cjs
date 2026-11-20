// Restore the generated development files after Docusaurus builds each locale.
// A full build ends with French, while the default local development locale is English.
const path = require('node:path');
const coreDir = path.dirname(require.resolve('@docusaurus/core/package.json'));
const {loadSite} = require(path.join(coreDir, 'lib/server/site.js'));

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';
delete process.env.DOCUSAURUS_CURRENT_LOCALE;

loadSite({siteDir: path.resolve(__dirname, '..')}).catch((error) => {
  console.error('Could not restore the default development locale:', error);
  process.exitCode = 1;
});
