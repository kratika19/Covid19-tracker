import styles from './App.module.css'
import React from 'react'
import Cards from '../src/components/Cards/Cards'
import Charts from '../src/components/Charts/Charts'
import CountryPicker from '../src/components/CountryPicker/CountryPicker'
import { getData } from './api/index'

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const FetchedData = await getData();
    this.setState({ data: FetchedData });
  }

  handleCountryChange = async (country) => {
    const FetchedData = await getData(country);
    this.setState({ data: FetchedData, country: country });
    console.log(FetchedData)
  }


  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    )
  }
}

export default App;
