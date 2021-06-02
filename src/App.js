import styles from './App.module.css'
import React from 'react'
import Cards from '../src/components/Cards/Cards'
import Charts from '../src/components/Charts/Charts'
import CountryPicker from '../src/components/CountryPicker/CountryPicker'
import { getData } from './api/index'

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const FetchedData = await getData();
    this.setState({ data: FetchedData });
  }


  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards fetchData={data} />
        <CountryPicker />
        <Charts />
      </div>
    )
  }
}

export default App;
