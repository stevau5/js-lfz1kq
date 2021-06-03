import axios from 'axios';

const search = async (search = '', page = 1) => {
  const response = await axios.get('https://swapi.dev/api/people/', {
    params: { search, page }
  });
  return response.data;
};

export default search;
