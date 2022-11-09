import { useEffect, useState } from 'react'
import map from '../../talairon-map.png'
import t1 from '../../talairon1.png'
import t2 from '../../talairon2.jpg'
import t3 from '../../talairon3.jpg'
import t4 from '../../talairon4.jpg'

function Dashboard() {

    const [consumers, setConsumers] = useState(0);
    const [test, setTest] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('users')
            const newData = await response.text()
            setTest(newData)
            console.log(newData)
          };
        
          fetchData();
    },[])

    return (
        <div className="userDashboardContainer">
            <div className="userDashboardLeft">
                <p> {test}</p>
                <img src={ map } alt="talairon" />
                <h2>Population of Talairon as of 2022 census: 4,566.</h2>
                <h3>Water consumers: { consumers } </h3>
            </div>
            <div className="userDashboardRight">
                <div className='userDashboardRightHead'>
                    <img src={ t1 } alt="" />
                    <img src={ t2 } alt="" />
                    <img src={ t3 } alt="" />
                    <img src={ t4 } alt="" />
                </div>
                <div className="userDashboardRightBody">
                   <article>
                        <h3>Elected Officers of Talairon for the term of 2018 - 2020</h3>
                        <p>Punong Barangay : Carlito Quilantang Selim</p>
                        <p>Sangguniang Barangay Member : Logylita Bugas Jasminez</p>
                        <p>Sangguniang Barangay Member : Fe Clavite Buaquiña</p>
                        <p>Sangguniang Barangay Member : Renairio Clavite Olivar Sr.</p>
                        <p>Sangguniang Barangay Member : Evangeline Opaon Tagaylo</p>
                        <p>Sangguniang Barangay Member : Eduardo Omisol Peralta</p>
                        <p>Sangguniang Barangay Member : Andrea Belle Brillo Villaruel</p>
                        <p>SK Chairperson : Jevan Rumalay Bolando</p>
                        <p>Barangay Secretary : Melona Avenido Gumisong</p>


                   </article>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;