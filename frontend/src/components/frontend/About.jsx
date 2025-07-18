import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import {default as AboutNew} from '../common/About';

const About = () => {
  return (
    <>
      <Header/>
      <main>
        <section className='section-7'>
          <div className='hero d-flex align-items-center'>
              <div className='container'>
                  <div className='text-left'>
                      <span>Quality. Integrity. Value.</span>
                      <h1>About Us</h1>
                      <p>We excel at transforming visions into reality <br /> through outstanding craftsmanship and precise.</p>

                  </div>
              </div>
          </div>
        </section>

        <AboutNew/>


        {/* Our Team */}
        <section className='section-8 bg-light py-5'>
          <div className='container'>
            <div className='section-header text-center py-5'>
                <div className='mb-2'><span>Why Choose Us</span></div>
                <h2>Discover our diverse range of projects</h2>
                <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise,<br />decades of experience, innovation, and flexibility to consistently deliver excellence</p>
              </div>
          </div>
        </section>

      </main>
      <Footer/>
    </>
  )
}

export default About