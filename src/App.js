import logo from './logo.svg';
import './App.css';
import ThirdComponent, { FirstComponent, SecondComponent, FourthComponent, FifthComponent, SixthComponent } from './Component/Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello</h1>  
      <h2>Christophe</h2> 
      <FirstComponent></FirstComponent> 
      <FirstComponent /> 
      <SecondComponent />
      <ThirdComponent test = "test" monprops = "component statefull"></ThirdComponent>
      <FourthComponent message ={"ceci est un props"}></FourthComponent>
      <FifthComponent message ={"ceci est un mon cinquième composant"}></FifthComponent>
      <SixthComponent>
        <div>Et enfin mon sixième composant</div>
      </SixthComponent>
      </header>
    </div>
  );
}

export default App;
