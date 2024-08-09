import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getScooters, updateScooter } from '../api/scooterData';

// TO DO: THERE WILL NEED TO BE A createRide FUNCTION THAT CREATES A RIDE. IT WILL NEED TO HAVE THE USER ID, the scooterId, the duration of the ride, and the cost. This will all be saved when the stop ride button is clicked

const initialState = {
  id: '',
  name: '',
};

function ScooterPickerForm({ obj, setSelectedScooter }) {
  const [formInput, setFormInput] = useState(initialState);
  const [scooters, setScooters] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getScooters(user).then(setScooters);

    if (obj) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    const selectedScooter = scooters.find((scooter) => scooter.id === value);
    if (selectedScooter) {
      setSelectedScooter(selectedScooter);
    } else {
      console.warn(`scooter with id ${value} not found`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj) {
      updateScooter(formInput).then(() => router.push(`/scooters/${obj}`));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <FloatingLabel controlId="floatingSelect" label="Scooter">
          <Form.Select
            aria-label="Scooter"
            name="id"
            onChange={handleChange}
            className="mb-3"
            // key={formInput.id}
            value={formInput.id}
            required
          >
            <option value="">Select a Scooter</option>
            {
    scooters.map((scooter) => (
      <option
        key={scooter.id}
        value={scooter.id}
      >
        {scooter.name}
      </option>
    ))
  }
          </Form.Select>
        </FloatingLabel>
      </div>
    </Form>
  );
}

ScooterPickerForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  setSelectedScooter: PropTypes.func.isRequired,
};

ScooterPickerForm.defaultProps = {
  obj: initialState,
};

export default ScooterPickerForm;
