

const colors = ["red", "blue", "yellow", "green", "pink"];

export default function ChangeColor(state = colors, action) {

  switch (action.type) {
    case "change_color":
      state = action.payload;
       return state;
      
    default:
      return action.payload;
  }
}
