import React from 'react';
import { Helmet } from 'react-helmet'
import '../static/css/App.css';
import '../static/css/Scroll.css';
import '../static/css/table.css';
import '../static/css/header.css';
import '../static/css/body.css';
import '../static/css/icons.css';
import tdp from'../static/imgs/3d.angle.jpg';
import kunai from'../static/imgs/kunai.jpg';
import bali from'../static/imgs/bali.jpg';
import balisong from '../static/imgs/balisong.jpg';
import karam from '../static/imgs/karam.jpg';
import Navbar from '../components/Navbar';


const Home = () => {


    return (

        <>
        
            

            <Helmet>

                <script>
                    {`const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        console.log(entry)
                        if (entry.isIntersecting) {
                            entry.target.classList.add("show")
                        } else {
                            entry.target.classList.remove("show")
                        }
                        });
                    });

                    const hiddenElements = document.querySelectorAll(".hidden");
                    hiddenElements.forEach((el) => observer.observe(el));`}
                </script>

            </Helmet>
            <title>UBWEB3D: Home</title> 

            <section className="hidden">
                <h1>
                    Welcome to UBWEB 3D!
                </h1>
                <h1> 
                    Serving Quality 3D printed products in minimal time and professional format!
                </h1>

                <img src={tdp} alt="" width={"600px"} height={"500px"} />
                
                
            </section>
            <br /><br /><br /><br /><br /><br /><br /><br /><br></br><br></br><br></br><br/>
            <Navbar />

            <section className="hidden">
                <h2>
                At UBWEB, we are always looking for ways to innovate and improve our offerings for our users. 
                </h2>
                <p>
                That's why we are thrilled to announce our latest expansion into the exciting world of 3D printing! We understand the importance of having a tangible product that you can hold in your hands and admire from every angle, and we want to provide that experience for our users. With our 3D printing services, you'll be able to turn your digital creations into physical objects that you can display, share, or even use in practical applications. At UBWEB, we believe that the possibilities of 3D printing are endless, and we can't wait to see what our users will create. So whether you're looking to bring a digital design to life, create a customized gift for a loved one, or just explore the exciting world of 3D printing, we've got you covered.
                </p>
            </section>

            <br /><br /><br /><br /><br /><br /><br /><br /><br />

            <section className="hidden">
                <h2>
                    We are significantly better than the competition!
                </h2>
                
                <table>
                <thead>
                    <tr>
                    <th></th>
                    <th>Easier access through a website</th>
                    <th>Makes anything</th>
                    <th>Better delivery times</th>
                    <th>Cheaper prices</th>
                    <th>Scroll animation 😏</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                        <td>UBWEB</td>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                        </tr>
                        <tr>
                        <td>Something3D</td>
                        <td>❌</td>
                        <td>Not Sure</td>
                        <td>❌</td>
                        <td>❌</td>
                        <td>❌</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <br /><br /><br /><br /><br /><br /><br /><br /><br />

            <section className="hidden">
                <h2>We make lots of stuff</h2>
                <div className="logos">
                    <div className="logo hidden">
                        <img alt="" height="250vh" src={kunai} />
                    </div>
                    <div className="logo hidden">
                    <img alt="" height="250vh" src={karam} />
                    </div>
                    <div className="logo hidden">
                    <img alt="" height="250vh" src={balisong} />
                    </div>
                    <div className="logo hidden">
                        <img alt="" height="250vh" src={bali} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;