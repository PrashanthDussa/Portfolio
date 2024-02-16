import React from 'react';

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
    <img
      className={`scroll-to-top-image ${isVisible ? 'visible' : ''}`}
      src='/Images/up-arrow.svg'
      alt="Scroll to Top"
      onClick={handleScrollToTop}
    />
  );
};

export default ScrollToTopButton;
