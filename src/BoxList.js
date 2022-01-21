import { useState } from "react";
import {v4 as uuid} from 'uuid'
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (backgroundColor, width, height) => {
      setBoxes(boxes => [...boxes, {id: uuid(), backgroundColor, width, height}])
  }

  return (
    <>
      <div>
          <NewBoxForm addBox={addBox}/>
      </div>
      <div>
        {boxes.map((box) => (
          <Box key={box.id} color={box.backgroundColor} width={box.width} height={box.height}/>
        ))}
      </div>
    </>
  );
};

export default BoxList;
