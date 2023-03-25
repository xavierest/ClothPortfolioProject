import {  Container, Row } from "reactstrap";
import dark01 from '../app/assets/img/dark01.jpg';
import dark02 from '../app/assets/img/dark02.jpg';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Carousel, CarouselItem } from 'reactstrap';



const Products = class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

    render () {
    
   
    return (
   
        <Container >
            <div className="card cardProducts">
              <Row>
              <div className='col-md-4 text-center '>
                    <img src={dark01} className='card-img card-body' onClick={this.toggle} />
                </div>

                  
                    <div className="col-12 col-md-8">
                <div className="  card-body "  >
                        <h5 className=" fw-bold">Cloth Products</h5>
                        <p className='mt-3'>Cloth prides itself on picking luxury comfort fabrics. 
                        We aim for elevated men's everyday comfort fashion. Browse our 2023 Spring
                        Collection. 
                        </p>
                        </div>
                     </div>
                     
                
                </Row>
              </div>
             
                <Modal isOpen={this.state.modal} toggle={this.toggle} modal={this.props.modal} >
                    <ModalBody toggle={this.toggle} charCode="Y" >
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                            <img src={dark01} class="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" >
                            <img src={dark02}  class="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" >
                            <img src={dark02} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <div className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </div>
                        <div className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </div>
                    </div>
                    </ModalBody>
                </Modal>
              
        </Container>

        
    );
  }
}

  {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                 <ModalBody toggle={this.toggle} charCode="Y">
                 <img src={dark01} width='100%'/>
                </ModalBody>
                </Modal>
                </div> */}

export default Products;

