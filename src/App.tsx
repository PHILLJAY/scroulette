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
  for (let i = 0; i < 5; i++) {
    randomString += generateRandomChar();
  }
  console.log("Generated URL:", "https://on.soundcloud.com/" + randomString);
  return "https://on.soundcloud.com/" + randomString;
};

const App: React.FC<AppProps> = () => {
  const [soundCloudLink, setSoundCloudLink] = useState<AppState>({
    soundCloudLink: null,
  });

  const handleClick = () => {
    setSoundCloudLink({ soundCloudLink: generateSoundcloudUrl() });
  };

  console.log(typeof soundCloudLink);
  return (
    <div className="container text-center mt-5">
      <h1>Random SoundCloud Player</h1>
      <Button variant="primary" onClick={handleClick}>
        Discover a Sound
      </Button>
      {soundCloudLink.soundCloudLink && ( // Only render if soundCloudLink.soundCloudLink exists
        <div className="mt-3">
          <a
            href={soundCloudLink.soundCloudLink}
            target="_blank"
            rel="noreferrer"
          >
            Open in SoundCloud
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
