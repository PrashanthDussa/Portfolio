import React from 'react';
import { Link } from 'react-scroll';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Link
      to="navbar"
      spy={true}
      smooth={true}
      duration={1500}
    >
      <img
          className={`scroll-to-top-image ${isVisible ? 'visible' : ''}`}
          src='/Images/up-arrow.svg'
          alt="Scroll to Top"
        />    
    </Link>
  );
};

export default ScrollToTopButton;
