import React from "react";
import { useInstagram } from "./hooks/useInstagram";

function App() {
  const { profilePictureUrl, bio } = useInstagram();
  console.log({ profilePictureUrl });

  return (
    <main>
      <header>
        <h1>Welcome to olivertheaussieboy.com</h1>
      </header>
      <section>
        <img
          src={profilePictureUrl}
          alt="Oliver's Instagram profile picture."
        />
        <p>{bio}</p>
      </section>
    </main>
  );
}

export default App;
