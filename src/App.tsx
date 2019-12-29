import React, { useState } from 'react';
import './App.css';
import { StyledSlider } from './styled';

const App: React.FC = () => {
  const [state, setState] = useState({ x: 3, y: 3 });

  return (
    <div className="App">
      <StyledSlider
        axis="xy"
        x={state.x}
        y={state.y}
        xmax={10}
        ymax={0}
        ymin={10}
        xstep={0.1}
        ystep={0.1}
        onChange={setState}
        styles={{
          active: {
            height: (10 - state.y) * 10 + '%',
          },
        }}
      />
      <strong>Assesment:</strong>
      <br />
      X: {Math.round(state.x * 10) / 10}
      <br />
      Y: {Math.round(state.y * 10) / 10}
    </div>
  );
};

export default App;
