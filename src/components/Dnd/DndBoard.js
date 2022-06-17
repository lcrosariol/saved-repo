import React from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import { useState } from "react";
import "./Dnd.css";

//The below pictures are used AFTER the item is dropped
const PictureList = [
  {
    id: 1,
    url: "https://i.imgur.com/no7S3Bs.png",
  },
  {
    id: 2,
    url: "https://i.imgur.com/IhZqyOL.png",
  },
  {
    id: 3,
    url: "https://i.imgur.com/Ciw6h1d.png",
  },
  {
    id: 4,
    url: "https://i.imgur.com/9snQEOh.png",
  },
  {
    id: 5,
    url: "https://i.imgur.com/CmNp1rV.png",
  },
  {
    id: 6,
    url: "https://i.imgur.com/py47d6k.png",
  },
  {
    id: 7,
    url: "https://i.imgur.com/tTLlmLA.png",
  },
  {
    id: 8,
    url: "https://i.imgur.com/OsmE3Zc.png",
  },
  {
    id: 9,
    url: "https://i.imgur.com/63fU1RA.png",
  },
  {
    id: 10,
    url: "https://i.imgur.com/izgyv6P.png",
  },
  {
    id: 11,
    url: "https://i.imgur.com/FKEIuja.png",
  },
  {
    id: 12,
    url: "https://i.imgur.com/72Mau6z.png",
  },
  {
    id: 13,
    url: "https://i.imgur.com/JFsuHhZ.png",
  },
  {
    id: 14,
    url: "https://i.imgur.com/ug82JyT.png",
  },
  {
    id: 15,
    url: "https://i.imgur.com/8Ktd4Af.png",
  },
  {
    id: 16,
    url: "https://i.imgur.com/oV4rV71.png",
  },
  {
    id: 17,
    url: "https://i.imgur.com/LVxxMXL.png",
  },
  {
    id: 18,
    url: "https://i.imgur.com/R0J8waz.png",
  },
  {
    id: 19,
    url: "https://i.imgur.com/M3xqip4.png",
  },
];

function Dnd() {
    const [board, setBoard] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
        isDragging: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        // setBoard((board) => [...board, pictureList[0]]);
        setBoard([pictureList[0]]);  // for one picture that replaces itself maybe make a grid of boards...????
    };
    return (
        <>
        <div className="Board" ref={drop}>
            {board.map((picture) => {
            return <Picture url={picture.url} id={picture.id} />;
            })}
        </div>
        </>
    );
}

export default Dnd;
