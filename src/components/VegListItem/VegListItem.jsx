import './VegListItem.css';

export default function VegListItem({ vegItem, setActivePlant}) {
  const handleClick = (e)=> {
    e.preventDefault() 
    console.log("button clicked")
    setActivePlant(vegItem)
  }
    
  return (
    <div className="VegListItem">
      <img alt="plant" className="photo flex-ctr-ctr" src={vegItem.photo} />
      <div className="name">{vegItem.name}</div>
      <button className="setActivePlant" onClick={handleClick} >Info</button>
    </div>
  );
}