import logo from './logo.svg';
import './App.css';
import MyComponent from './component/MyComponent';
import MyClassComponent from './component/MyClassComponent';
import BudgetComponent from './component/BudgetComponent';

function App() {
  return (
    <div className="App">
    {/* <h1>Hello from React</h1>
     <MyComponent/>
     //<MyClassComponent country="Germany"></MyClassComponent>*/}
     <BudgetComponent></BudgetComponent>
    </div>
  );
}

export default App;
