Package.describe({
  name: 'mfpierre:chartist-js',
  summary: 'Simple responsive charts',
  version: '1.0.0',
  git: 'https://github.com/mfpierre/meteor-chartist-js'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'chartist-js/libdist/chartist.min.js',
    'chartist-js/libdist/chartist.min.css'
  ], 'client');
});
