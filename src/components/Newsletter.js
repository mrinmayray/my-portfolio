import React from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {

  const openLinkInNewTab = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    window.open("https://linktr.ee/mrinmayray", "_blank");
  };

  return (
    <Col lg={12} className="d-flex justify-content-center align-items-center">
      <div className="newsletter-bx wow slideInUp text-center">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 className="txt1">Subscribe to my Linktree & Never miss latest updates</h3>
          </Col>
        </Row>
        <Row>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button onClick={openLinkInNewTab}>Subscribe</button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
