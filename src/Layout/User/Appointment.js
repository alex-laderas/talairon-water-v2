import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Appointment() {

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(null)
    const [pastRead, setPastRead] = useState('2553678');
    const [currRead, setCurrRead] = useState('2576815');
    const [bill, setBill] = useState('231.37');

    const [viewDate, setViewDate] = useState(null);
    const [viewTime, setViewTime] = useState(null);

    useEffect(() => {
        console.log(date);
        console.log(time);
    },[])

    const handleDate = (e) => {
        e.preventDefault()
        setViewDate(date.toDateString())
        setViewTime(time)
    }

    return (
        <div className="appointmentContainer">
            <form className="dateSelect" onSubmit={handleDate}>
                <input type="date" name="" id="" onChange={e => setDate(new Date(e.target.value))} required/>
                <input type="time" name="" id="" onChange={e => setTime(e.target.value)} required/>
                <button type="submit">Set</button>
            </form>
            <div className="dateView">
                <p>Appointment set on {viewDate || "(Select Date)"} at { viewTime || "(Select Time)" }</p>
            </div>
            <div className="billView">
                <table>
                    <thead>
                        <tr>
                            <th>Past Reading</th>
                            <th>Current Reading</th>
                            <th>Bill</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pastRead}</td>
                            <td>{currRead}</td>
                            <td>₱{bill}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Appointment;