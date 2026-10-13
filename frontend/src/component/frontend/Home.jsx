// import React from 'react'

import Header from '../common/Header';
import Footer from '../common/Footer';
import AboutImg from '../../assets/images/about-us.jpg';
import ServiceImg from '../../assets/images/construction1.jpg';
import ConImg from '../../assets/images/construction3.jpg';
import ConImg2 from '../../assets/images/construction2.jpg';
import ConImg3 from '../../assets/images/construction1212.jpg';
import ConImg4 from '../../assets/images/construction7.jpg';
import ConImg5 from '../../assets/images/construction6.jpg';
import ConImg6 from '../../assets/images/construction4.jpg';
import ConImg7 from '../../assets/images/construction9.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Home = () => {
  return (
    <>


      <Header />
      <main>
        {/* Hero section */} 
        <section className='section-1'>
          <div className='hero d-flex align-items-center'>
            <div className='container-fluid'>
              <div className='text-center'>
                <span>Welcome Amazing Constructions</span>
                <h1>Crafting dreams with <br />
                  precision and excellence.</h1>
                <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br />attention to detail. With years of experience and a dedication to quality.</p>
                <div className='mt-4'>
                  <a className='btn btn-primary'>Contact Now</a>
                  <a className='btn btn-secondary ms-3'>View Projects</a>
                  <h1>ali</h1>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* About Us section */}
        <section className='section-2 py-5'>
          <div className='container py-5'>
            <div className='row'>
              <div className='col-md-6'>
                <img src={AboutImg} className='w-100' />
              </div>
              <div className='col-md-6'>
                <span>about us</span>
                <h2>Crafting structures that last a lifetime</h2>
                <p>Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.</p>

                <p>Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}

        <section className='section-3 bg-light py-5'>
          <div className='container-fluid py-5'>
            <div className='section-header text-center'>
              <span>our services</span>
              <h2>Our construction services</h2>
              <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <div className='row pt-4'>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ServiceImg} alt="" className='w-100' />

                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Specialty Construction</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                    </div>
                    <a href="#" className='btn btn-primary'>Read More</a>
                  </div>
                </div>

              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ConImg2} alt="" className='w-100' />

                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Specialty Construction</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                    </div>
                    <a href="#" className='btn btn-primary'>Read More</a>
                  </div>
                </div>

              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ConImg4} alt="" className='w-100' />

                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Specialty Construction</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                    </div>
                    <a href="#" className='btn btn-primary'>Read More</a>
                  </div>
                </div>

              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ConImg5} alt="" className='w-100' />

                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Specialty Construction</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                    </div>
                    <a href="#" className='btn btn-primary'>Read More</a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* Why Chose Us */}

        <section className='section-4 py-5'>
          <div className='container py-5'>
            <div className='section-header text-center'>
              <span>why chose us</span>
              <h2>Discover our wide variety of projects</h2>
              <p>Created in close partnership with our clients and collaborators, this approach merges industry expertise,<br />
                decades of experience, innovation, and flexibility to consistently deliver excellence.</p>
            </div>

            <div className='row pt-4'>
              <div className='col-md-4'>
                <div className='card shadow border-0 p-4'>
                  <div className='card-icon'>
                    <img src={Icon1} alt="" />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Cuttion-Edge Solutions</h3>
                  </div>
                  <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>

                </div>
              </div>

              <div className='col-md-4'>
                <div className='card shadow border-0 p-4'>
                  <div className='card-icon'>
                    <img src={Icon2} alt="" />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Cuttion-Edge Solutions</h3>
                  </div>
                  <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>

                </div>
              </div>

              <div className='col-md-4'>
                <div className='card shadow border-0 p-4'>
                  <div className='card-icon'>
                    <img src={Icon3} alt="" />
                  </div>
                  <div className='card-title mt-3'>
                    <h3>Cuttion-Edge Solutions</h3>
                  </div>
                  <p>Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.</p>

                </div>
              </div>
            </div>

          </div>
        </section>



        {/* Our projects*/}

        <section className='section-3 bg-light py-5'>
          <div className='container-fluid py-5'>
            <div className='section-header text-center'>
              <span>our projects</span>
              <h2>Discover our diverse range of projects</h2>
              <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <div className='row pt-4'>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ConImg7} alt="" className='w-100' />

                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Kolkata Project</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                    </div>
                    <a href="#" className='btn btn-primary'>Read More</a>
                  </div>
                </div>

              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ConImg3} alt="" className='w-100' />

                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>New Dehli Project</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                    </div>
                    <a href="#" className='btn btn-primary'>Read More</a>
                  </div>
                </div>

              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ConImg} alt="" className='w-100' />

                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Kanpur Project</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                    </div>
                    <a href="#" className='btn btn-primary'>Read More</a>
                  </div>
                </div>

              </div>
              <div className='col-md-3 col-lg-3'>
                <div className='item'>
                  <div className='service-image'>
                    <img src={ConImg6} alt="" className='w-100' />

                  </div>
                  <div className='service-body'>
                    <div className='service-title'>
                      <h3>Lucknow Project</h3>
                    </div>
                    <div className='service-content'>
                      <p>Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                    </div>
                    <a href="#" className='btn btn-primary'>Read More</a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        <section className='section-5 py-5'>
          <div className='container'>
            <div className='section-header text-center'>
              <span>Testimonials</span>
              <h2>What people are saying about us.</h2>
              <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className='card shadow border-0'>
                  <div className='card-body p-4'>
                    <div className='rating'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>
          </div>
        </section>



      </main>
      <Footer />
    </>

  )
}

export default Home