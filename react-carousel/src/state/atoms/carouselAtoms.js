import { atom } from 'recoil';

export const slideMovementState = atom({
  key: '@re_point/react-carousel/slideMovementState',
  default: {
    clicked: null, // index of the clicked slide
    dragStart: null, // X position of drag event start
    dragEnd: null, // X position of drag event end
    dragOffset: 0, // distance of the drag
  },
});

export const transitionEnabledState = atom({
  key: '@re_point/react-carousel/transitionEnabledState',
  default: false,
});

export const trackWidthState = atom({
  key: '@re_point/react-carousel/trackWidthState',
  default: 0,
});

export const trackStylesState = atom({
  key: '@re_point/react-carousel/trackStylesState',
  default: {
    marginLeft: 0,
    transform: 0,
  },
});

export const carouselStrategiesState = atom({
  key: '@re_point/react-carousel/carouselStrategiesState',
  default: [],
});

export const carouselValueState = atom({
  key: '@re_point/react-carousel/carouselValueState',
  default: 0,
});
