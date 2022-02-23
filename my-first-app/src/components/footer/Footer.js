import './Footer.css'
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

function Footer() {
	return (
		<div className="Footer">
			<FaInstagram size='2em' color="#fff"/>
			<FaFacebook size='2em' color="#fff"/>
			<FaGithub size='2em' color="#fff"/>
		</div>
	)
}

export default Footer;