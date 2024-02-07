import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import icon from '../images/svg/symbol-defs.svg';
import { AboutSlide } from './AboutSlide';
import { ReviewSlide } from './ReviewSlide';

const Slider = ({ section, slides }) => {
  const [currentIndex, setSlide] = useState(0);
  switch (section) {
    case 'about':
      return (
        <Carousel
          infiniteLoop
          showThumbs={false}
          autoFocus={true}
          showStatus={false}
        >
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
    case 'reviews-mob':
      return (
        <Carousel
          infiniteLoop
          showThumbs={false}
          autoFocus={true}
          showStatus={false}
        >
          {slides.map(slide => {
            return (
              <ReviewSlide
                key={slide.author}
                content={slide.content}
                author={slide.author}
              />
            );
          })}
        </Carousel>
      );
    case 'reviews-tab':
      return (
        <>
          <Carousel
            infiniteLoop
            showThumbs={false}
            autoFocus={true}
            showStatus={false}
            showIndicators={false}
            centerMode={true}
            centerSlidePercentage={-0.087 * window.innerWidth + 117}
            selectedItem={currentIndex}
          >
            {slides.map(slide => (
              <ReviewSlide
                key={slide.author}
                content={slide.content}
                author={slide.author}
              />
            ))}
          </Carousel>
          <Box
            display={'flex'}
            gap={'24px'}
            justifyContent={'center'}
            mt={'48px'}
          >
            <Button
              p={0}
              borderRadius={50}
              onClick={() =>
                setSlide((currentIndex - 1 + slides.length) % slides.length)
              }
            >
              <svg width="56" height="56">
                <use href={`${icon}#icon-left`}></use>
              </svg>
            </Button>
            <Button
              p={0}
              borderRadius={50}
              onClick={() => setSlide((currentIndex + 1) % slides.length)}
            >
              <svg width="56" height="56">
                <use href={`${icon}#icon-right`}></use>
              </svg>
            </Button>
          </Box>
        </>
      );
    default:
      return;
  }
};

export default Slider;
