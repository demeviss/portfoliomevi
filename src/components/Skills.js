import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png'


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
     };
     return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>Mi enfoque centrado en el usuario se refleja en la aplicación de principios de diseño que van desde la jerarquía visual hasta la selección de tipografía y paletas de colores, creando así experiencias visuales cohesivas y memorables.

                            Como diseñador web, también gestiona proyectos de manera eficiente, resolviendo problemas de manera efectiva y colaborando de manera efectiva con equipos multidisciplinarios. Mi actitud de aprendizaje continuo y adaptabilidad a las últimas tendencias y tecnologías asegura que mi trabajo esté siempre en la vanguardia de la innovación en diseño web.

                            Explora mi portafolio para obtener una visión más detallada de mi trabajo y cómo puedo aportar valor a tus proyectos.</p>
                             
                        <Carousel responsive ={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={meter1} alt='Image'/>
                            <h5>Web Developed</h5>
                        </div>
                        <div className='item'>
                            <img src={meter2} alt='Image'/>
                            <h5>Brand Identify</h5>
                        </div>
                        <div className='item'>
                            <img src={meter3} alt='Image'/>
                            <h5>Logo Design</h5>
                        </div>
                        <div className='item'>
                            <img src={meter1} alt='Image'/>
                            <h5>Web Developed</h5>
                        </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
     )

}