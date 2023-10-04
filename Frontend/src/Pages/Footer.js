import React from 'react'
import '../Footer.css'
import Logo from '../images/medical-logo-removebg-preview.png'
function Footer() {
  return (
   <>
<footer className="footer-distributed">

			<div className="footer-left">

				<div className='logo' style={{display:'flex'}}>
                 <img src={Logo} style={{maxWidth:'100px'}}></img>
                 <h2 style={{marginTop:'2.5rem'}}>Health Care</h2>
                </div>

				<p className="footer-links">
					<a href="#">Home</a>
					·
					<a href="#">Blog</a>
					·
					<a href="#">Pricing</a>
					·
					<a href="#">About</a>
					·
					<a href="#">Faq</a>
					·
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Health Care © 2023</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>

			<div className="footer-right">

				<p>Contact Us</p>

				<form action="#" method="post">

					<input type="text" name="email" placeholder="Email"/>
					<textarea name="message" placeholder="Message"></textarea>
					<button>Send</button>

				</form>

			</div>

		</footer>
   </>
  )
}

export default Footer