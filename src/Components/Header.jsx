import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-cart-shopping"></i>{' '}
            Product List 
          </Navbar.Brand>
        </Container>
      </Navbar>


      {/* carousel */}


      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.samsung.com/is/image/samsung/assets/in/home/20240103/1440x640.jpg?imwidth=1366"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.samsung.com/is/image/samsung/assets/in/home/1440x64015.jpg?imwidth=1366"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/10/iphone-8-1.png?resize=1200%2C628&quality=82&strip=all&ssl=1"style={{height:"42rem"}}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
    
  );
}





export default Header;
