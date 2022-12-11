import { useState } from "react";

import Title from "./components/Title";
import Button from "./components/Button";

function App() {
  const [isOpened, setOpened] = useState<boolean>(false);

  const handleClick = () => setOpened((prevValue) => !prevValue);

  return (
    <div>
      <Button onClick={handleClick}>
        {isOpened ? "Hide title" : "Open title"}
      </Button>
      {isOpened && <Title name="Products" type="bold" />}
    </div>
  );
}

export default App;
