import React, { useEffect, useRef, useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import img from "../../images/logo.png"
import { useShoppingCart } from '../Data/Context/Context'
import './Header.css'
const Header = () => {

    const styleSearch = {
        padding: "5px",
        borderRadius: "5px",
        borderBottom: "2px solid #DDD"
    };
  
    const [nameurl, SetNameUrl] = useState("")

    useEffect(() => {
        const handleClick = () => {
            SetNameUrl(window.location.href);

        };
        window.addEventListener('mousemove', handleClick);
        window.addEventListener('onclick', handleClick);
        return () => {
            window.removeEventListener('mousemove', handleClick);
            window.removeEventListener('onclick', handleClick);

        };
    }, [])


    const imgStyle = {
        width: "150px",
        height: "80px",
        objectFit: "cover",
    }

 
    const { handleOpen, allItemQuantity, value,setValue } = useShoppingCart()
    return (
        <Navbar expand="lg" className="bg-body-tertiary sticky-top shadow-sm smColor"  >
            <Container>
                <Navbar.Brand style={{ fontWeight: "bold", justifyContent: "flex-start" }} as={NavLink} to={"/home"} className='d-flex align-items-center  text-decoration-none' >
                    <Link to={"/"}>
                        <img style={imgStyle} src={img} alt="" />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to={"/products"}>Products</Nav.Link>
                        {/* <Nav.Link as={NavLink} to={"/control"}>Control</Nav.Link> */}


                    </Nav>
                    {(nameurl === "http://localhost:3000/products") ? <div className='w-50'>


                        <input
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                // Use the updated value here
                            }}
                            className="inputsearch"
                            placeholder="Search the internet..."
                            type="text"
                            name="text"
                        />
                    </div> : false}

                </Navbar.Collapse>


            </Container>

            <div onClick={handleOpen} style={{ cursor: "pointer", padding: "20px", position: "relative" }} className='shoppinCart m-2 fs-4 '>

                <i className="bi bi-cart4 third">
                    {
                        allItemQuantity > 0 && <div style=
                            {{
                                width: "20px", height: "20px",
                                left: "35px",
                                top: "12px",
                                position: "absolute",
                                borderRadius: "50%",
                                fontWeight: "bold",
                                fontSize: "12px",
                                textAlign: "center",
                                color: "#fff", fontFamily: "monospace"

                            }}
                            className='bg-danger'>
                            {allItemQuantity}

                        </div>
                    }

                </i>



            </div>


        </Navbar>


    )
}

export default Header
