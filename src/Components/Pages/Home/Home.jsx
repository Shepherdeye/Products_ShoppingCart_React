import React from 'react';
import { Col, Row } from 'react-bootstrap';
import imageSrc from "../../../images/bg.png";
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    const styling = {
        fontFamily: "Matemasie, sans-serif",
        fontWeight: "400",
        fontSize: "2rem",  // Adjusted for responsive design
        color: "#04b89f",
    };

    return (
        <Row style={{ margin: "20px auto", overflow: "hidden", height: "100%"}} className='container bg-white mt-2 d-flex justify-content-between p-5 align-items-center' xl={2} lg={2} md={2} sm={1} xs={1}>
            <Col>
                <div style={{
                    height:"50vh"
                }} className='position-relative d-flex align-items-center mb-4 p-3 '>
                    <img className='animated-images' draggable={false} style={{ width: "100%", objectFit: "contain" }} src={imageSrc} alt={"home"} />
                </div>
            </Col>
            <Col>
                <div>
                    <div className='mb-3'>
                        <h3 style={styling}>Welcome To Our</h3>
                        <h3 style={styling}>E-commerce Web Store</h3>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ea quaerat accusantium. Maiores maxime est natus earum, soluta aut ipsam? Facere deleniti incidunt, nesciunt odio provident est? Facere, quo soluta.</p>
                    </div>
                    <div>
                        <Link to={"/products"} className='text-decoration-none'>
                            <button className="reward-btn">
                                <span className="IconContainer">
                                    {/* SVG content here */}
                                    <span className="coin"></span>
                                </span>
                                <span className="text">Products</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Home;
