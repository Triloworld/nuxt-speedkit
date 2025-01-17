---
title: Introduction
description: ''
position: 1
version: 2
requirements:
  - NodeJS >= 12.x.x
  - NuxtJS >= 2.15.0
features:
  - dynamic loading of viewport based page resources like fonts, components, pictures, images and iframes
  - optional blocking of javascript execution by initial performance measuring
  - optimized initial load of javascript files by eliminating of unnecessary javascript files
  - prevents the loading of unnecessary resources (including components) that are outside the current viewport.
  - optional info layer concept to inform users about a reduced UX when bandwidth or hardware is compromised.  
  - completely new approach of font declaration
  - optimized picture component (supports viewport based sources e.g. landscape/portrait)
  - optimized image component
  - supports SEO-friendly lazy hydration mode (picture + image)
  - optimized youtube/vimeo component (auto generated poster image in different resolutions)  
results:
  - delivery of the minimum required resources based on the current viewport
  - if you use the tools as specified you will get a lighthouse performance score of 100/100
---

<!-- <img src="/preview.png" class="light-img" width="1280" height="640" alt=""/>
<img src="/preview-dark.png" class="dark-img" width="1280" height="640" alt=""/> -->
<img src="/intro-light.png" width="1280" height="640" alt=""/>

[Module](https://www.npmjs.com/package/nuxt-speedkit) for [NuxtJS](https://nuxtjs.org).


<alert>
<strong>You are reading the documentation for Nuxt Speedkit (v2)!</strong>

- <strong>Nuxt Speedkit (v1)</strong> documentation has been moved to [nuxt-speedkit.grabarzundpartner.dev/v1/](https://nuxt-speedkit.grabarzundpartner.dev/v1/).  
- Upgrading from <strong>Nuxt Speedkit (v1)</strong> ? Check out the [Migration Guide](/migration/v2/).
</alert>

**Nuxt Speedkit** takes over the lighthouse performance optimization of your generated website.

In order to achieve a performance score of 100/100, only the necessary resources located in the current viewport may be initialized when the page is loaded. This includes images, fonts and the js-modules. Until now, there has been no practical and usable concept to help developers maintain an overview and enable accurate targeting in NuxtJS projects. 

This module addresses this problem and provides a holistic approach to intelligently load the necessary viewport related resources to reduce FCP, DCL, TTI, TBT and CLS.

We didn't reinvent the whole wheel. We adapt the lazy hydration concept of [Markus Oberlehner](https://github.com/maoberlehner/vue-lazy-hydration) to load js components in an efficient way, use the [nuxt/image](https://github.com/nuxt/image) module as a base to retrieve optimized image resolutions for our picture and image components and add some new stuff to obtain a holistic solution.

## Requirements

<list type="info" :items="requirements"></list>
## Features

We provide the following CMS-friendly features:

<list type="success" :items="features"></list>

## Results

<list type="success" :items="results"></list>

## Demos

- [Grabarz & Partner](https://grabarzundpartner.de/) ([Lighthouse](https://pagespeed.web.dev/report?url=https%3A%2F%2Fgrabarzundpartner.de%2F), [Sitespeed](https://nuxt-speedkit.grabarzundpartner.dev/reports/sitespeed/grabarzundpartner/))
- [Grabarz Group](https://grabarz-group.de/) ([Lighthouse](https://pagespeed.web.dev/report?url=https%3A%2F%2Fgrabarz-group.de%2F), [Sitespeed](https://nuxt-speedkit.grabarzundpartner.dev/reports/sitespeed/grabarz-group/))
- [Nuxt Speedkit Example](https://nuxt-speedkit.grabarzundpartner.dev/example/) ([Lighthouse](https://pagespeed.web.dev/report?url=https%3A%2F%2Fnuxt-speedkit.grabarzundpartner.dev%2Fexample%2F), [Sitespeed](https://nuxt-speedkit.grabarzundpartner.dev/reports/sitespeed/nuxt-speedkit/))
