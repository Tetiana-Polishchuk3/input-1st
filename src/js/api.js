import axios from 'axios';

const baseURL = 'https://portfolio-js.b.goit.study/api';

const fetchData = async endpoint => {
  try {
    const { data } = await axios.get(`${baseURL}/${endpoint}`);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchData;
