function Manage() {
    return (
        <div className="manageContainer">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Purok</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0001</td>
                        <td>Marinelle</td>
                        <td>5</td>
                        <td>mpenote@mgail.com</td>
                        <td>0913465816355</td>
                        <td>
                            <button>view more</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="manageCard">
                <div className="manageCardHead">
                    <span>Past Records</span>
                    <h3>Marinelle Penote</h3>
                </div>
                <div className="manageCardBody">
                    
                    <table>
                        <tbody>
                            <tr>
                                <td>October</td>
                                <td>1200245</td>
                                <td>$412</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="manageCardFoot">
                    <button className="delete">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Manage;