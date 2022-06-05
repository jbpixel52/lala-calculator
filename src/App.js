import {  Grommet } from 'grommet';
import './App.css';
import CalculatorGUI from './components/CalculatorGUI/CalculatorGUI';
import Header from './Header/Header';
function App() {
  return( <div className="App">
  <Grommet plain >
   <header className="App-header">
     {Header()}
   </header>
   {CalculatorGUI()}
    
 </Grommet>
 </div>)


}

export default App;
