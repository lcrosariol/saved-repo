import './VegList.css';
import VegListItem from '../VegListItem/VegListItem';

export default function VegList({ vegItems, setActivePlant }) {
  const items = vegItems.map(item =>
    <VegListItem
      key={item._id}
      vegItem={item}
      setActivePlant={setActivePlant}
    />
  );
  return (
    <main className="VegList">
        {items}
    </main>
  );
}