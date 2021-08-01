import { useState, useEffect } from 'react';
import fetchGraphQL from './fetchGraphQL';
import './App.css';


function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const query = `query RepoNameQuery {
      repository(name: "todo-app", owner:"sydneytiger"){
        name
      }
    }`

    fetchGraphQL(query)
      .then(response => {
        if(!isMounted) return;
        setName(response.data.repository.name);
      })
      .catch(error => {
        console.error(error);
      });


    return () => {
      isMounted = false;
    }
  }, [ fetchGraphQL ]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{name ? `Respository: ${name}` : 'Loading' }</p>
      </header>
    </div>
  );

}

export default App;
