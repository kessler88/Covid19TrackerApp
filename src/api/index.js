import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const globalUrl = "https://disease.sh/v3/covid-19/all";

export const fetchGlobalData = async () => {
  try {
    const {data: {cases,recovered,deaths }} = await axios.get(globalUrl);
    return {cases, recovered,deaths } ;
  } catch (error) {
    return error;
  }
}

//function that fetch data from api that we need, export it to call function.
export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    //deconstruct the response for the parts we need.
    const {
      data: { confirmed, deaths, lastUpdate, recovered },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

// Instead of Global, it fetches the daily data for the US
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.covidtracking.com/v1/us/daily.json"
    );
    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};
