import React from "react";
import { INSTA_HANDLE } from "./shared/constants";
import profilePicture from "./images/profile_picture.jpg";
import instagramIcon from "./images/instagram_icon.svg";
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href={INSTA_HANDLE}>
          <img src={instagramIcon} alt="Instagram icon." />
        </a>
      </header>
      <section>
        <h1>
          Adventure with Ellie &<br />
          <em>
            <a href={INSTA_HANDLE}>
              <span className="at_symbol">@</span>olivertheaussieboy
            </a>
          </em>
        </h1>
        {/* <img src={profilePicture} alt="Oliver's Instagram profile picture." /> */}
      </section>
    </main>
  );
}

export default App;
