import React, { useState } from "react";
import { ColorContainer, ColorType } from "./colors.style";
import {useDispatch, useSelector} from "react-redux"
function Colors() {
  const [colorType, setColorType] = useState("red");
  const colors = ["red", "blue", "yellow", "green", "blueviolet"];
  const colorsAll = useSelector(state => state);
  const dispatch = useDispatch();
   dispatch({
     type: "change_color",
     payload: colorType,
   });
  function getColor(){
     dispatch({
       type: "change_color",
       payload: colorType,
     });
     
  }
  return (
      <ColorContainer>
        {colors.map((color, index) => (
          <ColorType
            key={index}
            backColor={color}
            opacity={color === colorType ? "1" : "0.3"}
            onClick={ () => {
              setColorType(colors[index]);
              getColor();
            } }
            activeColor={colors[index]}
          />
        ))}
      </ColorContainer>
  );
}

export default Colors;
