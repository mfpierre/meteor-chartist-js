Package.describe({
  name: 'mfpierre:chartist-js',
  summary: 'Simple responsive charts',
  version: '1.6.0',
  git: 'https://github.com/mfpierre/meteor-chartist-js'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'chartist-js/dist/chartist.js',
    'chartist-js/dist/chartist.css'
  ], 'client');
});
