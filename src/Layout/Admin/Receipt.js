import brgyLogo from '../../brgyLogo.png'
import cityLogo from '../../cityLogo.jpg'

function Receipt() {
    return (
        <div className="receiptMain">
            <div className="receiptHeading">
                <img src={cityLogo} width="160px" height="160px" />
                <div className="receiptHeadingInfo">
                    <h1>REPUBLIC OF THE PHILIPPINES</h1>
                    <h1> PROVINCE OF MISAMIS OCCIDENTAL</h1>
                    <h1>CITY OF OROQUIETA</h1>
                    <h1>BARANGAY TALAIRON WATER BILLING SYSTEM</h1>
                </div>
                <img src={brgyLogo} width="160px" height="160px" />
            </div>
            <div className="receiptBody">
                <div className="receiptTitle">
                    <h2>Statement of Account</h2>
                </div>
                <div className="receiptInfo">
                    <span>Name:</span>
                    <span>Address:</span>
                    <div className="receiptSpacing"/>
                    <span>Payment Date:</span>
                    <span>Billing Date:</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Previous Reading</th>
                            <th>Present Reading</th>
                            <th>Cubic</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>10</td>
                            <td>10</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Receipt;