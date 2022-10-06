import { useState } from "react";

function Admins() {

    const [paid, setPaid] = useState(0);
    const [penalties, setPenalties] = useState(0);
    const [overdue, setOverdue] = useState(0);

    return (
        <div className="adminContainer">
            

            <div className="dashboardLeft">
                <h2>Dashboard</h2>
                <div className="dashboardStatCell">
                    <h3>Customers Paid Today</h3>
                    <span>{ paid }</span>
                </div>
                <div className="dashboardStatCell">
                    <h3>Customers with Penalties</h3>
                    <span>{ penalties }</span>
                </div>
                <div className="dashboardStatCell">
                    <h3>Customers with Overdue Balance</h3>
                    <span>{ overdue }</span>
                </div>
            </div>
            <div className="dashboardRight">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User Code</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Leah Glenn</td>
                            <td>94D434</td>
                            <td>leahglenn@gmail.com</td>
                            <td>Paid</td>
                        </tr>
                        <tr>
                            <td>Leah Glenn</td>
                            <td>94D434</td>
                            <td>leahglenn@gmail.com</td>
                            <td>Paid</td>
                        </tr>
                        <tr>
                            <td>Leah Glenn</td>
                            <td>94D434</td>
                            <td>leahglenn@gmail.com</td>
                            <td>Paid</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admins;