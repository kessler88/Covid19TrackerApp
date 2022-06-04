import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchGlobalData } from "./api";
import coronaImage from "./images/covid-19.png";

class App extends React.Component {
  //constructor is declared in the backend if we write like this:
  state = {
    data: {},
    globalData: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedGlobalData = await fetchGlobalData();
    this.setState({ globalData: fetchedGlobalData });
  }

  handleCountryChange = async (country) => {
    //fetch country data
    const fetchedData = await fetchData(country);
    //set the state
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { globalData,data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="Corona Logo" />
        <Cards globalData={globalData} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
