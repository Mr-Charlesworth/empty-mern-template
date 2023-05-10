import { useContext, useEffect, useState } from 'react';

import AppContext from "./context";

const App = () => {

  // Load the client from the context, client is defined in AxiosClient
  const { client } = useContext(AppContext);

  const [message, setMessage] = useState(undefined)

  useEffect(() => {
    client.apiCall({
      method: 'get',
      url: '/hi'
    }).then(({ data }) => setMessage(data.message) )
  })

  return (
    <div>
      <p>Read the README.md</p>
      {message ? (
        <p>{message}</p>
      ) : (
        <p>Loading message from the server</p>
      )}
    </div>
  )
}

export default App;