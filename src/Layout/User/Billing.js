import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Billing() {

    const [monthlyBill, setMonthlyBill] = useState(0);
    const [meterReading, setMeterReading] = useState(0);
    const [balanceBill, setBalanceBill] = useState(0);

    const [date, setDate] = useState(null);

    useEffect(() => {
        const d = new Date();
        const interval = setInterval(() =>{
            setDate(d.toDateString())
        }, 1000)
        console.log(date);
    },[date])

    return (
        <>
            <div className="billingContainer">
                <div className="billingHeader">
                    <div className="billProfile">
                    <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.4961 35.3176C47.6708 32.7941 49.988 29.3336 51.1254 25.4175C52.2628 21.5014 52.1638 17.3245 50.8422 13.4679C49.5206 9.61136 47.0421 6.26684 43.7516 3.8997C40.461 1.53255 36.522 0.260494 32.4825 0.260494C28.4431 0.260494 24.5041 1.53255 21.2135 3.8997C17.923 6.26684 15.4445 9.61136 14.1229 13.4679C12.8013 17.3245 12.7023 21.5014 13.8397 25.4175C14.9771 29.3336 17.2943 32.7941 20.469 35.3176C15.0291 37.5196 10.2827 41.1717 6.7356 45.8847C3.18854 50.5977 0.973854 56.1949 0.327638 62.0796C0.280861 62.5092 0.3183 62.944 0.437817 63.359C0.557334 63.774 0.756588 64.1612 1.0242 64.4984C1.56467 65.1794 2.35079 65.6156 3.2096 65.7111C4.06841 65.8065 4.92958 65.5534 5.60365 65.0073C6.27772 64.4613 6.70948 63.667 6.80395 62.7993C7.515 56.4039 10.5333 50.4974 15.2822 46.2082C20.031 41.919 26.1775 39.548 32.5473 39.548C38.9171 39.548 45.0636 41.919 49.8125 46.2082C54.5613 50.4974 57.5796 56.4039 58.2907 62.7993C58.3787 63.6032 58.7584 64.3457 59.3564 64.8834C59.9544 65.4211 60.7283 65.716 61.5288 65.7111H61.885C62.7339 65.6124 63.5097 65.1788 64.0434 64.5047C64.5772 63.8306 64.8256 62.9706 64.7346 62.1123C64.0853 56.2109 61.8587 50.5994 58.2934 45.8791C54.7281 41.1589 49.9586 37.5079 44.4961 35.3176ZM32.4825 32.9948C29.9208 32.9948 27.4165 32.2273 25.2865 30.7893C23.1564 29.3513 21.4962 27.3075 20.5159 24.9163C19.5355 22.525 19.279 19.8937 19.7788 17.3552C20.2786 14.8167 21.5122 12.4849 23.3237 10.6547C25.1351 8.82451 27.4431 7.57814 29.9556 7.07319C32.4682 6.56824 35.0725 6.8274 37.4393 7.81789C39.8061 8.80838 41.829 10.4857 43.2523 12.6378C44.6755 14.7898 45.4352 17.32 45.4352 19.9083C45.4352 23.379 44.0705 26.7076 41.6414 29.1618C39.2124 31.616 35.9178 32.9948 32.4825 32.9948Z" fill="black"></path></svg>
                    </div>
                    <h1>Leah Glenn Amor</h1>
                </div>
                <span className="billDate"> { date != null ? date : "loading"} </span>
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