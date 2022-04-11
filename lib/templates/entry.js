import { hasSufficientPerformance, hasSufficientHardwareSetup, hasSufficientDownloadPerformance, setup } from 'nuxt-speedkit/utils/performance';
import { isSupportedBrowser } from 'nuxt-speedkit/utils/browser';

let init = false
const layerEl = global.document.getElementById('nuxt-speedkit-speedkit-layer');

async function initApp() {
  if (init) {
    return;
  }
  init = true;

  await new Promise(resolve => waitForIdle(resolve));
  return import(<% if (!options.ssr) { %>/* webpackMode: "eager" */<% } %>'../client');
};

let idleTrys = 0;
const MAX_IDLE_TRYS = 10;
function waitForIdle (cb) {
  if (!!layerEl && idleTrys > MAX_IDLE_TRYS) {
    // User must interact via the layer.
    return;
  }
  idleTrys++
  if ('requestIdleCallback' in global) {
    global.requestIdleCallback((deadline) => {
      const time = deadline.timeRemaining();
      if (time > 10 || deadline.didTimeout) {
        cb();
      } else {
        waitForIdle(cb);
      }
    }, { timeout: 2000 });
  } else {
    cb();
  }
};

function initFont() {
  global.document.querySelectorAll('[data-font]').forEach((node) => {
    node.classList.add('font-active');
  })
}

function observeSpeedkitButton (button, callback) {
  if (button) {
    button.addEventListener('click', callback, { capture: true, once: true, passive: true })
  }
}

function updateInfoLayer(item) {
  item.style.display = 'block'
  layerEl.className += ' nuxt-speedkit-speedkit-layer-visible';
}

function setupSpeedkitLayer(callback, supportedBrowser) {
  if(!supportedBrowser) {
    updateInfoLayer(global.document.getElementById('nuxt-speedkit-button-unsupported-browser'));
  }
  if(!hasSufficientHardwareSetup()) {
    updateInfoLayer(global.document.getElementById('nuxt-speedkit-button-outdated-device'));
  }
  if(!hasSufficientDownloadPerformance()) {
    updateInfoLayer(global.document.getElementById('nuxt-speedkit-button-slow-connection'));
  }
  observeSpeedkitButton(global.document.getElementById('nuxt-speedkit-button-init-app'), callback);
}

const supportedBrowser = isSupportedBrowser(<%= options.supportedBrowserDetector %>);

if (!layerEl) {
  initApp();
} else {

  setup(<%= options.performanceMetrics %>);

  setupSpeedkitLayer(initApp, supportedBrowser)

  if(('__NUXT_SPEEDKIT_AUTO_INIT__' in global && global.__NUXT_SPEEDKIT_AUTO_INIT__) || ((<%= !options.ignorePerformance %> && hasSufficientPerformance()) && supportedBrowser)) {
    initApp();
  }

  observeSpeedkitButton(global.document.getElementById('nuxt-speedkit-button-init-font'), initFont);

  if('__NUXT_SPEEDKIT_FONT_INIT__' in global && global.__NUXT_SPEEDKIT_FONT_INIT__) {
    initFont()
  }

}
