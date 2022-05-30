import { useEffect } from "react";
import MyContext from "./MyContext";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import "../../src/App.css";

const MyProvider = ({ children }) => {
<<<<<<< HEAD
  const [name, setName] = useState("");
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
  const [highScoreResult, setHighScoreResult] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [categories, setCategories] = useState(["arts", "general", "film", "food", "geography", "history", "music", "science", "society", "sport"])
  const [clicked, setClicked] = useState(false)
  const [username, setUsername] = useState()
  const [mode, setMode] = useState("NoTime");
  const [streak, setStreak] = useState(0)
  const [pie, setPie] = useState(false)
  const [diamonds, setDiamonds] = useState(0)
  const [diamondGeo, setDiamondGeo] = useState({ easy: false, medium: false, hard: false })
  const [diamondArts, setDiamondArts] = useState({ easy: false, medium: false, hard: false })
  const [diamondGen, setDiamondGen] = useState({ easy: false, medium: false, hard: false })
  const [diamondHist, setDiamondHist] = useState({ easy: false, medium: false, hard: false })
  const [diamondSport, setDiamondSport] = useState({ easy: false, medium: false, hard: false })
  const [diamondMus, setDiamondMus] = useState({ easy: false, medium: false, hard: false })
  const [diamondFood, setDiamondFood] = useState({ easy: false, medium: false, hard: false })
  const [diamondSoc, setDiamondSoc] = useState({ easy: false, medium: false, hard: false })
  const [diamondSci, setDiamondSci] = useState({ easy: false, medium: false, hard: false })
  const [diamondFilm, setDiamondFilm] = useState({ easy: false, medium: false, hard: false })
  const [losePoints, setLosePoints] = useState(false);
  const [message, setMessage] = useState();
  const [messageB, setMessageB] = useState();
  const [messageC, setMessageC] = useState();
  const [messageD, setMessageD] = useState();
  const [messageStreak, setMessageStreak] = useState();  
  const [color, setColor] = useState();
  const [score, setScore] = useState(0);
  const [streakScore, setStreakScore] = useState(0);
  const [storedScore, setStoredScore] = useState(0);
  const [showStreak, setShowStreak] = useState("")
  const [gameMode, setGameMode] = useState();
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState(false);
  const [number, setNumber] = useState(18);
  const [gameDiff, setGameDiff] = useState()
  const [difficulty, setDifficulty] = useState(["easy", "medium", "hard"]);
  const [diff, setDiff] = useState("easy");
  const [cat, setCat] = useState();
=======
  const [message, setMessage] = useState();
  const [clicked,setClicked]= useState(false)
  const [streak,setStreak]= useState(0)
  const [messageB, setMessageB] = useState();
  const [color, setColor] = useState();
  const [score, setScore] = useState(0);
  const [storedScore, setStoredScore] = useState();
  const [gameMode, setGameMode] = useState();
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState(false);
  const [number, setNumber] = useState(33); 
  const [gameDiff, setGameDiff] = useState()
  const [difficulty, setDifficulty] = useState(["easy", "medium", "hard"]);
  const [diff, setDiff] = useState("easy");
  const [cat, setCat] = useState("");
>>>>>>> 781f5371551eaa35b3103ca8c2d2d78f84632446
  const [randomAnswers, setRandomAnswers] = useState([]);
  const [hints, setHints] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [questionArray, setQuestionArray] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [selected, setSelected] = useState();
  const [rightAnswer, setRightAnswer] = useState([]);
  const [answers, setAnswers] = useState([]);
<<<<<<< HEAD
  const [indexCounter, setIndexCounter] = useState(0);
  const [indexCounter2, setIndexCounter2] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [firstCat, setFirstCat] = useState();
  const [img, setImg] = useState();
  const [timeUp, setTimeUp] = useState(false);
  const [next, setNext] = useState(false);
  const [timerTrigger, setTimerTrigger] = useState();
  const [diamondPoints, setDiamondPoints] = useState(0);
=======
	const [indexCounter, setIndexCounter] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [answerPopup, setAnswerPopup] = useState(false);


  const [name, setName] = useState("");
  const [isProfileSaved, setIsProfileSaved] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [loginMsg, setLoginMsg] = useState("");
>>>>>>> 781f5371551eaa35b3103ca8c2d2d78f84632446

  const [highScoreResult, setHighScoreResult] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const url = `https://the-trivia-api.com/api/questions?limit=${number}&&categories=${cat}&&difficulty=${diff}`;
  const initialState = { results: null, loading: true, eror: null };
  const { results, loading, eror } = useFetch(url, initialState);
<<<<<<< HEAD

=======
>>>>>>> 781f5371551eaa35b3103ca8c2d2d78f84632446

  useEffect(() => {
    if (results !== null ) {
      setQuestionArray(results.map((item) => item.question));
      setWrongAnswers(results.map((item) => item.incorrectAnswers));
      setRightAnswer(results.map((item) => item.correctAnswer));
      
    }
  }, [results]);

  useEffect(()=> {

    console.log("GAMEOVER IS :",gameOver);
  },[indexCounter])

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>'eror'</p>;


  return (
    <MyContext.Provider
      value={{
<<<<<<< HEAD
        diamondPoints,
        setDiamondPoints,
        losePoints, 
        setLosePoints,
        timerTrigger, 
        setTimerTrigger,
        showStreak,
        setShowStreak,
        next, 
        setNext,
        mode,
        setMode,
        timeUp,
        setTimeUp,
=======
>>>>>>> 781f5371551eaa35b3103ca8c2d2d78f84632446
        highScoreResult,
        setHighScoreResult,
        highScore,
        setHighScore,
<<<<<<< HEAD
        streakScore,
        setStreakScore,
        categories,
        setCategories,
        gameDiff,
        setGameDiff,
        diamondSoc, setDiamondSoc,
        diamondSci, setDiamondSci,
        diamondFilm,
        setDiamondFilm,
        diamondFood,
        setDiamondFood,
        diamondMus,
        setDiamondMus,
        diamondSport,
        setDiamondSport,
        diamondHist,
        setDiamondHist,
        diamondGen,
        setDiamondGen,
        diamondArts,
        setDiamondArts,
        diamondGeo,
        setDiamondGeo,
        diamonds,
        setDiamonds,
        pie,
        setPie,
        clicked,
        setClicked,
        username,
        setUsername,
        streak,
        setStreak,
        img,
        setImg,
        selected,
        setSelected,
        storedScore,
        setStoredScore,
        firstCat,
        setFirstCat,
        answers,
=======
gameDiff, 
setGameDiff,    
answers,
clicked,
setClicked,
streak,
setStreak,
selected, 
setSelected,
storedScore,
setStoredScore,
>>>>>>> 781f5371551eaa35b3103ca8c2d2d78f84632446
        setAnswers,
        error,
        setError,
        questionArray,
        setQuestionArray,
        indexCounter,
        setIndexCounter,
        indexCounter2,
        setIndexCounter2,
        wrongAnswers,
        setWrongAnswers,
        seconds,
        setSeconds,
        randomAnswers,
        setRandomAnswers,
        results,
        loading,
        eror,
        cat,
        gameOver,
        setGameOver,
        setCat,
        diff,
        setDiff,
        message,
        setMessage,
<<<<<<< HEAD
        messageB,
        setMessageB,
        messageC,
        setMessageC,
        messageD,
        setMessageD,
        messageStreak, 
        setMessageStreak,
=======
        messageB, 
        setMessageB,
>>>>>>> 781f5371551eaa35b3103ca8c2d2d78f84632446
        color,
        setColor,
        rightAnswer,
        setRightAnswer,
        score,
        setScore,
        difficulty,
        setDifficulty,
        gameMode,
        setGameMode,
        number,
        setNumber,
        hints,
        setHints,
        email,
        setEmail,
        pass,
        setPass,
<<<<<<< HEAD
=======

>>>>>>> 781f5371551eaa35b3103ca8c2d2d78f84632446
        birthDate,
        setBirthDate,
        isProfileSaved,
        setIsProfileSaved,
        loginMsg,
        setLoginMsg,
        name,
        setName,
<<<<<<< HEAD
        
=======
    	answerPopup,
				setAnswerPopup
>>>>>>> 781f5371551eaa35b3103ca8c2d2d78f84632446
      }}
    >
      {children}
    </MyContext.Provider>
  );
<<<<<<< HEAD
=======



>>>>>>> 781f5371551eaa35b3103ca8c2d2d78f84632446
};

export default MyProvider;
