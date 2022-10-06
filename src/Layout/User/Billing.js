import { useState } from "react";
import { Link } from "react-router-dom";

function Billing() {

    const [monthlyBill, setMonthlyBill] = useState(0);
    const [meterReading, setMeterReading] = useState(0);
    const [balanceBill, setBalanceBill] = useState(0);

    return (
        <>
            <div className="billingContainer">
                <div className="billingHeader">
                    <h1>Leah Glenn Amor</h1>
                </div>
                <div className="billCell">
                    <h2>Monthly Bill</h2>
                    <span>{ monthlyBill }</span>
                </div>
                <div className="billCell">
                    <h2>Meter Reading</h2>
                    <span>{ meterReading }</span>
                </div>
                <div className="billCell">
                    <h2>Balance Bill</h2>
                    <span>{ balanceBill }</span>
                </div>

                <Link to='/user/appointment'>
                    <button>Set Appointment</button>
                </Link>
            </div>
        </>
    )
}

export default Billing;