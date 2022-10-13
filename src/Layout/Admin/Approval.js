import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Approval() {
    return (
        <div className="approveContainer">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Purok</th>
                        <th>confirm?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0001</td>
                        <td>Alexis</td>
                        <td>09134567789</td>
                        <td>alexlad@work.com</td>
                        <td>5</td>
                        <td>
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            </button>
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Approval;