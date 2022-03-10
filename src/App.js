import Header from './components/Header';
import Container from './Container';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container />
        <img src="https://www.pexels.com/search/dog%20and%20cat/" />
        <Footer />
      </main>

     
    </div>
  );
}

export default App;
