## Centered

By default, the current slide is aligned to the left. You can change that behaviour with the `centered` plugin.

```jsx render
// import Carousel, { slidesToShowPlugin } from '@re_point/react-carousel';
// import '@re_point/react-carousel/lib/style.css';

<Carousel
  plugins={[
    'centered',
    'infinite',
    'arrows',
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
