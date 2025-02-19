import { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { ReactInfiniteCanvas, ReactInfiniteCanvasHandle } from "./App";
import { COMPONENT_POSITIONS } from "./helpers/constants";
import CanvasToolbar from "./components/CanvasToolbar/CanvasToolbar";
import CanvasMenu from "./components/CanvasMenu/CanvasMenu";
import CanvasContent from "./components/CanvasContent/CanvasContent";
import HomeScreen from "./components/HomeScreen/HomeScreen";

const InfiniteCanvas = ({ onBack }: { onBack: () => void }) => {
  const canvasRef = useRef<ReactInfiniteCanvasHandle>();
  return (
    <div style={{ width: "100vw", height: "100vh" }}>   
      <ReactInfiniteCanvas
        ref={canvasRef}
        onCanvasMount={(mountFunc) => mountFunc.fitContentToView({ scale: 1 })}
        customComponents={[
          {
            component: (
              <div>  
                <CanvasToolbar />  
                <CanvasMenu onBack={onBack} /> 
              </div>
            ),
            position: COMPONENT_POSITIONS.TOP_LEFT,
            offset: { x: 5, y: 0 },
          },
        ]}
      >
        <CanvasContent />
      </ReactInfiniteCanvas>
    </div>
  );
};

const App = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  return showCanvas ? <InfiniteCanvas onBack={() => setShowCanvas(false)} /> : <HomeScreen onSelectCanvas={() => setShowCanvas(true)} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
