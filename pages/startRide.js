import React, { useState } from 'react';
import ScooterPickerForm from '../components/ScooterPickerForm';
import Timer from '../components/Timer';

function StartTimer() {
  const [selectedScooter, setSelectedScooter] = useState(null);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        <h1>start ride page</h1>
        <div>
          <ScooterPickerForm setSelectedScooter={setSelectedScooter} />
        </div>
        <div>
          <Timer setSelectedScooter={selectedScooter} />
        </div>
      </div>
    </div>
  );
}
export default StartTimer;
