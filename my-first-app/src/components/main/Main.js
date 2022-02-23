import './Main.css';
import Carousel from "react-bootstrap/Carousel";
import flower from './flower.jpeg';
import fog from './fog.jpeg';
import sea from './sea.jpeg';

function Main() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src={ flower }
                    alt="flower"
                />
                <Carousel.Caption>
                    <button className="Main-btn">
                        See more
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src={ fog }
                    alt="fog"
                />
                <Carousel.Caption>
                    <button className="Main-btn">
                        See more
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src={ sea }
                    alt="sea"
                />
                <Carousel.Caption>
                    <button className="Main-btn">
                        See more
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Main;