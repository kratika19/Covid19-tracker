import Axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const getData = async () => {
    try {
        var { data: { confirmed, recovered, deaths, lastUpdate } } = await Axios.get(url);
        var modifiedData = { confirmed, recovered, deaths, lastUpdate }
        return modifiedData;
    } catch (error) {

    }
}