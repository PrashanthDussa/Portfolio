import React from "react"

export default function AboutImage(props){

    const [imageVisible, setImageVisible] = React.useState(false);

    React.useEffect(() => {
        // setImageVisible(false)
        const timeoutId = setTimeout(() => {
        setImageVisible(true);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, []); //[props.dark]

    const imageStyle = {
        margin: '10px 50px',
        width: '360px',
        height: '480px',
        flexShrink: 0,
        border: props.dark ? '8px solid var(--Gray-Default, #030712)' : '8px solid var(--Gray-Default, #FFF)',
        background: 'url("/Images/about-image.jpg") lightgray 50% / cover no-repeat',
        marginTop: '45px',
        opacity: imageVisible ? 1 : 0,
        transition: "opacity 0.3s ease, marginTop 0.3s ease",
        boxShadow: props.dark ? "0 8px 16px rgba(255, 255, 255, 0.8)" : "0 8px 16px rgba(0, 0, 0, 0.8)"
    }

    return(
        <div>
            <div className="about-image" style={imageStyle}></div>
        </div>
    )
}