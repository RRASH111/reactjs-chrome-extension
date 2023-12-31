import React, { useRef, useEffect } from 'react';
import Popper from 'popper.js';
import './contentScript.css'; // Import the CSS file
import RelatedKeywords from '../components/RelatedKeywords';
const ContentScript = () => {
  const referenceElement = useRef(null);
  const popperElement = useRef(null);

  useEffect(() => {
    if (referenceElement.current && popperElement.current) {
      new Popper(referenceElement.current, popperElement.current, {
        placement: 'right', // Adjust placement as needed
      });
    }
  }, []);

  return (
    <div>
      
      <div >
        <RelatedKeywords/>
      </div>
    </div>
  );
}

export default ContentScript;