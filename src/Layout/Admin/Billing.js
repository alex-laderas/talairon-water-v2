function Billing() {
    return (
        <div className="billContainer">
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>PUROK</th>
                        <th>PENDING AMOUNT</th>
                        <th>DUE DATE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Juan Dela Cruz</td>
                        <td>1</td>
                        <td>0.00 PHP</td>
                        <td>01/01/2021</td>
                    </tr>
                </tbody>
            </table>

            <div className="billSearchContainer">
                <span>Filters</span>
                <input type="name" />
                <input type="text" />
                <button>search</button>
            </div>
        </div>
    )
}

export default Billing;