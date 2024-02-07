import {
  Box,
  Heading,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import backgroundMob from '../images/jpg/HeroMobileBG.png';
import backgroundTab from '../images/jpg/HeroTabletBG.png';
import backgroundPC from '../images/jpg/HeroDesktopBG.png';
import baloons from '../images/jpg/HeroDesktopBalloons.png';

const scale = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1.1); }
`;

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${scale} infinite 10s linear`;

  return (
    <Box
      as="section"
      id="hero"
      h={'524px'}
      pt={'212px'}
      backgroundImage={[
        `url(${backgroundMob})`,
        `url(${backgroundTab})`,
        `url(${backgroundPC})`,
      ]}
      backgroundPosition={'center'}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      _after={{
        content: `""`,
        animation: `${animation}`,
        position: 'absolute',
        top: '90px',
        right: 0,
        bottom: 0,
        left: 0,
        backgroundSize: '110%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundImage: `url(${baloons})`,
        zIndex: -10,
      }}
    >
      <Heading
        mx={'auto'}
        w={'320px'}
        fontSize={'40px'}
        fontWeight={500}
        lineHeight={0.8}
        letterSpacing={-0.01}
        textAlign={'center'}
        color={'rgb(237, 75, 94)'}
      >
        Tworzymy unikalne <br />i niepowtarzalne{' '}
        <Text color={'rgb(34, 34, 34)'}>dekoracje balonowe</Text> na imprezy
      </Heading>
    </Box>
  );
};
