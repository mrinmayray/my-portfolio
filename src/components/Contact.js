import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; // Updated import
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

  const form = useRef();
  const [sending, setSending] = useState(false); // Added sending state

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true); // Set sending state to true

    emailjs.sendForm('service_qfa96ma', 'template_2iqg144', form.current, 'qqEgltz7EgyEK34aX')
      .then((result) => {
        console.log(result.text);
        toast.success("Message Sent"); // Show success notification
        form.current.reset();
        setSending(false); // Reset sending state to false after successful delivery
      }, (error) => {
        console.log(error.text);
        toast.error("Sending failed. Please try again!"); // Show error notification
        setSending(false); // Reset sending state to false after failed delivery
      });
  };
  const toastOptions = {
    position: window.innerWidth <= 768 ? 'top-center' : 'top-right', // Change position for small screens
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="First Name" name="first_name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Last Name" name="last_name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" name="user_email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" title="Please enter a valid email address" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." name="user_phone" required pattern="[0-9]*" title="Please enter only numeric characters" />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" name="message" required></textarea>
                        <button type="submit" value="send" disabled={sending}> {/* Disable button while sending */}
                          <span>{sending ? "Sending..." : "Send"}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <ToastContainer position={toastOptions.position} /> {/* Add ToastContainer at the end */}
      </Container>
    </section>
  )
}