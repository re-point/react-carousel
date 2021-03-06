<br/>
<h1 align="center">
  <a href="https://brainhubeu.github.io/react-carousel/">
    <img src="https://github.com/brainhubeu/react-carousel/raw/master/readme/assets/logo.gif" alt="" width="200"/>
  </a>
  <br/>
  react-carousel
</h1>

<p align="center">
  A pure extendable React carousel, powered by <a href="https://brainhub.eu/">Brainhub</a> (craftsmen who ❤️ JS) 
</p>

<p align="center">
  <strong>
    <a href="https://brainhubeu.github.io/react-carousel/">Live code demo</a> | 
    <a href="https://brainhubeu.github.io/react-carousel/docs/migrationGuide">v1 migration guide</a> | 
    <a href="https://brainhub.eu/contact/">Hire us</a>
  </strong>
</p>

## Why?

There are some great carousels (like slick) that do not have real React implementations. This library provides you with carousel that is not merely a wrapper for some jQuery solution, can be used as controlled or uncontrolled element (similar to [inputs](https://reactjs.org/docs/uncontrolled-components.html)), and has tons of useful features.

## Installation

### Basic

```
npm i @re_point/react-carousel
```

### Typescript

```
npm i @types/brainhubeu__react-carousel -D
```

### SSR

When using `@re_point/react-carousel` with SSR (Server-side Rendering), we recommend [Next.js](https://github.com/zeit/next.js) as `@re_point/react-carousel` currently doesn't work on the server side so it must be rendered on the client side (maybe we'll provide server-side working in the future).

```js
import dynamic from 'next/dynamic';

const { default: Carousel, Dots } = dynamic(
  () => require('@re_point/react-carousel'),
  { ssr: false },
);
```

## Usage

By default, the component does not need anything except children to render a simple carousel.
Remember that styles do not have to be imported every time you use carousel, you can do it once in an entry point of your bundle.

```javascript
import React from 'react';
import Carousel from '@re_point/react-carousel';
import '@re_point/react-carousel/lib/style.css';

const MyCarousel = () => (
  <Carousel plugins={['arrows']}>
    <img src={imageOne} />
    <img src={imageTwo} />
    <img src={imageThree} />
  </Carousel>
);

export default MyCarousel;
```

[![gif](readme/assets/carousel.gif)](https://brainhubeu.github.io/react-carousel/docs/examples/simpleUsage)

### Showing dots or thumbnails

There is a separate Dots component that can be used to fully control navigation dots or add thumbnails.

```javascript
import Carousel, { Dots } from '@re_point/react-carousel';
import '@re_point/react-carousel/lib/style.css';
import { useState } from 'react';

const MyCarouselWithDots = () => {
  const [value, setValue] = useState(0);

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <Carousel value={value} onChange={onChange}>
        <img className="img-example" src={someImage} />
        ...
        <img className="img-example" src={anotherImage} />
      </Carousel>
      <Dots
        value={this.state.value}
        onChange={this.onChange}
        thumbnails={[
          <img key={1} className="img-example-small" src={abstractImage} />,
          ...(
            <img key={12} className="img-example-small" src={transportImage} />
          ),
        ]}
      />
    </div>
  );
};

export default MyCarouselWithDots;
```

[![gif](readme/assets/thumbnails.gif)](https://brainhubeu.github.io/react-carousel/docs/examples/thumbnails)

## Props

You can access a clickable demo with many examples and a [live code editor](https://brainhubeu.github.io/react-carousel/) by clicking on a Prop name.

### Carousel props

| Prop                                                                                      | Type       | Default     | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ---------- | ----------- | ----------------------------------------------------------------------------------------- |
| [**value**](https://brainhubeu.github.io/react-carousel/docs/examples/controlled)         | _Number_   | `undefined` | Current slide's index (zero based, depends on the elements order)                         |
| [**onChange**](https://brainhubeu.github.io/react-carousel/docs/examples/controlled)      | _Function_ | `undefined` | Handler triggered when current slide is about to change (e.g. on arrow click or on swipe) |
| **slides**                                                                                | _Array_    | `undefined` | Alternative way to pass slides. This prop expects an array of JSX <img> elements          |
| **itemWidth**                                                                             | _Number_   | `undefined` | Determines custom width for every slide in the carousel                                   |
| **offset**                                                                                | _Number_   | `0`         | Padding between items                                                                     |
| [**animationSpeed**](https://brainhubeu.github.io/react-carousel/docs/examples/animation) | _Number_   | `500`       | Determines transition duration in milliseconds                                            |
| [**draggable**](https://brainhubeu.github.io/react-carousel/docs/examples/draggable)      | _Boolean_  | `true`      | Makes it possible to drag to the next slide with mouse cursor                             |
| [**breakpoints**](https://brainhubeu.github.io/react-carousel/docs/examples/responsive)   | _Object_   | `undefined` | All props can be set to different values on different screen resolutions                  |

### Plugins

You can extend react-carousel default behavior by applying plugins shipped within carousel

[**Plugins documentation**](https://brainhubeu.github.io/react-carousel/docs/plugins/plugins)

### Dots props

| Prop                                                                                   | Type                     | Default                            | Description                                                                    |
| -------------------------------------------------------------------------------------- | ------------------------ | ---------------------------------- | ------------------------------------------------------------------------------ |
| [**value**](https://brainhubeu.github.io/react-carousel/docs/examples/dots)            | _Number_                 | slide position in the slides Array | Current `Carousel` value                                                       |
| [**onChange**](https://brainhubeu.github.io/react-carousel/docs/examples/dots)         | _Function_               | `undefined`                        | `onChange` callback (works the same way as `onChange` in `Carousel` component) |
| [**number**](https://brainhubeu.github.io/react-carousel/docs/examples/dots)           | _Number_                 | Amount of slides                   | Number of slides in the carousel you want to control                           |
| [**thumbnails**](https://brainhubeu.github.io/react-carousel/docs/examples/thumbnails) | _Array of ReactElements_ | `undefined`                        | Array of thumbnails to show. If not provided, default dots will be shown       |
| [**rtl**](https://brainhubeu.github.io/react-carousel/docs/examples/rtl)               | _Boolean_                | `false`                            | Indicating if the dots should have direction from Right to Left                |

### Setting up local development which means running the docs/demo locally:

- `git clone https://github.com/brainhubeu/react-carousel`
- `cd react-carousel`
- `yarn`
- `yarn start-demo`
- open http://localhost:8000/

### Tests

Each test command should be run from the root directory.

#### Unit tests

```
yarn test:unit:coverage
```

#### E2E tests

```
yarn test:e2e
```

### Workflow

See [the Workflow subsection in our docs](https://brainhubeu.github.io/react-carousel/docs/contributions-guide/workflow)

### Labels

See [the Labels subsection in our docs](https://brainhubeu.github.io/react-carousel/docs/contributions-guide/labels)

### Decision log

See [the Decision log subsection in our docs](https://brainhubeu.github.io/react-carousel/docs/contributions-guide/decision-log)

## License

react-carousel is copyright © 2018-2020 [Brainhub](https://brainhub.eu/?utm_source=github). It is free software and may be redistributed under the terms specified in the [license](LICENSE.md).

## About

react-carousel is maintained by the Brainhub development team. It is funded by Brainhub and the names and logos for Brainhub are trademarks of Brainhub Sp. z o.o.. You can check other open-source projects supported/developed by our teammates [here](https://github.com/brainhubeu).

[![Brainhub](https://brainhub.eu/brainhub.svg)](https://brainhub.eu/?utm_source=github)

We love open-source JavaScript software! See our other projects or hire us to build your next web, desktop and mobile application with JavaScript.
