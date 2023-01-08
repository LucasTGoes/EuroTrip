import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {

  let countDownDate = new Date("Jun 5, 2023 00:00:00").getTime();

  let x = setInterval(function () {


    let now = new Date().getTime();


    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    //@ts-ignore
    document.getElementById("demo").innerHTML = days + "dias " + hours + "horas "
      + minutes + "minutos " + seconds + "segundos ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      //@ts-ignore
      document.getElementById("demo").innerHTML = "EXPIRED";

    }
  }, 1000);

  return (
    <div className='page'>

      <div className='header'>
        <span > Que essa seja a melhor viajem da sua vida, mas nunca seja a última </span>
      </div>

      <div className='parent' >
        <img src="paris2.jpg" alt="Paris" />
        <img src="Lisbon.png" alt="Lisbon" />
        <img src="london.jpeg" alt="London" />
        <img src="arch.jpg" alt="Paris" />
        <img src="belem.jpg" alt="Lisbon" />
        <img src="eye.jpg" alt="London" />

        <div className='cronback'>
          <p id="demo"></p>
        </div>
      </div>

      <div className='footer'>

        <span> Porque o céu não é o seu limite! </span>

        <img src="franca.png" alt="França" />
        <img src="portugal.png" alt="Portugal" />
        <img src="inglaterra.png" alt="Inglaterra" />
      </div>
    </div>

  )
}

export default App;
