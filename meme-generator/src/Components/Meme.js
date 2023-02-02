import { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  console.log("meme", meme);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log("name", name);
    setMeme((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          onChange={(e) => handleChange(e)}
          name="topText"
          value={meme.topText}
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          onChange={(e) => handleChange(e)}
          name="bottomText"
          value={meme.bottomText}
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
