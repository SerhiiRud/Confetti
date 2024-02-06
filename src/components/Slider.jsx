import { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
          <Button
            onClick={() =>
              setSlide((currentIndex - 1 + slides.length) % slides.length)
            }
          />
          <Button
            onClick={() => setSlide((currentIndex + 1) % slides.length)}
          />
        </>
      );
    default:
      return;
  }
};

export default Slider;
