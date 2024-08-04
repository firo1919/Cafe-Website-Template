import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function TextAnimation() {
  return (
    <TypeAnimation
      sequence={[
        'Savor Gastronomic',
        1000,
        'Explore Culinary',
        1000,
        'Discover Epicurean',
        1000
      ]}
      speed={25}
      repeat={Infinity}
    />
  )
}

export default TextAnimation;