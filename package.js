Package.describe({
  name: 'budickda:orion-lang-de',
  /**
   * Try to keep the same version of Orion, so people know
   * which version is translated or maybe they want to use
   * a old Orion version.
   *
   * If you want to update this package change only the minor
   * version indicator: 1.3.1, 1.3.2. Always keep the current
   * orion version (currently 1.3.x).
   */
  version: '1.4.2',
  summary: 'Orion german language',
  git: 'https://github.com/BudickDa/orion-lang-de',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('orionjs:lang-en@1.4.0');
  api.imply('orionjs:lang-en');

  api.addFiles('de.js');
});
