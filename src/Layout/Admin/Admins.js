import { useState } from "react";
import statCell from '../../statCell.png'

function Admins() {

    const [paid, setPaid] = useState(0);
    const [penalties, setPenalties] = useState(0);
    const [overdue, setOverdue] = useState(0);

    return (
        <div className="adminContainer">
            

                <h2>Dashboard</h2>
            <div className="dashboardLeft">
                <div className="dashboardStatCell">
                    <div className="statCellHead">
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0002</td>
                        <td>Marinelle Penote</td>
                        <td>0912345678</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Admins;