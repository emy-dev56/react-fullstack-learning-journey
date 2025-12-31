import FoodList from './components/FoodList';
import Nav from './components/Nav';
import Search from './components/Search';
import { useState } from 'react';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import './App.css';

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
