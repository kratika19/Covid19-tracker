import React, { useState, useEffect } from 'react'
import { getDailyData } from '../../api/index'
import { Line, Bar } from 'react-chartjs-2'
import styles from './Charts.module.css'

const Charts = ({ data, country }) => {
    const [dailyData, setdailyData] = useState({})

    useEffect(() => {
        const fetchDailyData = async () => {
            const Ddata = await getDailyData();
            setdailyData(Ddata);
        };

        console.log(dailyData)
        fetchDailyData();
    }, [dailyData]);

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

    const barChart = (
        data.confirmed ? (
            <Bar
                options={{
                    legend: { display: false },
                    title: { display: true, text:'Apple' },
                }}
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                    },],
                }}
            />
        ) : null
    )

    return (
        <div className={styles.container}>
            {
                country ? barChart : lineChart}

        </div>
    )
}

export default Charts