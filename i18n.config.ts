export default {
  locales: [
    {
      code: 'en',
      file: 'en.yaml',
      language: 'en-US',
      name: 'English',
    },
    {
      code: 'de',
      file: 'de.yaml',
      language: 'de-DE',
      name: 'Deutsch',
    }
  ],
  langDir: './translations/',
  lazy: true,
  defaultLocale: 'en',
  vueI18n: './vueI18n.config.ts',
  compilation: {
    strictMessage: false,
    escapeHtml: false,
  },
}
