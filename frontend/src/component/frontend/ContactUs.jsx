// import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import Hero from '../common/Hero';

const ContactUs = () => {
    return (
        <>
            <Header />
            <main>
                <Hero preHeading='Quality. Integrity. Value.' heading='Contact Us' text='We excel at transforming visions into reality <br /> through outstanding craftsmanship and precise' />

                <section className='section-9 py-5'>
                    <div className='container'>
                        <div className='section-header text-center'>
                            <span></span>
                            <h2>Contact Us</h2>
                            <p>Our dedicated experts are here to help you with any of your questions, contact us by
                                <br /> filling out the form below and we will be in touch shortly.</p>
                        </div>

                        <div className='row'>
                            <div col-md-3>
                                <div className='card shadow border-0'>
                                    <div className='card-body'>
                                        <h3>Call Us</h3>
                                        <a href="#">(888-000-0000)</a>
                                        <a href="#">(222-123-12345)</a>

                                        <h3>You can write us</h3>
                                        <a href="#">example@example.com</a>
                                        <a href="#">info@example.com</a>

                                        <h3>Address</h3>
                                        <p>B-18X, Rajaji Puram <br />
                                            Lucknow, Uttar Pradesh, 226017 <br />
                                            0522400XXXX</p>

                                    </div>

                                </div>

                            </div>
                            <div col-md-9>
                                <div className='card shadow border-0'>

                                </div>

                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>

    )
}

export default ContactUs