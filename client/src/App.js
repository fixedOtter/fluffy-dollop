//
// made by fixedOtter on 23.8.2022
//

import './App.css';
import './picnic.min.css';
import { useEffect, useState } from 'react';
import Header from './components/header';
import Body from './components/body';

function App() {
  let [title, setTitle] = useState('amazing site titl'); // first variable is the variable i'm goint to use, the second is a function for setting the variable through the virtual DOM
  let [isLogged, setIsLogged] = useState(false);
  let [theme, setTheme] = useState('dark');

  // useEffect(() => {
  //   console.log('use effect');
  // // here we can ping our server and test if the user is logged in on page load
  // }, []);


  return (
    <div>
      <Header title={title} login={isLogged} theme={theme} />
      <Body login={isLogged} theme={theme} />
    </div>



    
    
  );
}

export default App;
