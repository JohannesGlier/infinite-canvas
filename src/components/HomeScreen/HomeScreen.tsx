import "./HomeScreen.css";
import HomeScreenButton from "./HomeScreenButton";

const HomeScreen = ({ onSelectCanvas }: { onSelectCanvas: (index: number) => void }) => {
  const buttons = ["Demo 1", "Demo 2", "Demo 3", "Demo 4", "Demo 5", "Demo 6", "Demo 7", "Demo 8"];
  
  return (
    <div className="home-container">
      <h1>Wähle eine Demo</h1>
      <div className="button-grid">
        {buttons.map((btn, index) => (
          <HomeScreenButton key={index} label={btn} onClick={() => onSelectCanvas(index)} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
