import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imageSrc from "../../../images/bg.png"
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
    const styling = {
        fontFamily: "Matemasie, sans-serif",
        fontWeight: "400",
        fontSize: "41px",
        color: "#04b89f",

    }
    return (

        <Row style={{ margin: "20px auto", overflow: "hidden", height: "75vh" }} className=' container bg-white mt-2 d-flex justify-content-between p-5 align-items-center ' xl={2} lg={2} md={2} sm={1} xs={1}>
            <Col>
                <div >
                    <div className='mb-3'>
                        <h3 style={styling}>Welcome To Our</h3>
                        <h3 style={styling}>E-commerce Web Store</h3>
                    </div>
                    <div >
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ea quaerat accusantium.
                            Maiores maxime est natus earum, soluta aut ipsam? Facere deleniti incidunt, nesciunt
                            odio provident est? Facere, quo soluta.</p>


                    </div>
                    <div>

                        <Link to={"/products"} className='text-decoration-none'>
                            <button className="reward-btn">
                                <span className="IconContainer">
                                    <svg
                                        className="box-top box"
                                        viewBox="0 0 60 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 18L58 18"
                                            stroke="#6A8EF6"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        ></path>
                                        <circle
                                            cx="20.5"
                                            cy="9.5"
                                            r="7"
                                            fill="#101218"
                                            stroke="#6A8EF6"
                                            strokeWidth="5"
                                        ></circle>
                                        <circle
                                            cx="38.5"
                                            cy="9.5"
                                            r="7"
                                            fill="#101218"
                                            stroke="#6A8EF6"
                                            strokeWidth="5"
                                        ></circle>
                                    </svg>

                                    <svg
                                        className="box-body box"
                                        viewBox="0 0 58 44"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask id="path-1-inside-1_81_19" fill="white">
                                            <rect width="58" height="44" rx="3"></rect>
                                        </mask>
                                        <rect
                                            width="58"
                                            height="44"
                                            rx="3"
                                            fill="#101218"
                                            stroke="#6A8EF6"
                                            strokeWidth="8"
                                            mask="url(#path-1-inside-1_81_19)"
                                        ></rect>
                                        <line
                                            x1="-3.61529e-09"
                                            y1="29"
                                            x2="58"
                                            y2="29"
                                            stroke="#6A8EF6"
                                            strokeWidth="6"
                                        ></line>
                                        <path
                                            d="M45.0005 20L36 3"
                                            stroke="#6A8EF6"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                        ></path>
                                        <path
                                            d="M21 3L13.0002 19.9992"
                                            stroke="#6A8EF6"
                                            strokeWidth="5"
                                            strokeLinecap="round"
                                        ></path>
                                    </svg>

                                    <span className="coin"></span>
                                </span>
                                <span className="text">Products</span>
                            </button>
                        </Link>

                    </div>
                 

           

                 
                </div>
            </Col>
            <Col>
                <div className='position-relative d-flex align-items-center'>
                    <img className='animated-images  ' 
                    draggable={false} style={{ width: "100%",objectFit: "contain" }} src={imageSrc} alt={"home"} />
                </div>
            </Col>
        </Row>

    )
}

export default Home