import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const HandleClick = () => {
    setIsEditing(true);
  };
  let PlayerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    PlayerName = <input type="text" required />;
  }
  return (
    <li>
      <span className="player">
        {PlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={HandleClick}>Edit</button>
    </li>
  );
}
