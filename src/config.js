module.exports = {
  siteTitle: 'Leonardo Guedes | QA Automation Engineer | Software Tester',
  siteDescription:
    'Leonardo Guedes is a QA Automation Engineer and Software Tester, who loves exploring new things and technologies.',
  siteKeywords:
    'Leonardo Guedes, Leonardo Guedes, , guedesrodriguezleonardo, QA Automation Engineer, machine learning enginner, data scientist, Software Tester, software engineer, web developer, python developer, go developer, natural language processing, speech processing',
  siteUrl: 'https://guedesrodriguezleonardo.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Leonardo Guedes',
  location: 'Montevideo, Uruguay',
  email: 'guedesrodriguezleonardo@gmail.com',
  github: 'https://github.com/guedesrodriguezleonardo',
  twitterHandle: '@guedesrodriguezleonardo',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/guedesrodriguezleonardo',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/guedesrodriguezleonardo/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 400,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
