import React from "react";
import { sliderData } from "../utils/sliderData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
        <Container>
            <Row>
                <Col>
      <span className='carSlider'>
        <FaAngleLeft className='leftArrow' onClick={prevSlide} />
        <FaAngleRight className='rightArrow' onClick={nextSlide} />
        {sliderData.map((slide, index) => {
          return (

            <div
              className={index === current ? 'slideactive' : 'slidest'}
              key={index}
            >
                
              {index === current && (
                <img src={slide.image} alt='travel image' className='carImage ' />
              )}
            </div>
          
          );
        })}
      </span>
      </Col>
      </Row>
      </Container>
    );
  };
  
  export default ImageSlider;