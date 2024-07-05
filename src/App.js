import './App.css';
import CustomerForm from './components/CustomerForm';
import Hello from './components/Hello';
import { CustomerProvider } from './components/contexts/customer';

function App() {

  return (
    <div style={{ backgroundColor: "#f1f1f1", height: "100vh" }} className="App">

      <CustomerProvider>
        <Hello />
        <CustomerForm />
      </CustomerProvider>

      <h1>Contexto</h1>

    </div>
  );
}

export default App;
