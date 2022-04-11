import { resolve } from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import nuxtBabelPresetApp from '@nuxt/babel-preset-app';
import { defineNuxtConfig } from '@nuxt/bridge';
import pkg from '../package.json';

import * as postcssFunctions from './postcss/functions';

const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  dev: isDev,
  target: hasTargetStatic() ? 'static' : null,
  modern: isDev ? false : 'client',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,

  env: {
    GITHUB_REPO_URL: pkg.repository.url
  },

  components: ['~/components/auto-import/'],

  server: {
    port: getPort(),
    host: getHost()
  },

  alias: {
    [pkg.name]: resolve(__dirname, '../lib'),
    vue$: 'vue/dist/vue.runtime.common.js'
  },

  build: {

    transpile: ['vue-headings'],

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](node-libs-browser)[\\/]/,
            name: 'vendor'
          }
        }
      }
    },

    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].[chunkhash].js'
    },

    babel: {
      presets ({ isServer, isModern }) {
        // TODO: Check performance issues (useBuiltIns, forceAllTransforms, shippedProposals, loose, bugfixes)
        return [
          [
            nuxtBabelPresetApp,
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3, proposals: true },
              useBuiltIns: isModern ? 'entry' : 'usage',
              forceAllTransforms: !isDev && !isModern && !isServer,
              shippedProposals: true,
              loose: true,
              bugfixes: true,
              polyfills: [
                'es.promise',
                'es.symbol'
              ]
            }
          ]
        ];
      }
    },

    postcss: {
      plugins: {
        'postcss-preset-env': {
          preserve: true,
          stage: 0
        },
        'postcss-nesting': {},
        'postcss-functions': {
          functions: postcssFunctions
        },
        '@fullhuman/postcss-purgecss': {
          content: [
            'example/pages/**/*.vue',
            'example/layouts/**/*.vue',
            'example/components/**/*.vue'
          ],
          safelist: [
            'html', 'body', /^nuxt/
          ]
        }
      },
      order: 'cssnanoLast'
    },

    extend (config) {
      if (hasBuildAnalyze()) {
        config.plugins.push(new BundleAnalyzerPlugin({
          reportFilename: resolve(`.reports/webpack/${config.name}.html`),
          statsFilename: resolve(`.reports/webpack/stats/${config.name}.json`),
          analyzerMode: 'static',
          generateStatsFile: true,
          openAnalyzer: false,
          logLevel: 'info',
          defaultSizes: 'gzip',
          statsOptions: 'normal'
        }));
      }
    }
  },

  generate: {
    crawler: true,
    dir: getDistPath()
  },

  router: {
    base: getBasePath(),
    trailingSlash: undefined
  },

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },
    domains: ['picsum.photos', 'img.youtube.com', 'i.vimeocdn.com', 'i.pickadummy.com'],
    alias: {
      picsum: 'https://picsum.photos',
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
      pickadummy: 'https://i.pickadummy.com'
    }
  },

  plugins: [
    '@/plugins/vue-headings'
  ],

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ].filter(v => v),

  speedkit: {
    detection: {
      performance: true,
      browserSupport: true
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200 // fallback if fcp is not available (safari)
      }
    },
    fonts: [{
      family: 'Quicksand',
      locals: ['Quicksand'],
      fallback: ['sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-300.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-300.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-regular.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-regular.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 500,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-500.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-500.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 600,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-600.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-600.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-700.woff', type: 'woff' },
            { src: '@/assets/fonts/quicksand-v21-latin/quicksand-v21-latin-700.woff2', type: 'woff2' }
          ]
        }
      ]
    }, {
      family: 'Merriweather',
      locals: ['Merriweather'],
      fallback: ['Georgia', 'sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300italic.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-300italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-regular.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-regular.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-italic.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700italic.woff', type: 'woff' },
            { src: '@/assets/fonts/merriweather-v22-latin/merriweather-v22-latin-700italic.woff2', type: 'woff2' }
          ]
        }
      ]
    }, {
      family: 'Montserrat Alternates',
      locals: ['Montserrat Alternates', 'Montserrat-Alternates'],
      fallback: ['sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 300,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300italic.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-300italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-regular.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-regular.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 400,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-italic.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-italic.woff2', type: 'woff2' }
          ]
        }, {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700.woff2', type: 'woff2' }
          ]
        }, {
          style: 'italic',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700italic.woff', type: 'woff' },
            { src: '@/assets/fonts/montserrat-alternates-v12-latin/montserrat-alternates-v12-latin-700italic.woff2', type: 'woff2' }
          ]
        }
      ]
    }],

    loader: {
      dataUri: '@/assets/spinner/three-circles.svg',
      size: '100px',
      backgroundColor: 'transparent'
    }
  },

  modules: [
    '@/modules/svg',
    '@nuxt/image',
    resolve(__dirname, '..') // nuxt-speedkit
  ],

  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
});

function getBasePath () {
  return process.env.npm_config_base || process.env.BASE_PATH || '/';
}

function getHost () {
  return process.env.npm_config_host || process.env.HOST || 'localhost';
}

function getPort () {
  return process.env.npm_config_port || process.env.PORT || 3000;
}

function getDistPath () {
  return process.env.npm_config_dist || process.env.DIST_PATH || 'dist';
}

function hasBuildAnalyze () {
  return process.env.npm_config_build_analyze || process.env.BUILD_ANALYZE;
}

function hasTargetStatic () {
  return (process.argv.indexOf('--target') && process.argv[process.argv.indexOf('--target') + 1] === 'static') || process.env.npm_config_target_static || process.env.TARGET_STATIC;
}
