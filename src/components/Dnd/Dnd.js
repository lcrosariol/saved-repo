import React from 'react';
import Picture from './Picture';
import {useDrop} from 'react-dnd';
import { useState } from "react";
import './Dnd.css';

//the below pictures are the pictures BEFORE the item is dropped
const PictureList = [
  {
    id: 1,
    name: "soil/clear",
    url: "https://i.imgur.com/fQcUMZH.png",
  },

  {
    id: 2,
    name: "Radish",
    url: "https://i.imgur.com/IAQz85G.png",
  },
  {
    id: 3,
    name: "Brocolli",
    url: "https://i.imgur.com/IAQz85G.png",
  },
  {
    id: 4,
    name: "Cauliflower",
    url: "https://i.imgur.com/IAQz85G.png",
  },
  {
    id: 5,
    name: "Brussel Sprouts",
    url: "https://i.imgur.com/IAQz85G.png",
  },
  {
    id: 6,
    name: "Kale",
    url: "https://i.imgur.com/IAQz85G.png",
  },
  {
    id: 7,
    name: "Lettuce",
    url: "https://i.imgur.com/IAQz85G.png",
  },
  {
    id: 8,
    name: "Cabbage",
    url: "https://i.imgur.com/IAQz85G.png",
  },
  {
    id: 9,
    name: "Pumpkin",
    url: "https://i.imgur.com/t7eIsOz.png",
  },
  {
    id: 10,
    name: "Watermelon",
    url: "https://i.imgur.com/GNSxFRc.png",
  },
  {
    id: 11,
    name: "Potato",
    url: "https://i.imgur.com/FKEIuja.png",
  },
  {
    id: 12,
    name: "Tomato",
    url: "https://i.imgur.com/O0GvRdG.png",
  },
  {
    id: 13,
    name: "Eggplant",
    url: "https://i.imgur.com/2KJBfMa.png",
  },
  {
    id: 14,
    name: "Pepper",
    url: "https://i.imgur.com/2KJBfMa.png",
  },
  {
    id: 15,
    name: "Celery",
    url: "https://i.imgur.com/2KJBfMa.png",
  },
  {
    id: 16,
    name: "Carrot",
    url: "https://i.imgur.com/2KJBfMa.png",
  },
  {
    id: 17,
    name: "Corn",
    url: "https://i.imgur.com/6CdvHpY.png",
  },
  {
    id: 18,
    name: "Onion",
    url: "https://i.imgur.com/tw4hVjp.png",
  },
  {
    id: 19,
    name: "Beans",
    url: "https://i.imgur.com/tw4hVjp.png",
  },
];


function Dnd() {
    const [board, setBoard] = useState([]);
    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isDragging: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        // setBoard((board) => [...board, pictureList[0]]);  // to append as many picutes as you like to the board.  We only want one here.
        setBoard([pictureList[0]]);  // for one picture that replaces itself 
    };

    return (
        <>
            <div className="Pictures">
            {PictureList.map((picture) => {
                return (
                    <div className="PictureListContainer">
                        <Picture
                        url={picture.url}
                        id={picture.id}
                        name={picture.name}
                        />{picture.name}
                    </div>
                );
            })}
            </div>
        </>
        );
};

export default Dnd;


//Resource Used:
//https://www.youtube.com/watch?v=4bzJrEETW4w
//Source Code:
//https://github.com/machadop1407/react-drag-and-drop-tutorial/blob/main/src/components/DragDrop.js

