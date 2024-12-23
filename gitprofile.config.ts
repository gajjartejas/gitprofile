// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'gajjartejas', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/gajjartejas/gajjartejas.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/gajjartejas/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 15, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['gajjartejas/my-project1', 'gajjartejas/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['gajjartejas/Lenovo-Ideapad-320-15ISK-14ISK-Laptop-Hackintosh', 'gajjartejas/React-Native-GUI-Tool', 'gajjartejas/react-native-lan-port-scanner', 'gajjartejas/OHM-Client', 'gajjartejas/MIUIAdsHelper', 'gajjartejas/Kano'],
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Tejas Gajjar',
    description: 'A 1x Engineer... macOS | iOS | React Native | Obj-C | Swift | Typescript | Java',
    imageURL: 'https://avatars.githubusercontent.com/u/14052969?v=4',
  },
  social: {
    linkedin: 'gajjartejas',
    twitter: 'gajjartejas',
    mastodon: 'gajjartejas@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://903381.xyz',
    phone: '',
    email: 'gajjartejas26@gmail.com',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'Objective C',
    'Swift',
    'JavaScript',
    'Typescript',
    'React Native',
    'iOS'
  ],
  experiences: [
    {
      company: '3rd Digital Pvt. Ltd.',
      position: 'React Native/iOS Lead',
      from: 'August 2017',
      to: 'Present',
      companyLink: 'https://www.3rddigital.com',
    },
    {
      company: 'Credencys Solutions Inc.',
      position: 'iOS Developer',
      from: 'September 2014',
      to: 'July 2017',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Gornvemt Engineering College, Patan, Gujarat, India',
      degree: 'Degree',
      from: '2008',
      to: '2012',
    }
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'gajjartejas', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/gajjartejas/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
