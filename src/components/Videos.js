import { Container, Row, Col } from "reactstrap";
import video01 from '../app/assets/videos/video01.mp4' 
import video02 from '../app/assets/videos/video02.mp4' 


const Videos = () => {
    return (
        <Container >
            <Row >
                <Col className="justify-content-center d-flex">
                    <video
                    src={video01}
                    controls
                    muted
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    loop
                    className="videos"/> 
                    <span className="d-md-block d-none ">
                    <video
                    src={video02}
                    controls
                    muted
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    loop
                    className="videos "/> 
                    </span>
                 </Col>          
            </Row>
        </Container>
        
    )
};

export default Videos;