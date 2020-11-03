## Click to change

By default, clicking the slides does nothing. You can change that behavior with the `clickToChange` plugin.

```jsx render
// import Carousel, { slidesToShowPlugin } from '@re_point/react-carousel';
// import '@re_point/react-carousel/lib/style.css';

<Carousel
  plugins={[
    'clickToChange',
    'centered',
    {
      resolve: slidesToShowPlugin,
      options: {
        numberOfSlides: 2,
      },
    },
  ]}
>
  <img src={imageOne} />
  <img src={imageTwo} />
  <img src={imageThree} />
</Carousel>
```
