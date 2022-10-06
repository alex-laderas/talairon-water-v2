import { useEffect, useState } from 'react'

function Report() {

    const [date, setDate] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);

    
    useEffect(() => {
        const d = new Date();
        const interval = setInterval(() =>{
            setDate(d.toDateString())
            setHour(d.getHours())
            setMinute(d.getMinutes())
        }, 1000)
        console.log(date);
    },[minute])

    return(
        <div className="reportsContainer">
            <div className="reportLeft">
                <h1>Reports</h1>
                <div className="clockView">
                    <span>{date}</span>
                    <h2>{hour} : {minute}</h2>
                </div>
            </div>
            <div className="reportRight">
                <h1 className="pending">Pending</h1>
                <table className="pending">
                    
                    <tbody>
                        <tr>
                            <td>Kim Ssamu </td>
                            <td>ssamu@gmail.com</td>
                            <td>052222</td>
                        </tr>
                    </tbody>
                </table>

                <h1 className="overdue">Overdue</h1>
                <table className="overdue">
                   
                    <tbody>
                        <tr>
                            <td>null</td>
                            <td>null</td>
                            <td>null</td>
                        </tr>
                    </tbody>
                </table>

                <h1 className="paid">Paid</h1>
                <table className="paid">
                    <tbody> 
                        <tr>
                            <td>Kim Ssamu </td>
                            <td>ssamu@gmail.com</td>
                            <td>052222</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Report;