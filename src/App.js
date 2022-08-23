// import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:variable/:number" 
        element={<>
        <Form/>
        <Display/>
        </>}></Route>
        <Route path="/" element={<Form/>}></Route>
      </Routes>

    </div>
  );
}
//routes, gives data to params, api uses params
// "/" element={}, need <> tags if using more than 1 element
export default App;
