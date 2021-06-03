import axios from 'axios';
import Axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const getData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await Axios.get(url);
        var modifiedData = { confirmed, recovered, deaths, lastUpdate }
        return modifiedData;
    } catch (error) {

    }
}

export const getDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;
    } catch (error) {

    }
}