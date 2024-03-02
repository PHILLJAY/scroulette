import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

interface AppProps {}

interface AppState {
  soundCloudLink: string | null;
}

const generateRandomChar = (): string => {
  const allChars =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return allChars.charAt(Math.floor(Math.random() * allChars.length));
};

const generateSoundcloudUrl = (): string => {
  let randomString = "";
  const length = Math.random() > 0.5 ? 5 : 4; // Ternary operator
  for (let i = 0; i < length; i++) {
    randomString += generateRandomChar();
  }
  return "https://on.soundcloud.com/" + randomString;
};

function openInNewTab(url: string) {
  window.open(url, "_blank");
}

const App: React.FC<AppProps> = () => {
  const [soundCloudLink, setSoundCloudLink] = useState<AppState>({
    soundCloudLink: null,
  });

  const handleClick = () => {
    setSoundCloudLink({ soundCloudLink: generateSoundcloudUrl() });
    if (soundCloudLink.soundCloudLink) {
      openInNewTab(soundCloudLink.soundCloudLink);
    } else {
      console.log("Generating Link...");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Random SoundCloud Player</h1>
      <Button variant="primary" onClick={handleClick}>
        Discover a Sound
      </Button>
    </div>
  );
};

export default App;
