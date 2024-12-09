import React, { useState } from 'react';
import '../css/flipCard.css';

function FlipCard({ frontText, backText, cardNumber }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div>
        <section>
          <div className={`flip-card card-${cardNumber} ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className='texto1'>{frontText}</p>
              </div>
              <div className="flip-card-back">
                <p className='texto2'>{backText}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
  
export default FlipCard;