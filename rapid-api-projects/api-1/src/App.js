import { useState, useEffect } from 'react';

import './App.css';

function App() {

  const [endPoint, setEndPoint] = useState('');

  const [container, setContainer] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6ac7a440c9msh22fc5522e89f5cep15a085jsn9d05a22338dd',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  const fetchData = (endPoint) => {
    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${endPoint}`, options)
      .then(response => response.json())
      .then(data => setContainer(data.d))
      .catch(err => console.error(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(endPoint)
  }

  useEffect(() => {
    fetchData('batman')
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={endPoint}
          onChange={(e) => { setEndPoint(e.target.value) }}
        />
        <button type='submit'>submit</button>
      </form>
      <div className='element'>
        {container.map((item) => {
            return (
              <div key={item.id} className='item-container'>
                <p>{item.l}</p>
                <img src={item.i.imageUrl} alt="" />
              </div>
              
            )
          })}
      </div>

    </div>
  );
}

export default App;
