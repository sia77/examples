import { useState } from 'react';
import { places } from './data';
import { getImageUrl } from './utils.js';
import { useContext } from 'react';
import { LevelContext } from './Context'
import './style.css';

export default function ReplaceProp() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
 
  return (
    <>
      <LevelContext.Provider value= {imageSize}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List />
      </LevelContext.Provider>      
    </>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      
        <Place
          place={place}          
        />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }:any) {
  return (
    <>
      <PlaceImage
        place={place}        
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }:any) {
  const imageSize = useContext(LevelContext)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
