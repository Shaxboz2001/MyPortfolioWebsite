const changeColor = "change_color";

export const changeColorActions = (color="red") => {
    return {
        type: changeColor,
        payload: color,
    }
}