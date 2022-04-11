const { defu } = require('defu');
const consola = require('consola');
const glob = require('glob');
const { getUserAgentRegExp } = require('browserslist-useragent-regexp');
const serialize = require('serialize-to-js');
const { preloadOptimization } = require('./hookFunctions');

let pkg;
try {
  pkg = require('../package.json');
} catch (error) {
  pkg = require('../../package.json');
}

function getOptions (options) {
  // fix options name, remove next versions
  if ('performance' in options) {
    consola.warn(`[${pkg.name}] Option \`performance\` is deprecated, use \`performanceMetrics\` instead.`);
    options.performanceMetrics = options.performance;
  }
  if ('disableNuxtImage' in options) {
    consola.warn(`[${pkg.name}] Option \`disableNuxtImage\` is deprecated, functionality is not available.`);
  }

  return defu(options, {

    optimizePreloads: true,

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

    fonts: [],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    },

    loader: {
      dataUri: undefined,
      size: '100px',
      backgroundColor: 'grey'
    }
  });
}

function setEnvironments (nuxt, options) {
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT = options.lazyOffset.component;
  nuxt.options.env.NUXT_SPEEDKIT_LAZY_OFFSET_ASSET = options.lazyOffset.asset;

  // Set internal url for ipx request
  process.env.NUXT_SPEEDKIT_INTERAL_URL = getInternalUrlFromServer(nuxt.options.server);
  nuxt.options.env.NUXT_SPEEDKIT_INTERAL_URL = process.env.NUXT_SPEEDKIT_INTERAL_URL;
  // Probably deprecated with the use of `nuxt-bridge`, `nitro` server starts outside the nuxt context.
  nuxt.hook('listen', (_, listener) => {
    process.env.NUXT_SPEEDKIT_INTERAL_URL = getInternalUrlFromServer(listener);
  });
}

function optimizePreloads (nuxt) {
  nuxt.options.generate.manifest = false;
  nuxt.options.render.resourceHints = true;
  nuxt.options.render.asyncScripts = true;
  nuxt.options.render.http2.push = false;

  nuxt.hook('render:resourcesLoaded', preloadOptimization());
}

function getSupportedBrowserDetector (ignore) {
  if (ignore) {
    return JSON.stringify({ regex: '' });
  } else {
    return serialize({ regex: getUserAgentRegExp({ allowHigherVersions: true, allowZeroSubversions: true }) });
  }
}

function getComponentFiles (cwd) {
  return new Promise(resolve => glob('**/*.vue', {
    cwd
  }, (err, files) => {
    if (err) {
      throw err;
    }
    resolve(files);
  }));
}

function getNuxtImageModuleOptions (moduleContainer) {
  let imageOptions;
  if ('image' in moduleContainer.options) {
    imageOptions = moduleContainer.options.image;
  } else {
    imageOptions = [].concat(
      moduleContainer.options.modules,
      moduleContainer.options.buildModules
    ).find(module => Array.isArray(module) && module[0] === '@nuxt/image' && module[1]);
    return module && module[1];
  }

  return defu({
    domains: [],
    alias: {},
    screens: {}
  }, imageOptions);
};

const getInternalUrlFromServer = server => `${server.https ? 'https' : 'http'}://${server.host || 'localhost'}${server.port ? ':' + server.port : ''}`;

module.exports = {
  pkg,
  getOptions,
  setEnvironments,
  optimizePreloads,
  getSupportedBrowserDetector,
  getComponentFiles,
  getNuxtImageModuleOptions
};
