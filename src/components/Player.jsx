import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const HandleClick = () => {
    setIsEditing((editing) => !editing);
  };
  const HandleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  let PlayerName = <span className="player-name">{name}</span>;
  // let buttonCaption = "Edit";

  if (isEditing) {
    PlayerName = (
      <input type="text" required value={name} onChange={HandleNameChange} />
    );
    // let buttonCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {PlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={HandleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
