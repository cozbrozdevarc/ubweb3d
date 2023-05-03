import react from "react";
import "../static/css/Navbar.css"

const Navbar = () => {

    return (

        <>

            <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="https://ubweb.glitch.me">UBWEB's Games</a></li>
            </ul>

        </>
    )
}

export default Navbar;