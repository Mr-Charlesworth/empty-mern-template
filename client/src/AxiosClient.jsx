import axios from 'axios';

import App from './App'
import AppContext from "./context";

const AxiosClient = () => {

  const baseUrl = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '';

  const apiCall = ({ method, url, data }) => {
    return axios({
      method,
      url: `${baseUrl}${url}`,
      data,
    }).catch((error) => {
      console.log(error)
    })
  }

  const client = { apiCall }

  return (
    <AppContext.Provider
      value={{
        client,
      }}
    >
      <App/>
    </AppContext.Provider>
  )
}

export default AxiosClient;
