import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import Privacy from "../Layout/Privacy";
import Terms from "../Layout/Terms";

function Agreement(){
    return (
        <div className="agreementMainContainer">
            <div className="agreementLeft">
                <Link to='/'><button>back</button></Link>
                <ul>
                    <Link to={'/agreements/dataprivacy'}><li>Data Privacy Policy</li></Link>
                    <Link to={'/agreements/terms'}><li>Terms and Conditions</li></Link>
                </ul>
            </div>
            <div className="agreementRight">
                <Routes>
                    <Route path={'/dataprivacy'} element={<Privacy/>}/>
                    <Route path={'/terms'} element={<Terms/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Agreement;