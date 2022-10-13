import { useState } from "react";

function BillDetails() {

    const [pastReading, setPastReading] = useState(0);
    const [currentReading, setCurrentReading] = useState(0);
    const [penalties, setPenalties] = useState(0);

    const [name, setName] = useState("Marinelle");
    const [address, setAddress] = useState("Talairon");
    const [number, setNumber] = useState("09123756592");
    const [email, setEmail] = useState("mpenote@gmail.com");
    const [id, setId] = useState("0002");

    return (
        <div className="billDeets">
            <div className="billDeetHead">
                <div className="deetHeadLeft">
                    <h2> {name} </h2>
                </div>
                <div className="deetHeadRight">
                    <p>{ address }</p>
                    <p>{ number }</p>
                    <p>{ email }</p>
                    <p>{ id }</p>
                </div>
            </div>
            <div className="billDeetBody">
                <div className="billDeetBodyLeft">
                    <div className="billDeetCell">
                        <p>PastRecords</p>
                    </div>
                </div>
                <div className="billDeetBodyRight">
                    <div className="billDeetCell">
                        <p>Current Reading: </p>
                        <p>{ currentReading }</p>
                    </div>
                    <div className="billDeetCell">
                        <p>Past Reading: </p>
                        <p>{ pastReading }</p>
                    </div>
                    <div className="billDeetCell">
                        <p>Penalties: </p>
                        <p>{ penalties }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillDetails;