Package.describe({
  name: 'slackcc:chartist-js',
  summary: 'Simple responsive charts',
  version: '1.1.0',
  git: 'https://github.com/slackcc/meteor-chartist-js'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'chartist-js/dist/chartist.min.js',
    'chartist-js/dist/chartist.min.css'
  ], 'client');
});
