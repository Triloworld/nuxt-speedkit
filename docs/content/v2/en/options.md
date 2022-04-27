---
title: Options
descriptio: ''
position: 12
category: Guide

---

## `crossorigin`
- Type: `String`
  - Default: `'anonymous'`
  - String values: `'anonymous'`, `'use-credentials'` or `undefined` [learn more](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)

Sets the global `crossorigin` value of the **Nuxt Speedkit** preloads.  
The default value is the `crossorigin` value from the [Render Configuration](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render#crossorigin).

## `optimizePreloads`
- Type: `Boolean`
  - Default: `true`

Activating this option optimizes the initial script preloads and removes unnecessary loads.

The following NuxtJS settings are made or overwritten in the `nuxt.config`:

| Property                            | Value   |
| ----------------------------------- | ------- |
| `nuxt.options.generate.manifest`    | `false` |
| `nuxt.options.render.resourceHints` | `true`  |
| `nuxt.options.render.asyncScripts`  | `true`  |
| `nuxt.options.render.http2.push`    | `false` |

## `detection`
- Type: `Object`

These options can be used to define the initial checks to display the [`SpeedkitLayer`](/components/speedkit-layer). The prerequisite are that the [`SpeedkitLayer`](/components/speedkit-layer) has been embedded into the layout.
  
````js
{
  performance: true,
  browserSupport: true
}
````

 | Key              | Type      | Required | Description                                                                                                                                                                                        | Default |
 | ---------------- | --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
 | `performance`    | `Boolean` | yes      | Checking whether the [minimum characteristic values](/options#performancemetrics) have been reached. If the test is negative, the [`SpeedkitLayer`](/components/speedkit-layer) will be displayed. | `true`  |
 | `browserSupport` | `Boolean` | yes      | Check if the current browser on client side is supported. If the test is negative, the [`SpeedkitLayer`](/components/speedkit-layer) will be displayed.                                            | `true`  |

<alert type="info">
For the browser support detection, the default <a href="https://github.com/browserslist/browserslist">Browserslist</a> of the NuxtJS configuration is used.
</alert>


## `performanceMetrics`
- Type: `Object`

With the help of the metrics, the actual performance check on client side can be configured.

````js
{
  device: {
    hardwareConcurrency: { min: 2, max: 48 },
    deviceMemory: { min: 2 }
  },
  timing: {
    fcp: 800,
    dcl: 1200 // fallback if fcp is not available (safari)
  }
}
````
### `device`
- Type: `Object`

Definition of the minimum hardware requirements for visiting the website.

````js
{
  hardwareConcurrency: { min: 2, max: 48 },
  deviceMemory: { min: 2 }
}
````

 | Key                   | Type     | Required | Description            | Default               |
 | --------------------- | -------- | -------- | ---------------------- | --------------------- |
 | `hardwareConcurrency` | `Object` | yes      | min/max number of CPUs | `{ min: 2, max: 48 }` |
 | `deviceMemory`        | `Object` | yes      | min size of memory     | `{ min: 2 }`          |

### `timing`
- Type: `Object`

Definition of the max. FCP duration (ms). If the specified value is exceeded, the [`SpeedkitLayer`](/components/speedkit-layer) will be displayed. If the browser does not grant access to the FCP, as fallback the DCL will be evaluated.

````js
{
  fcp: 800,
  dcl: 1200 // fallback if fcp is not available (safari)
}
````

 | Key   | Type     | Required | Description                                                                                                    | Default |
 | ----- | -------- | -------- | -------------------------------------------------------------------------------------------------------------- | ------- |
 | `fcp` | `Number` | yes      | Max. FCP duration in ms [learn More](https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint) | `800`   |
 | `dcl` | `Number` | yes      | Max. DCL duration in ms                                                                                        | `1200`  |


## `fonts`
- Type: `Array`

List of all font families used in the project. Only the fonts that are listed in the configuration can be retrieved and integrated via [`$fonts.getFont(...)`](/directives/v-font).

````js
[
  {
    family: 'Font A',
    locals: ['Font A'],
    fallback: ['Arial', 'sans-serif'],
    variances: […]
  },
  {
    family: 'Font B',
    locals: ['Font B'],
    fallback: ['Arial', 'sans-serif'],
    variances: […]
  }
]
````
### Font-Family
- Type: `Object`

Describes a font family with all its variants.

````js
{
  family: 'Font A',
  locals: ['Font A'],
  fallback: ['Arial', 'sans-serif'],
  variances: […]
}
````

| Key         | Type     | Required | Description                                      |
| ----------- | -------- | -------- | ------------------------------------------------ |
| `family`    | `String` | yes      | name of the font family                          |
| `locals`    | `Array`  | yes      | system font name of the specified font family    |
| `fallback`  | `Array`  | yes      | fallback fonts e.g. `['Arial', 'sans-serif']`    |
| `variances` | `Array`  | yes      | list of font family variants (e.g. Bold, Italic) |

<alert type="warning">
Prevent sizing discrepancy between your custom and fallback font for perfect swap and reduction of layout shifts. <a href="https://meowni.ca/font-style-matcher/">more</a>
</alert>

### Font-Variance
- Type: `Object`

A font variant describes an instance of a font family and is used to generate the `FontFace` declaration.
Font variants differ in [`style`](https://developer.mozilla.org/de/docs/Web/CSS/font-style) and [`weight`](https://developer.mozilla.org/de/docs/Web/CSS/font-weight).

````js
{
  style: 'normal',
  weight: 400,
  sources: [
    { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
    { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
  ]
}
````

| Key       | Type                 | Required | Description                                                            |
| --------- | -------------------- | -------- | ---------------------------------------------------------------------- |
| `style`   | `String`             | yes      | `font-style` of FontFace, e.g. `normal`, `italic`                      |
| `weight`  | `String` or `Number` | yes      | `font-weight` of FontFace, e.g. `400`, `normal`                        |
| `sources` | `Array`              | yes      | list of all font files assigned to the variant ([`sources`](#sources)) |

### `sources`
- Type: `Array`

List of all available font files of a font family variation.

````js
[
  { src: '@/assets/fonts/font-a-regular.woff', type:'woff' },
  { src: '@/assets/fonts/font-a-regular.woff2', type:'woff2' }
]
````

| Key    | Type     | Required | Value                                                      |
| ------ | -------- | -------- | ---------------------------------------------------------- |
| `src`  | `String` | yes      | path to a font file, the use of aliases is possible        |
| `type` | `String` | yes      | file format of the specified file, e.g. `woff`, `woff2`, … |

## `targetFormats`
- Type: `Array`
  - Default: `['webp', 'avif', 'jpg|jpeg|png|gif']`

Sets the default formats for the `SpeedkitPicture`.

Can be overridden in the `SpeedkitPicture` via the [`formats`](/components/speedkit-picture#formats) property.

For `png`, `jpeg` and `gif` formats we have added the `|` operator in the declaration.  
This adjusts the destination format to the source format.

### Example
**<span style="color: red;">Bad</span>**

The declaration below generates a `png`, `jpeg` and `gif` (destination format) for each `jpeg` (source format). The same applies to a `png` and a `gif` as source format. However, this is not practical for the source specifications in the Picture.

````js
{
  targetFormats: ['jpg', 'jpeg', 'png', 'gif']
}
````

**<span style="color: green;">Good</span>**

Based on the source format, the appropriate target format is created using the declaration described below.

````js
{
  targetFormats: ['jpg|jpeg|png|gif']
}
````

<alert type="info">
For the <code>avif</code> and <code>webp</code> formats the <code>|</code> operator is not needed, because these two image formats do not depend on the source format, as it is the case for <code>png</code>, <code>jpeg</code> and <code>gif</code>. 
</alert>

## `componentAutoImport`
- Type: `Boolean`
  - Default: `false`

With this attribute all components that can be found under `nuxt-speedkit/components` can be registered globally.
[Learn more @nuxt/components](https://github.com/nuxt/components).

<alert type="warning">This option is not recommended if you want to achieve a lighthouse score of 100/100.</alert>

### Available components


| Global Name                 | Import Path                                            |                                                                                                                       |
| --------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `SpeedkitIframe`            | `nuxt-speedkit/components/SpeedkitIframe`              | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitIframe.vue)              |
| `SpeedkitLayer`             | `nuxt-speedkit/components/SpeedkitLayer`               | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitLayer.vue)               |
| `SpeedkitPicture`           | `nuxt-speedkit/components/SpeedkitPicture`             | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitPicture.vue)             |
| `SpeedkitYoutube`           | `nuxt-speedkit/components/SpeedkitYoutube`             | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitYoutube.vue)             |
| `AbstractComponentObserver` | `nuxt-speedkit/components/abstracts/ComponentObserver` | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/abstracts/ComponentObserver.vue) |
| `AbstractOnlySsr`           | `nuxt-speedkit/components/abstracts/OnlySsr`           | [Source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/abstracts/OnlySsr.vue)           |

## `componentPrefix`
- Type: `String`
  - Default: `undefined`

Defines a prefix for the module components, important for auto import e.g. option `componentAutoImport`. 

**Example:** `SpeedkitPicture` => `PrefixSpeedkitPicture`

## `lazyOffset`
- Type: `Object`

Global option for the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) built into the **Nuxt Speedkit**.

````js
{
  component: '0%',
  asset: '0%' 
}
````

 | Key         | Type     | Required | Description                                                                                                                                                                       | Default |
 | ----------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
 | `component` | `String` | yes      | [`rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) value for [`SpeedkitHydrate`](/usage#import-components).                         | `0%`    |
 | `asset`     | `String` | yes      | [`rootMargin`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin) value for all static ressources (`v-font`, `SpeedkitPicture` & `SpeedkitImage`). | `0%`    |


## `loader`
- Type: `Object`

Defines the global built-in [LoadingSpinner](/components/speedkit-image#loadingspinner). 

````js
{
  dataUri: undefined,
  size: '100px',
  backgroundColor: 'grey'
}
````

 | Key               | Type     | Required | Description                                                                   | Default     |
 | ----------------- | -------- | -------- | ----------------------------------------------------------------------------- | ----------- |
 | `dataUri`         | `String` | no       | Defines the source of the loader. (e.g. `@/assets/spinner/three-circles.svg`) | `undefined` |
 | `size`            | `String` | no       | Defines the size of the loader. Use css `background-size` definition.         | `100px`     |
 | `backgroundColor` | `String` | no       | Defines the background color of the loader. Use css `color` definition.       | `grey`      |

