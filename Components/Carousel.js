import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../src/styles/carousel.module.css';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.caro}>
      <Image
        src={`/images/${images[currentImageIndex]}`}
        alt={`Image ${currentImageIndex + 1}`}
        width={800}
        height={300}

      />
    </div>
  );
};

export default Carousel;