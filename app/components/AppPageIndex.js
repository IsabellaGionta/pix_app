import * as React from 'react';
import { Pagination } from 'react-native-snap-carousel';
import styles from '../styles/styles';

export default function AppPageIndex({ data, activeSlide }) {
  const settings = {
    dotsLength: data.length,
    activeDotIndex: activeSlide,
    containerStyle: styles.dotContainer,
    dotStyle: styles.dotStyle,
    inactiveDotStyle: styles.inactiveDotStyle,
    inactiveDotOpacity: 0.4,
    inactiveDotScale: 0.6,
  };
  return <Pagination {...settings} />;
}