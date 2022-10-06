import phone from '../phone.png'
import fb from '../fb.png'
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="aboutContainer">
            <div className='aboutMain'>
                <h1>Talairon is a barangay in Oroquieta City</h1>
                <h2>Carlito Quilantang Selim</h2>
                <span>Punong Barangay</span>
            </div>
            <div className="aboutFooter">
                <div className="contactItem">
                    <img src={ phone } alt="" />
                    <span>test</span>
                </div>
                <a href='https://www.facebook.com'>
                    <div className="contactItem">
                        <img src={ fb } alt="" />
                        <span>test</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default About;