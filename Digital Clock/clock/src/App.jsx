import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const Timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(Timer);
  }, []);

  const formatTime = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  const formatDate = (date) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }
  return (
    <>
      <div className='clock'>
        <h1>Digital Clock</h1>
      </div>
      <div className='time'>
        {formatTime(formatHour(currentTime.getHours()))}:{formatTime(currentTime.getMinutes())}:{formatTime(currentTime.getSeconds())}
        {currentTime.getHours() >= 12 ? " PM " : " AM "}
      </div>

      <div className='date'>
        {formatDate(currentTime)}

      </div>
    </>
  )
}

export default App
