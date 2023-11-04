import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>

      {/* this is inline dynamic styling */}
      {/* <div className="form-control">
        <label style={{color: !isValid ?  'red' : 'black' }}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}  style={{borderColor: !isValid ? 'red' : 'black',  background: !isValid ? 'salmon' : 'transparent'}} />
      </div>
      <Button type="submit">Add Goal</Button> */}


      {/* this is class based dynamic styling (check in css file also ) */}
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}  className={!isValid ? 'invalid-input' : ''} />
      </div>

      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
