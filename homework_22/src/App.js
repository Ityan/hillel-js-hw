import { useState } from "react";

import Title from "./components/Title";
import Button from "./components/Button";

function App() {
  const [isOpened, setOpened] = useState(false);

  const handleClick = () => setOpened((prevValue) => !prevValue);

  return (
    <div>
      <Button name={isOpened ? "Hide title" : "Open title"} onClick={handleClick} />
      {isOpened && <Title name="Products" type="bold" />}
    </div>
  );
}

export default App;
