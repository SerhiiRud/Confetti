import { Image } from '@chakra-ui/react';
import { AboutSlide } from './AboutSlide';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = ({ slides }) => {
  return (
    <Carousel infiniteLoop showThumbs={false}>
      {slides.map(slide => {
        return (
          <AboutSlide
            key={slide.title}
            title={slide.title}
            content={slide.content}
            background={slide.background}
          />
        );
      })}
    </Carousel>
  );
};

export default Slider;
