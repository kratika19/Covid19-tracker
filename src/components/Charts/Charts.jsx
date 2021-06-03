import React, { useState, useEffect } from 'react'
import { getDailyData } from '../../api/index'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Charts.module.css'

const Charts = () => {
    const [dailyData, setdailyData] = useState({})

    useEffect(() => {
        const fetchDailyData = async () => {
            const Ddata = await getDailyData();
            setdailyData(Ddata);
        };

        console.log(dailyData)
        fetchDailyData();
    },[]);

    const lineChart = (
        dailyData.length ? (<Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }],
            }}
        />) : null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts