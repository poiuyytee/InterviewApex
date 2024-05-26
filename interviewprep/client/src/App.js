import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_NGROK_URL_HERE' with the ngrok URL
    const apiUrl = 'cr_2gzQP9bfLkQdqV7d9IW0YB2UQEQ/api/data';

    // Fetch data from the Django backend
    fetch('http://localhost:8000/api/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      {data && (
        <div>
          <h2>Data from Django Backend:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
