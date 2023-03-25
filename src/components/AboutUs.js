import { Container, Row, Col } from "reactstrap";
import React from 'react';
import video03 from '../app/assets/videos/video03.mp4' 

const AboutUs = () => {

    return (

        <Container>
            <div className="card "  >
                <Row >
                   
                    <div className="col-12 col-md-8 ">
                    <div className='card-body'>
                
                        <h5 className="fw-bold">About Us</h5>
                        <p className='mt-3'>Cloth was created as a passion design project. From there, it evolved to
                        to a small brand managed by one person. Cloth etos is luxury comfort first by keeping in mind
                        our impact to the enviroment. For this reason, every package that you receive from us is from 
                        recycle materials.  
                        </p>
                        </div> 
                    </div>
                  
                    <div className=' col-md-4 '>
                    <video src={video03} 
                    controls
                    muted
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    loop
                    className="videoAbout card-img card-body"/> 
                    </div>
                    </Row>  
                </div>
        </Container>

    )
}

export default AboutUs; 

