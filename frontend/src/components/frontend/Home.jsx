import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg'


const Home = () => {
  return (
    <>
      <header>
        <div className='container py-3'>
          <Navbar expand="lg" >
              <Navbar.Brand href="#home" className='logo'><span>Company </span>Name</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                      <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                      <Nav.Link href="#link" className='nav-link'>About Us</Nav.Link>
                      <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                      <Nav.Link href="#link" className='nav-link'>Project</Nav.Link>
                      <Nav.Link href="#link" className='nav-link'>Blogs</Nav.Link>
                      <Nav.Link href="#link" className='nav-link'>Contact Us</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
      <main>
        {/* Hero Section */}
          <section className='section-1'>
              <div className='hero d-flex align-items-center'>
                  <div className='container-fluid'>
                      <div className='text-center'>
                          <span>Welcome Amazing Constructions</span>
                          <h1>Crafting dreams with <br /> precision and excellence.</h1>
                          <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br /> attention to detail. With years of experience and a dedication to quality.</p>
                          <div className='mt-4'>
                            <a className='btn btn-primary'>Contact Now</a>
                            <a className='btn btn-secondary ms-2'>View Projects</a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* About Us Section */}
          <section className='section-2'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <img src={AboutImg} className='w-100'/>
                </div>
                <div className='col-md-6'></div>
              </div>
            </div>
          </section>
      </main>
      <footer>

      </footer>
    </>


  )
}

export default Home