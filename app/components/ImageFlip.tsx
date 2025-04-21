import React, { useState } from 'react';
import Image from 'next/image'

const ImageFlip = ({ frontImageSrc, backContent, width = 300, height = 500, alt = "Flipping card" }) => {
     const [isFlipped, setIsFlipped] = useState(false);
    
      const handleClick = () => {
        setIsFlipped(!isFlipped);
      };
  return (
    <section>
        {/* IMAGE 1 */}
        <div
            className="group cursor-pointer pt-3"
            style={{ perspective: '1000px', width: `${width}px`, height: `${height}px` }}
            onClick={handleClick}
            role="button" // Better semantics than just a div
            tabIndex={0}  // Make it focusable
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()} // Accessibility
            aria-pressed={isFlipped}
            aria-label={alt}
        >
             <div
                    className={`pr-[11.5%] relative w-full h-full transition-transform duration-700 ease-in-out ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                    style={{ transformStyle: 'preserve-3d' }} // Essential for 3D effect
            >
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pl-[15px] pr-[15px] mb-3 box-border block' style={{ backfaceVisibility: 'hidden' }}>
                    <Image 
                        src={frontImageSrc}
                        alt=''
                        fill
                        className='object-cover w-full h-full'
                    />
                </div>
                <div
                    className="absolute inset-x-[12%] inset-y-0 w-[88%] h-[100%] bg-white shadow-xl overflow-hidden flex items-center justify-center text-center"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} // Hide and rotate initially
                >
                    {/* Content for the back */}
                    {backContent || <p className="text-moss">This is the back!</p>}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ImageFlip