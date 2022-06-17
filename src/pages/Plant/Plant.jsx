import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import './Plant.css';
import { useHistory } from 'react-router-dom';
import VegList from '../../components/VegList/VegList';
import CategoryList from '../../components/CategoryList/CategoryList';
import * as plantsAPI from '../../utilities/plants-api';
import PlantInfo from '../../components/PlantInfo/PlantInfo';

export default function Plant({ user, setUser }) {
  const [vegItems, setVegItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const history = useHistory();
  const [activePlant, setActivePlant] = useState('');

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      setVegItems(items);
      setActiveCat(items[0].category.name);
    }
    getItems();

    async function getCart(){
      const cart = await plantsAPI.getCart();
      console.log('cart get is ', cart)
      setCart(cart);
    }
    getCart();
  }, []); 

  return (
    <main className="Plant">
      <aside>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      </aside>
      <VegList
        vegItems={vegItems.filter(item => item.category.name === activeCat)}
        activePlant={activePlant}
        setActivePlant={setActivePlant}

      />
      <PlantInfo
      activePlant={activePlant}
      />
      
    </main>
  );
}

//Plant info sourced from: 
//https://www.seedsavers.org/