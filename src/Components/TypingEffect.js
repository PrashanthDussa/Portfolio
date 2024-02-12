import React from 'react'

export default function TypingEffect(props) {
  const { text, onComplete } = props
  const [typing, setTyping] = React.useState("");
  const [index, setIndex] = React.useState(0);

  // to make react effect run when theme is switched every time
  // React.useEffect(() => {
  //   setTyping('');
  //   setIndex(0);
  // }, [dark]);
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setTyping((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(intervalId);
        if (onComplete) {
          onComplete();
        }
      }
    }, 5);

    return () => clearInterval(intervalId);
  }, [index, text, onComplete]);

  return (   
      <p>{typing}</p>
  )
}