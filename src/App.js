import './App.css';
import Layout from './components/Layout';

function App() {
  return <Layout />
}

//To-do:
// - Display cards in CardGrid.js
//    - Cards will be an array of objects
//    - Card objects will have a tier (1,2 or 3) that will determine their round
//    - Round 1 will display 10 tier 1 cards, round 2 displays tier 2 cards etc.
//    - Need a comp. to import all card data and export the array info to CardGrid
//    - The utility comp will be called Cards.js
//    - Once the cards are in CardGrid.js, display each card as <li/> by using the array.forEach() method in conjuction with conditional statements to control which tiers of cards are displayed (depending on round #)
// - Randomize displaying of cards after each card clicked
// - Update score values with each card clicked
// 

export default App;
