import { useState } from 'react'
import {Row, Col, Navbar, Nav, Form, FormControl, Button, Dropdown, Container} from 'react-bootstrap';
import './App.css'
import NewsList from './Components/NewsList';
import githublogo from './assets/github.png';
import linkedinlogo from './assets/linkedin.png';
import skylablogo from './assets/skylab.png';

function App() {
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm('');
  }
  const handleSearch = (e) =>{
    e.preventDefault();
    setCategory('');
    setSearchTerm(e.target.search.value);
    e.target.search.value = '';
  }
  console.log(searchTerm);

  return (
    <>
    <Navbar bg='dark' expand='lg' className='mb-4' fixed='top'>
    <Container className='innerNav'>
      <Navbar.Brand href='/' className='fw-bold fs-4 newsApp'>
        News App 
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls='navbar-nav'/>

        <Navbar.Collapse id='navbar-nav'>
          <Nav className='me-auto'>
          <Row xs={12} md={3}>
        
          <Nav >
            <Nav.Link onClick={() => handleCategoryClick('general')}>World</Nav.Link>
            <Nav.Link onClick={() => handleCategoryClick('business')}>Business</Nav.Link>
            <Nav.Link onClick={() => handleCategoryClick('technology')}>Techonolgy</Nav.Link>
            <Nav.Link onClick={() => handleCategoryClick('sports')}>Sports</Nav.Link>
            <Nav.Link onClick={() => handleCategoryClick('entertainment')}>Entertainment</Nav.Link>
          </Nav>
          
        </Row>
          </Nav>

          <Form onSubmit={handleSearch} className='d-flex'>
            <FormControl type='text' placeholder='Search...' className='me-2' name='search'/>

            <Button variant='outline-primary' type='submit'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>

    <Container className='news'>

        <Col xs={12} md={9} >
          <NewsList category={category} searchTerm={searchTerm} />
        </Col>

    </Container>

    <Navbar bg="dark" data-bs-theme="dark">
        <Container className='NavbarBottom'>
          <Navbar.Brand href="#home">News App ©</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/Khusro-S" target='_blank'><img src={githublogo} alt="github" width='24px' /></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/khusro-sakhi-0bbb8922b" target='_blank'><img src={linkedinlogo} alt="linkedin" width='24px' /></Nav.Link>
            <Nav.Link href="https://www.yildizskylab.com/" target='_blank'><img src={skylablogo} alt="skylab" width='24px' /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default App
