import React from "react";
import { Divider, Row, Col } from "antd";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { SocialMediaImg } from "../assets/img/imageList";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Contact = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.4093,
    lng: 49.8671,
  };

  return (
    <div>
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          md={{ span: 20, offset: 2 }}
          xl={{ span: 16, offset: 4 }}
        >
          <div className="contactWrap">
            <Divider className="contactTitle" dashed={true}>
              CONTACT US
            </Divider>
            <div className="contactText">
              <div className="contactInnerWrap">
                <p>
                  <EnvironmentOutlined />
                  <b>Address : </b> 245a, Rashid Behbudov st, Baku, Azerbaijan
                </p>
                <p>
                  <PhoneOutlined />
                  <b>Phone : </b>{" "}
                  <a href="tel:+994 55-123-45-67">+994 55-123-45-67</a>
                </p>
                <p>
                  <MailOutlined />
                  <b>E-mail : </b>{" "}
                  <a href="mailto:contact@company.com"> contact@company.com</a>
                </p>
                <ul>
                  <li>
                    <a target="_blank" href="google.com">
                      <img src={SocialMediaImg[0]} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="google.com">
                      <img src={SocialMediaImg[1]} alt="instagram" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="google.com">
                      <img src={SocialMediaImg[2]} alt="facebook" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="google.com">
                      <img src={SocialMediaImg[3]} alt="youtube" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="google.com">
                      <img src={SocialMediaImg[4]} alt="twitter" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="contactMap">
                <LoadScript googleMapsApiKey="AIzaSyCAIwTPctnSM2PWcbK6cMdlZaSgEYIKp5U">
                  <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                  >
                    <Marker
                      key={"Location 1"}
                      position={{
                        lat: 40.4093,
                        lng: 49.8671,
                      }}
                    />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
