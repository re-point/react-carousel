## Multiple slides

You can show more than one slide per page, using the `slidesToShow` plugin.

```jsx render
// import Carousel, { slidesToShowPlugin } from '@re_point/react-carousel';
// import '@re_point/react-carousel/lib/style.css';

<Carousel
  plugins={[
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
