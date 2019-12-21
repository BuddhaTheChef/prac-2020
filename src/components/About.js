import React from 'react';
import { images } from '../images';
import { Gallery, GalleryImage } from 'react-gesture-gallery';


const INITITAL = 0;

export default function About() {
    
        const [index, setIndex ] = React.useState(INITITAL);

        React.useEffect(() => {
           const interval = setInterval(() => {
               if (index === images.length - 1) {
                   setIndex(INITITAL)
               } 
               else {
                   setIndex(index + 1)
               }
               setIndex(index + 1)
            }, 30000)
           return () => clearInterval(interval)
        }, [index])

        return (
            <Gallery style={{height: '100vh', width: '100vw', background: 'black'}} index={index} onRequestChange={i => { setIndex(i)}}>
                {images.map(image => (
                    <GalleryImage objectFit="contain" src={image} /> 
                ))}
            </Gallery>
        )

}
