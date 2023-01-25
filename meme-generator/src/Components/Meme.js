import { useState } from "react";
import memes from "../memesData";

function Meme() {
  const [memeImage, setMemeImage] = useState("");
  console.log(memeImage);
  function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.data.memes.length);
    const meme = memes.data.memes[randomIndex];
    return setMemeImage(meme.url);
  }

  return (
    <div className="meme">
      <div className="text-form">
        <input type="text" placeholder="Shut up"></input>
        <input type="text" placeholder="and take my money"></input>
      </div>
      <button onClick={getRandomMeme} className="button-generate">
        Get a new meme image
      </button>
    </div>
  );
}

export default Meme;
