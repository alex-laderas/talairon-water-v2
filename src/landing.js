import brgyLogo from './brgyLogo.png';
import t1 from './talairon1.png'
import t2 from './talairon2.jpg'
import t3 from './talairon3.jpg'
import t4 from './talairon4.jpg'

function Landing() {
    return(
        <main className="landingMain">
            <div className="landingHead">
                <div className="landingAuth">
                    <button>Signup</button>
                    <button>Login</button>
                </div>
                <div className="landingHeadTitle">
                    <img src={brgyLogo} width='200px' height='200px'/>
                    <h1>Barangay Talairon</h1>
                </div>
            </div>
            <div className="landingBody">
                <div className="landingBodyImages">
                    <img src={t1} />
                    <img src={t2} />
                    <img src={t3} />
                    <img src={t4} />
                </div>
            </div>
        </main>
    )
}

export default Landing;