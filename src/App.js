import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>

      <Navbar title="TEXT CONVERTER" />
      <div className="container my-3">

      <TextForm heading="Enter The Text"/>
      </div>

    </>
  );
}

export default App;
