import { atom } from 'recoil';

export const activeSlideIndexState = atom({
  key: '@re_point/react-carousel/activeSlideIndexState',
  default: 0,
});

export const slideWidthState = atom({
  key: '@re_point/react-carousel/itemWidthState',
  default: 0,
});

export const slideOffsetState = atom({
  key: '@re_point/react-carousel/itemOffsetState',
  default: 0,
});

export const slidesState = atom({
  key: '@re_point/react-carousel/slidesState',
  default: [],
});
