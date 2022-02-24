import './Footer.css'
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import {Col, Container, Row} from "react-bootstrap";

function Footer() {
	return (
		<div className="Footer">
			<Container className="d-flex justify-content-center">
				<Row>
					<Col>
						<a href="/"><FaInstagram className="Footer-icon" size='2em' color="#fff"/></a>
					</Col>
					<Col>
						<a href="/"><FaFacebook className="Footer-icon" size='2em' color="#fff"/></a>
					</Col>
					<Col>
						<a href="/"><FaGithub className="Footer-icon" size='2em' color="#fff"/></a>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Footer;