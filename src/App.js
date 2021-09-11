import { useState } from 'react';
import { InfoBox as InfoBox1 } from './components/InfoBoxFunctional.js';
import { InfoBox as InfoBox2 } from './components/InfoBoxClassBased.js';

function App() {
  let [showInfo1, setShowInfo1] = useState(false);
  let [showInfo2, setShowInfo2] = useState(false);

  return (
    <div className="container">
      <div className="info-box-wrapper">
        <button onClick={() => {setShowInfo1(true)}} style={{marginRight: '4px'}}>Show InfoBox Functional</button>
        <InfoBox1 show={showInfo1} onClickOutside={() => {setShowInfo1(false)}} message="Click outside to close this"/>
      </div>
      <div className="info-box-wrapper">
        <button onClick={() => {setShowInfo2(true)}}>Show InfoBox Class-based</button>
        <InfoBox2 show={showInfo2} onClickOutside={() => {setShowInfo2(false)}} message="Click outside to close this"/>
      </div>
    </div>
  );
}

export default App;
