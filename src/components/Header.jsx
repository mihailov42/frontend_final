import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from'react-router-dom';
import "../App.css"

const Header = () => {
    return (
      <div>
          <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand ><Link to={'/'}>
                  <img src="./img/logo.png" alt=""  width={180}/></Link></Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link ><Link to={'/'}>Модельный ряд</Link></Nav.Link>
                  <Nav.Link ><Link to={'/'}>Диллеры</Link></Nav.Link>
                  <Nav.Link ><Link to={'/form'}>Тест-драйв</Link></Nav.Link>
                  <Nav.Link ><Link to={'/contacts'}>Контакты</Link></Nav.Link>
              </Nav>
              <Nav>
                  <Link to={'/'}>
                      <Button variant="primary">
                          Обратный звонок
                      </Button>
                  </Link>
              </Nav>
          </Container>
      </Navbar>  
    </div>
    )
  }
  
  export default Header