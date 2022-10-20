import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import statCell from '../../statCell.png'

function Admins() {

    const [paid, setPaid] = useState(0);
    const [penalties, setPenalties] = useState(0);
    const [overdue, setOverdue] = useState(0);

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

    return (
        <div className="adminContainer">
            
            <div className="dashHead">            
                <h2>Dashboard</h2> 
                <Link to="/admin/manage"><button>Manage</button></Link>
            </div>
            <span>{ date }</span>
            <span>{ hour } : { minute }</span>
            
            <div className="adminDashboard">
                <div className="dashboardLeft">
                    <div className="dashboardStatCell">
                        <div className="statCellHead statPaid">
                            <img src={statCell} alt="" srcset="" />
                            <h3>Customers Paid Today</h3>
                        </div>
                        <span>{ paid }</span>
                    </div>
                    <div className="dashboardStatCell">
                        <div className="statCellHead">
                            <img src={statCell} alt="" srcset="" />
                            <h3>Customers with Penalties</h3>
                        </div>
                        <span>{ penalties }</span>
                    </div>
                    <div className="dashboardStatCell">
                        <div className="statCellHead">
                            <img src={statCell} alt="" srcset="" />
                            <h3>Customers with Overdue Balance</h3>
                        </div>
                        <span>{ overdue }</span>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Purok</th>
                            <th>Appointment Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0002</td>
                            <td>Marinelle Penote</td>
                            <td>0912345678</td>
                            <td>5</td>
                            <td>15:00 October 15, 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Admins;