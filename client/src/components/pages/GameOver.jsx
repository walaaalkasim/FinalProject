import React from 'react'
import x from '../../../src/assets/images/x.png'
import pie3 from '../../assets/images/pie3.png'
import MyContext from "../.././context/MyContext"
import { useContext, useEffect } from 'react';
import "../../../src/styling/questions.scss";
import Popup from '../Popup/Popup';


const GameOver = () => {

    const context = useContext(MyContext);
    const {
       
        indexCounter,
        messagePie,
        setMessagePie,
        messageDiamonds,
        setMessageDiamonds,
        diamondPoints,
        pie,
        gameOver,
        score,
        setScore,

    } = context;


    useEffect(() => {
        setTimeout(() => {
            setMessageDiamonds(`U have won ${diamondPoints} DiamondPointS`)
        }, 5000);

        messageDiamonds && setScore( score + diamondPoints)

    }, [diamondPoints, messageDiamonds, setMessageDiamonds, setScore])
    
  
    useEffect(() => {
        pie === true && gameOver === true &&
            setMessagePie("Congrats' U CompleteD the Pie +199 PointS")
        messagePie && score < 1969 &&
            setScore(score + 199)
        console.log(score);
        console.log(indexCounter);

    }, [gameOver, pie, messagePie, setScore])

    return (
        <div className="gameOver--section">
          <div >
                <p className="finalScore"> Your Final Score : {score}</p>
                {messagePie ? <img className="popUp2" src={pie3} alt="Game_Over" /> : <img src={x} alt="Game_Over" />}
            </div>

            {<p className="cat">
                {messageDiamonds}</p>}

            {pie === true && <p className="cat">
                {messagePie}</p>}

        </div>
    )
}

export default GameOver;
