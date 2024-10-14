import React, { useState, useEffect, useCallback } from 'react';
import certificates from './mycertificates';

const Certificates = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = certificates.length; // Store the length as a constant

    const goToNextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, [totalSlides]);

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 3000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, [goToNextSlide]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div id='certificates'>
            <section className='certificates'>
                <div className='cert-column1'>
                    <h2>Certificates</h2>
                    <p>
                        In a rapidly evolving field, staying ahead means embracing new challenges. 
                        My certifications not only demonstrate my capabilities but also reflect my 
                        passion for innovation and excellence. I invite you to explore how these 
                        credentials can translate into value for your projects.
                    </p>
                </div>
                <div className="slideshow-container">
                    {/* Button for next and prev */}

                    {certificates.map((certificates, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            {index === currentSlide && (
                                <img src={certificates} alt={`Slide ${index + 1}`} className='cert-img' />
                            )}
                        </div>
                    ))}

                    <div className="dots">
                        {certificates.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certificates;
