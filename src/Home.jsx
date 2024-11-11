import React from 'react'
import './home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../src/assets/logo.png';
import img1 from '../src/assets/img1.png';
import img2 from '../src/assets/img2.png';
import book from '../src/assets/book.png';
import img3 from '../src/assets/img3.png';
import img4 from '../src/assets/img4.png';
import img5 from '../src/assets/img5.png';
import img6 from '../src/assets/img6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons/faArrowTrendUp';

function Home() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center py-2 bg-dark' style={{height:'auto'}}>
      <h5 className='text-light me-2'>Find More here ?</h5>
      <FontAwesomeIcon icon={faArrowTrendUp} beat className='text-light' />
       </div>
      <div className='div1 p-4' style={{ position: 'relative' }}>
        {/**Nav Bar */}
        <Navbar collapseOnSelect expand="lg" className="bg-body-transparent mt-3">
          <Container >
            <img src={logo} alt="no image found" width={'100px'} height={'100px'} style={{borderRadius:'50%'}}/>
            <div className=' d-flex flex-column'>
            <Navbar.Brand href="#home" className='fw-bolder fs-2 '>MOTIVATED</Navbar.Brand>
            <Navbar.Brand href="#home" className='logohead1 fw-bolder fs-4'>Mornings</Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features"></Nav.Link>
                <Nav.Link href="#pricing"></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets" className='fw-bolder fs-5'>What's New</Nav.Link>
                <Nav.Link href="#deets" className='fw-bolder fs-5'>About</Nav.Link>
                <Nav.Link href="#deets" className='fw-bolder fs-5'>Home</Nav.Link>
                <Nav.Link href="#deets" className='fw-bolder fs-5'>Blog</Nav.Link>
                <Nav.Link href="#deets"><FontAwesomeIcon icon={faUser} style={{color: "#050505",}} className='ms-2 shadow'/></Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <button className='btn btn-dark rounded-5 shadow'>Start Your Free Trial</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/**Nav Bar */}
        <div className='row'>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className='mainhead' style={{ marginTop: '100px' }}>
              <h1 className='fw-bolder'>Actually </h1>
              <h1 className='fw-bolder'>do the Work <em>.</em></h1>
              <p className='w-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. !</p>
              <button className='btn btn-dark rounded-5 p-3 shadow'><FontAwesomeIcon icon={faPlay} className='me-2' />See More Work's</button></div>

          </div>
          <div className="col-md-5">
            <img className='logooimg' src={img1} alt="np image" width={'500px'} />
            
          </div>
          <div className="col-md-1"></div>

        </div>
        <div className="custom-shape-divider-top-1731152553">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            {/*<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>*/}
          </svg>
        </div>
      </div>

      <section>
        <div className='row p-2' style={{ marginTop: '120px' }}>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <img src={img2} alt="no image to display" width={'700px'}
              className='logoimg2' />
          </div>
          <div className="col-md-5 p-5" style={{ marginLeft: '125px' }}>
            <h1 className='fw-bolder'>Tired of not</h1>
            <h1 className='fw-bolder'>Finishing that script?</h1>
            <ul className='fs-4' style={{listStyleType:'none'}}>
              <li><FontAwesomeIcon icon={faXmark} className='me-2'/>script</li>
              <li><FontAwesomeIcon icon={faXmark} className='me-2'/>section</li>
              <li><FontAwesomeIcon icon={faXmark} className='me-2'/>multiplies</li>
              <li><FontAwesomeIcon icon={faXmark} className='me-2'/>resume</li>
            </ul>
            <button className='btn btn-dark rounded-5 m-2 ms-4 px-5 fs-5 shadow'>Smart free trial</button>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>

      <section>
        <div >
          <div className="custom-shape-divider-top-1731161941" style={{ backgroundColor: 'rgb(240, 198, 75)' }}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
            </svg>  
          </div>
        </div>
        <div className='row  w-100' style={{position:'absolute',marginTop:'150px',marginLeft:'150px'}}>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h1 className='fw-bolder'>There's a better way.</h1>
            
            <ul className='fs-4' style={{listStyleType:'none'}}>
              <li><FontAwesomeIcon icon={faCircleCheck}  className='me-2'/>script</li>
              <li><FontAwesomeIcon icon={faCircleCheck}  className='me-2'/>section</li>
              <li><FontAwesomeIcon icon={faCircleCheck}  className='me-2'/>multiplies</li>
              <li><FontAwesomeIcon icon={faCircleCheck}  className='me-2'/>resume</li>
            </ul>
            <button className='btn btn-dark rounded-5 m-2 p-3 shadow'>Smart free trial</button>
          </div>
          <div className="col-md-5 ">
<h1 className='w-75 fw-bolder mt-5' style={{marginLeft:'-40px'}}><em>"</em> Get more done before 9am than you used to get done all day <em>."</em> </h1>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>

      <section>
        <div className='row p-2' style={{ marginTop: '670px' }}>
          <div className="col-md-2"></div>
          <div className="col-md-8 p-2">
            <h1 className='text-center fw-bolder mb-5'>Motivated Mornings is a virtual coworking community proven to help you do the work.</h1>
           
            <Container className='contdiv'>
              <Row className='text-center mb-3'>
                <Col xs={6} md={4}>
                <div className='services d-flex mb-3 align-item-center ' style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'grey'}}>
                <Image src={img6} roundedCircle width={'95px'} />
                </div>
                <h4 className='mb-3 fw-bolder'>Morning Kick-off calls</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quasi nisi reiciendis rerum quam! Quod, magni adipisci! Amet, illo aliquid ducimus atque assumenda minus, molestias id, repellat eveniet obcaecati consequatur!</p>
                </Col>
                <Col xs={6} md={4}>

                 <div className='services d-flex mb-3 align-item-center' style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'grey'}}>
                <Image src={img4} roundedCircle width={'120px'} />
                </div>
                  <h4 className='mb-3 fw-bolder'>Virtual Coworking</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quasi nisi reiciendis rerum quam! Quod, magni adipisci! Amet, illo aliquid ducimus atque assumenda minus, molestias id, repellat eveniet obcaecati consequatur!</p>
                </Col>
                <Col xs={6} md={4}>
                <div className='services d-flex mb-3 align-item-center' style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'grey'}}>
                <Image src={img5} roundedCircle width={'100px'} />
                </div>
                <h4 className='mb-3 fw-bolder'>Private Slack Group</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quasi nisi reiciendis rerum quam! Quod, magni adipisci! Amet, illo aliquid ducimus atque assumenda minus, molestias id, repellat eveniet obcaecati consequatur!</p>
                </Col>
              </Row>

              <Row className='d-flex justify-content-center align-item-center text-center'>
                
                <Col xs={6} md={4}>
                <div className='services d-flex mb-3 align-item-center' style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'orange'}}>
                <Image src="https://www.iconpacks.net/icons/2/free-chat-support-icon-1708-thumb.png" roundedCircle width={'120px'} />
                </div>
                  <h4 className='mb-3 fw-bolder'>Morning Kick-off cells</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quasi nisi reiciendis rerum quam! Quod, magni adipisci! Amet, illo aliquid ducimus atque assumenda minus, molestias id, repellat eveniet obcaecati consequatur!</p>
                </Col>
                <Col xs={6} md={4}>
                <div className='services d-flex mb-3 align-item-center' style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'orange'}}>
                <Image src="https://cdn-icons-png.flaticon.com/512/747/747042.png" roundedCircle width={'120px'} />
                </div>
                <h4 className='mb-3 fw-bolder'>Morning Kick-off cells</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quasi nisi reiciendis rerum quam! Quod, magni adipisci! Amet, illo aliquid ducimus atque assumenda minus, molestias id, repellat eveniet obcaecati consequatur!</p>
                </Col>
              </Row>

            </Container>

          </div>
          
          <div className="col-md-2"></div>
        </div>
      </section>


      <section>
        <div>
          <div className="custom-shape-divider-bottom-1731211367" style={{ backgroundColor: 'rgb(240, 198, 75)' }}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 550" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
        <div className='row  w-100' style={{position:'absolute',marginTop:'150px'}}>
          <div className="col-md-2"></div>
          <div className="col-md-8 ms-3 d-flex flex-column justify-content-center align-items-center">
            <h1 className='mb-4 fw-bolder'>Start with a free trial. Change your plan anytime.</h1>
           
            <div className='d-flex mb-3'>
              <Card style={{ width: '100%',height:'15em' }} className='me-3 rounded-5 text-center '>
                <Card.Body>
                  <Card.Title className='fw-bolder fs-2'> MoMo</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted fs-1">$ 49 / mo.</Card.Subtitle>
                  <Card.Text className='fw-bolder'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Card.Text>

                </Card.Body>
              </Card>
              <Card style={{ width: '100%' }} className='me-3 rounded-5 text-center '>
                <Card.Body>
                  <Card.Title className='fw-bolder fs-2'> MoMo Pro</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted fs-1">$ 399 / mo.</Card.Subtitle>
                  <Card.Text className='fw-bolder'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Card.Text>

                </Card.Body>
              </Card>
    </div>
            <button className='btn btn-dark rounded-5 m-2'>Smart free trial</button>
          </div>
          
          <div className="col-md-2"></div>
        </div>
      </section>

      <section>
        <div className='row p-2' style={{ marginTop: '850px'}}>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <img src={img3} alt="no image to display" width={'700px'} height={'500px'}
              className='logoimg2' />
          </div>
          <div className="col-md-5 p-5" style={{ marginLeft: '125px' }}>
            <h1 className='fw-bolder'>Actually</h1>
            <h1 className='fw-bolder'>complete that project.</h1>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia officiis harum possimus dolores officia quibusdam ipsa
               explicabo iste natus facere! Distinctio odit nam dolorem voluptates nulla earum est consequuntur ducimus?</p>
            <button className='btn btn-dark rounded-5 m-2'>Learn More <FontAwesomeIcon icon={faArrowRight} className='me-2 ms-1'/></button>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>

      <section>
        <div>
          <div className="custom-shape-divider-top-1731217009" style={{ backgroundColor: 'rgb(190, 184, 173)' }}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
        <div className='row  p-4 w-100' style={{ position: 'absolute', marginTop: '400px', marginLeft: '100px' }}>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <img src={book} alt="no image" width={'600px'} style={{ marginTop: '-200px' }} className='imgbook' />
          </div>
          <div className="col-md-5 w-25 formdiv">
            <h3 className='fw-bolder'>FREE GUIDE</h3>
            <h1 className='fw-bolder'>8 Secrets to Doing Work That Matters</h1>
            <h4 className='mb-3'>"Get more done before 9am than you used to get done all day" </h4>
            <form>
              <input type="text" placeholder='First Name' className='form-control mb-3' />
              <input type="text" placeholder='Last Name' className='form-control mb-3' />
              <input type="text" placeholder='Email Id' className='form-control mb-3' />
              <button className='btn btn-dark rounded-5 p-3  shadow'>DOWNLOAD THE GUIDE</button>
            </form>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>


      <footer className='p-5'>
        <div className='p-5'>
          <h2 className='fw-bolder'>Question? Let's Talk.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A iste, facere perspiciatis fugit minima  </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          <button className='btn btn-warning rounded-5'> Let's Talk</button>
          <div className='p-2 m-3'>
            <FontAwesomeIcon icon={faInstagram} className='text-light me-3' size='2x' />
            <FontAwesomeIcon icon={faFacebook} className='text-light me-3' size='2x' />
            <FontAwesomeIcon icon={faLinkedin} className='text-light me-3' size='2x' />
          </div>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
          <h4>Consectetur magni suscipit omnis molestias harum unde natus, eligendi cum aspernatur enim? </h4>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
          <div className='d-flex justify-content-end align-items-center helpdiv'>
          <button className='btn btn-warning rounded-5'> Help?</button>
          </div>
        </div>
       
      </footer>


    </>
  )
}

export default Home