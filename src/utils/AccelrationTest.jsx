import React, { useRef, useState } from 'react';
import h from '../assets/Halsey.mp3';
function AccelerationComponent() {
        const [color, setColor] = useState('red');
        const colors = ['red', 'green'];
        const handleClick = () => {
                alert('Button clicked!');
        };
        const audioRef = useRef(null);

        const playSound = () => {
                audioRef.current.play();
        };

        const handleClickColor = () => {
                const newColor = color === 'red' ? 'green' : 'red';
                setColor(newColor);

                // Use the SpeechSynthesis API to make the browser speak the color
                const message = new SpeechSynthesisUtterance(newColor);
                window.speechSynthesis.speak(message);
        };

        return (
                <div>
                        <h1>Welcome to Accessible Sound Button</h1>
                        <p>Click the button to play a sound:</p>
                        <button onClick={playSound}>Click Me</button>
                        <audio ref={audioRef} src={h}>
                                Your browser does not support the audio element.
                        </audio>
                        <div>
                                <h1>Welcome to Accessible Website</h1>
                                <p>Click the button below:</p>
                                <button onClick={handleClick}>Click Me</button>
                        </div>
                        <div>
                                <h1>Welcome to Color Changing Cards</h1>
                                <p>Click the card to change its color:</p>
                                <div
                                        className="color-card"
                                        style={{ backgroundColor: color }}
                                        onClick={handleClickColor}
                                >
                                        {color} Card
                                </div>
                        </div>
                </div>
        );
}


//         return (
//             
//         );
// }

export default AccelerationComponent;
