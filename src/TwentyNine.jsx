import { useReducer } from "react";

function TwentyNine() {
  const imageReducer = (state, action) => {
    switch (action.type) {
      case "PREV_IMAGE":
        return {
          currentImageIndex: state.currentImageIndex - 1,
        };

      case "NEXT_IMAGE":
        return {
          currentImageIndex: state.currentImageIndex + 1,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(imageReducer, { currentImageIndex: 0 });

  const images = [
    "https://www.xtrafondos.com/wallpapers/tanjiro-kamado-de-kimetsu-no-yaiba-3728.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/images6/Anime-Wallpaper-4K-Desktop.jpg",
    "https://images7.alphacoders.com/611/611138.png",
    "https://wallpapers.com/images/hd/windows-11-4k-anime-boys-24jz62x8er48510a.jpg",
  ];

  const currentImageIndex = state.currentImageIndex;
  const currentImage = images[currentImageIndex];

  return (
    <div>
      <h1>IMAGE GALLERY</h1>
      <img src={currentImage} alt="img" />

      <button onClick={() => dispatch({ type: "PREV_IMAGE" })}>« PREV</button>

      <button onClick={() => dispatch({ type: "NEXT_IMAGE" })}>NEXT »</button>
    </div>
  );
}

export default TwentyNine;
