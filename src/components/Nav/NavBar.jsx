
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Nav } from "react-bootstrap";
import animals from "../assets/animals.png"
function NavBar() {
  return (
  
    <Nav className='nav'>
      
      <div className="dev">
      <Nav.Item><img width="63px" height="60px" style={{marginTop:"20px", marginRight:"13px"}} src={animals}/></Nav.Item>
       <Nav.Item style={{marginTop:"32px"}}><NavLink style={{ color: "white", padding:"7px", fontSize:"21px",
    textDecoration :"none"}} to="/animals">Animal</NavLink></Nav.Item>
      <Nav.Item style={{marginTop:"32px"}}><NavLink style={{color: "white", padding:"7px", fontSize:"21px",
    textDecoration :"none"}} to="/about-us">About Us</NavLink></Nav.Item>
      </div>
    
    </Nav>
  );
}

export default NavBar;