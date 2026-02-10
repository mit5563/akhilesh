import { useState } from "react";
import "./index.css";
import Image from "next/image";

export default function ValentineCard() {
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 120) - 60;
    const randomLeft = Math.floor(Math.random() * 120) - 60;

    setNoPosition({
      top: randomTop,
      left: randomLeft,
    });
  };

  if (accepted) {
    return (
      <div className="card">
        <h1>💖 Yay! 💖</h1>
        <p className="mt-3">You just made my Valentine’s Day ❤️</p>

        <div className="flex justify-center pt-4 pb-5">
          <Image
            src={"/images/happy.gif"}
            height={250}
            width={250}
            alt="test"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      {/* <div className="emoji">❤️</div> */}
      <h2>🐱 Jasmine will you be my valentine? ❤️</h2>

      <div className="flex justify-center mb-20">
        <Image src={"/images/love.gif"} height={250} width={250} alt="test" />
      </div>

      <div className="buttons">
        <button className="yes" onClick={() => setAccepted(true)}>
          Yes
        </button>

        <button
          className="no"
          onMouseEnter={moveNoButton}
          style={{
            transform: `translate(${noPosition.left}px, ${noPosition.top}px)`,
          }}
        >
          No
        </button>
      </div>
      <small className="hint">“No” seems a bit shy 😈</small>
    </div>
  );
}
