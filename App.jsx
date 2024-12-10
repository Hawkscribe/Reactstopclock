// 1. State Management        done

// const { useEffect } = require("react")

//     Use useState to track:
//         time (in seconds)
//         isRunning (timer status)
//         editState (for tracking the field being edited and its value)

// 2. Countdown Logic   done

//     Implement a useEffect that updates the time every second when the timer is active.

// 3. Editable Time

//     Allow users to click on hours, minutes, or seconds to edit that specific part of the time.

// 4. Input Handling

//     Ensure inputs are limited to two digits (hours, minutes, seconds).

// 5. Controls

//     Provide buttons for:
//         Starting/pausing the timer.
//         Resetting the timer.

// import React, { useState, useEffect, Component } from 'react';
// import './App.css'; // Ensure this line is included to import your CSS file

// function CountdownTimer() {
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);
//   const [totalSeconds, setTotalSeconds] = useState(0);
  // const [remainingSeconds, setRemainingSeconds] = useState(0);

  // const calculateTotalSeconds = () => hours * 3600 + minutes * 60 + seconds;

  // const startTimer = () => {
  //   if (hours === 0 && minutes === 0 && seconds === 0) {
  //     alert("Please set a valid time!");
  //     return;
    // }
    // if (!isRunning) {
    //   const total = calculateTotalSeconds();
    //   setTotalSeconds(total);
    //   setRemainingSeconds(total);
    //   setIsRunning(true);
    // } else {
    //   setIsRunning(true);
    // }
  // };

//   const pauseTimer = () => {
//     setIsRunning(false);
//   };

//   const resetTimer = () => {
//     setHours(0);
//     setMinutes(0);
//     setSeconds(0);
//     setIsRunning(false);
//     setTotalSeconds(0);
//     setRemainingSeconds(0);
//   };

  // useEffect(() => {
  //   let interval = null;

  //   if (isRunning) {
  //     interval = setInterval(() => {
  //       setRemainingSeconds((prevSeconds) => {
  //         if (prevSeconds > 0) {
  //           return prevSeconds - 1;
  //         } else {
  //           clearInterval(interval);
  //           setIsRunning(false);
  //           alert("Time's up!");
  //           return 0;
  //         }
  //       });
  //     }, 1000);
  //   } else {
  //     clearInterval(interval);
  //   }

  //   return () => clearInterval(interval);
  // }, [isRunning]);

  // const handleHourChange = (e) => {
  //   const value = Math.max(0, Math.min(99, Number(e.target.value)));
  //   setHours(value);
  // };

  // const handleMinuteChange = (e) => {
  //   const value = Math.max(0, Math.min(59, Number(e.target.value)));
  //   setMinutes(value);
  // };

  // const handleSecondChange = (e) => {
  //   const value = Math.max(0, Math.min(59, Number(e.target.value)));
  //   setSeconds(value);
  // };

  // const formatTime = (time) => String(time).padStart(2, '0');

//   const percentage = totalSeconds > 0 ? (remainingSeconds / totalSeconds) * 100 : 0;

//   return (
//     <div className="countdown-timer">
//       <h2>Countdown Timer</h2>
      // <div className="progress-ring">
      //   <svg className="progress-ring__svg" width="200" height="200">
      //     <circle className="progress-ring__circle" 
      //             stroke="blue" 
      //             strokeWidth="4" 
      //             fill="transparent" 
      //             r="90" 
      //             cx="100" 
      //             cy="100"
      //             style={{ strokeDasharray: '565.48', strokeDashoffset: `${565.48 * (1 - percentage / 100)}` }} />
      //   </svg>
      //   <div className="time-display">
      //     <span>{formatTime(Math.floor(remainingSeconds / 3600))}:</span>
      //     <span>{formatTime(Math.floor((remainingSeconds % 3600) / 60))}:</span>
      //     <span>{formatTime(remainingSeconds % 60)}</span>
      //   </div>
      // </div>
      // <div className="time-inputs">
      //   <input 
      //     type="number" 
      //     value={hours} 
      //     onChange={handleHourChange}
      //     placeholder="Hours"
      //     min="0"
      //     max="99"
      //   />
      //   <input 
      //     type="number" 
      //     value={minutes} 
      //     onChange={handleMinuteChange}
      //     placeholder="Minutes"
      //     min="0"
      //     max="59"
      //   />
      //   <input 
      //     type="number" 
      //     value={seconds} 
      //     onChange={handleSecondChange}
      //     placeholder="Seconds"
      //     min="0"
      //     max="59"
      //   />
      // </div>
//       <div className="timer-controls">
//         {!isRunning ? (
//           <button onClick={startTimer}>Start</button>
//         ) : (
//           <button onClick={pauseTimer}>Pause</button>
//         )}
//         <button onClick={resetTimer}>Reset</button>
//       </div>
//     </div>
//   );
// }

// export default CountdownTimer;
// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// export default function App() {
//   return <Componente />;
// }

// function Componente() {
//   const [sec, setSec] = useState(0);
//   const [min, setMin] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [remainingSeconds, setRemainingSeconds] = useState(0);
//   const [totalSeconds, setTotalSeconds] = useState(0);

//   const calculateTotalSeconds = () => hours * 3600 + min * 60 + sec;

//   const start = () => {
//     if (hours === 0 && min === 0 && sec === 0) {
//       alert('This is not a proper input. Please provide a valid time.');
//       return;
//     }

//     if (!isRunning && remainingSeconds === 0) {
//       const total = calculateTotalSeconds();
//       setRemainingSeconds(total);
//       setTotalSeconds(total);
//     }
//     setIsRunning(true);
//   };

//   const pause = () => {
//     setIsRunning(false);
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setSec(0);
//     setHours(0);
//     setMin(0);
//     setRemainingSeconds(0);
//     setTotalSeconds(0);
//   };

//   useEffect(() => {
//     let interval = null;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setRemainingSeconds((prevSeconds) => {
//           if (prevSeconds > 0) {
//             return prevSeconds - 1;
//           } else {
//             clearInterval(interval);
//             setIsRunning(false);
//             alert("Time's up!");
//             return 0;
//           }
//         });
//       }, 1000);
//     }

//     // Cleanup function to stop the interval
//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [isRunning]);

//   const handleHourChange = (e) => {
//     const value = Math.max(0, Math.min(99, Number(e.target.value)));
//     setHours(value);
//   };

//   const handleMinuteChange = (e) => {
//     const value = Math.max(0, Math.min(59, Number(e.target.value)));
//     setMin(value);
//   };

//   const handleSecondChange = (e) => {
//     const value = Math.max(0, Math.min(59, Number(e.target.value)));
//     setSec(value);
//   };

//   const formatTime = (time) => String(time).padStart(2, '0');

//   const percentage = totalSeconds > 0 ? (remainingSeconds / totalSeconds) * 100 : 0;

//   return (
//     <div className="container text-center mt-5">
//       <h1>Timer Controls</h1>
//       <div className="progress-container">
        // <svg className="progress-ring" width="200" height="200">
        //   <circle
        //     className="progress-ring__circle"
        //     stroke="blue"
        //     strokeWidth="4"
        //     fill="transparent"
        //     r="90"
        //     cx="100"
        //     cy="100"
        //     style={{
        //       strokeDasharray: '565.48',
        //       strokeDashoffset: `${565.48 * (1 - percentage / 100)}`,
        //     }}
        //   />
        // </svg>
//         <div className="time-display">
//           <span>{formatTime(Math.floor(remainingSeconds / 3600))}:</span>
//           <span>{formatTime(Math.floor((remainingSeconds % 3600) / 60))}:</span>
//           <span>{formatTime(remainingSeconds % 60)}</span>
//         </div>
//       </div>
      // <div className="time-inputs mt-3">
      //   <input
      //     className="form-control d-inline-block mx-2"
      //     type="number"
      //     value={hours}
      //     onChange={handleHourChange}
      //     placeholder="Hours"
      //     min="0"
      //     max="99"
      //     style={{ width: '80px' }}
      //   />
      //   <input
      //     className="form-control d-inline-block mx-2"
      //     type="number"
      //     value={min}
      //     onChange={handleMinuteChange}
      //     placeholder="Minutes"
      //     min="0"
      //     max="59"
      //     style={{ width: '80px' }}
      //   />
      //   <input
      //     className="form-control d-inline-block mx-2"
      //     type="number"
      //     value={sec}
      //     onChange={handleSecondChange}
      //     placeholder="Seconds"
      //     min="0"
      //     max="59"
      //     style={{ width: '80px' }}
      //   />
      // </div>
//       <div className="mt-3">
        // {isRunning ? (
        //   <Button variant="danger" className="mx-2" onClick={pause}>
        //     Pause
        //   </Button>
        // ) : (
        //   <Button variant="success" className="mx-2" onClick={start}>
        //     Start
        //   </Button>
        // )}
        // <Button variant="dark" className="mx-2" onClick={reset}>
        //   Reset
        // </Button>
//       </div>
//     </div>
//   );
// }






//project code that is made by Codehawk

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className="container my-5">
      <Componenteo />
    </div>
  );
}

function Componenteo() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [iswork, setIswork] = useState(false);
  const [remainsec, setRemainSeconds] = useState(0);
  const [totalsec, setTotalSeconds] = useState(0);

  const calculateTotalTime = () => hour * 3600 + min * 60 + sec;

  const start = () => {
    let total = calculateTotalTime();
    if (!iswork && remainsec === 0) {
      setRemainSeconds(total);
      setTotalSeconds(total);
      setIswork(true);
    } else {
      setIswork(true);
    }
  };

  const pause = () => {
    setIswork(false);
  };

  const reset = () => {
    setHour(0);
    setMin(0);
    setSec(0);
    setIswork(false);
    setTotalSeconds(0);
    setRemainSeconds(0);
  };

  useEffect(() => {
    let interval = null;
    if (iswork) {
      interval = setInterval(() => {
        setRemainSeconds((prevSecond) => {
          if (prevSecond > 0) {
            return prevSecond - 1;
          } else {
            clearInterval(interval);
            setIswork(false);
            alert("Time's up!");
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [iswork]);

  const handleHourChange = (e) => {
    const value = Math.max(0, Math.min(99, Number(e.target.value)));
    setHour(value);
  };

  const handleMinuteChange = (e) => {
    const value = Math.max(0, Math.min(59, Number(e.target.value)));
    setMin(value);
  };

  const handleSecondChange = (e) => {
    const value = Math.max(0, Math.min(59, Number(e.target.value)));
    setSec(value);
  };

  const formatTime = (time) => String(time).padStart(2, '0');

  const percentage = totalsec > 0 ? (remainsec / totalsec) * 100 : 0;

  return (
    <div className="text-center">
      <h1>Stopwatch Clock</h1>
      <div className="clock-container my-4">
        <svg className="progress-ring" width="200" height="200">
          <circle
            className="progress-ring__circle"
            stroke="blue"
            strokeWidth="4"
            fill="transparent"
            r="90"
            cx="100"
            cy="100"
            style={{
              strokeDasharray: '565.48',
              strokeDashoffset: `${565.48 * (1 - percentage / 100)}`,
            }}
          />
        </svg>
        <div className="time-display-inner">
          {formatTime(Math.floor(remainsec / 3600))}:
          {formatTime(Math.floor((remainsec % 3600) / 60))}:
          {formatTime(Math.floor(remainsec % 60))}
        </div>
      </div>
      <div className="time-inputs mb-4">
        <input
          className="form-control d-inline-block mx-2"
          type="number"
          value={hour}
          onChange={handleHourChange}
          placeholder="Hours"
          min="0"
          max="99"
          style={{ width: '80px' }}
        />
        <input
          className="form-control d-inline-block mx-2"
          type="number"
          value={min}
          onChange={handleMinuteChange}
          placeholder="Minutes"
          min="0"
          max="59"
          style={{ width: '80px' }}
        />
        <input
          className="form-control d-inline-block mx-2"
          type="number"
          value={sec}
          onChange={handleSecondChange}
          placeholder="Seconds"
          min="0"
          max="59"
          style={{ width: '80px' }}
        />
      </div>
      <div>
        {iswork ? (
          <Button variant="danger" className="mx-2" onClick={pause}>
            Pause
          </Button>
        ) : (
          <Button variant="success" className="mx-2" onClick={start}>
            Start
          </Button>
        )}
        <Button variant="dark" className="mx-2" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
