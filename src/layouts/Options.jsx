// Options.jsx
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import _shuffle from 'lodash/shuffle';
import UserService from '../services/userService';

export default function Options({
  answer,
  wrongAnswer,
  onOptionClick,
  setTrueCount,
  setFalseCount,
  trueCount,
  falseCount,
  questionID,
  userID,
  questionLevel,
  setUserPoints
}) {
  const initialOptions = [answer, wrongAnswer];
  const [shuffledOptions, setShuffledOptions] = useState(_shuffle(initialOptions));
  const correctOption = answer;
  const [isAnswerClickable, setIsAnswerClickable] = useState(true);
  const [isWrongAnswerClickable, setIsWrongAnswerClickable] = useState(true);
  const [answerBackgroundColor, setAnswerBackgroundColor] = useState('');
  const [wrongAnswerBackgroundColor, setWrongAnswerBackgroundColor] = useState('');

  const qs = new UserService();

  const handleButtonClick = async (clickedOption) => {
    if (isAnswerClickable || isWrongAnswerClickable) {
      setIsAnswerClickable(false);
      setIsWrongAnswerClickable(false);

      if (clickedOption === correctOption) {
        await qs.incrementUserPoints(userID, questionLevel);
        const response = await qs.getUserByID(userID);
        const upgradedPoints = response.data?.userPoints;
        console.log("upgradedPoints: " + upgradedPoints);
        setUserPoints(upgradedPoints);
        setAnswerBackgroundColor('bg-lime-500 hover:bg-lime-500');
        setTrueCount(trueCount + 1);
        toast.success('True!');
      } else {
        setWrongAnswerBackgroundColor('bg-red-600 hover:bg-red-600');
        setFalseCount(falseCount + 1);
        toast.error('False!');
      }

      onOptionClick(clickedOption);
    }
  };

  useEffect(() => {
    setShuffledOptions(_shuffle(initialOptions));
    setIsAnswerClickable(true);
    setIsWrongAnswerClickable(true);
    setAnswerBackgroundColor('');
    setWrongAnswerBackgroundColor('');
  }, [answer, wrongAnswer]);

  return (
    <div>
      {shuffledOptions.map((option, index) => (
        <button
          key={index}
          className={`font-bold w-[600px] h-[60px] bg-gray-300 hover:bg-gray-400 flex items-center justify-center rounded-[20px] my-2 ${option === answer ? answerBackgroundColor : ''
            } ${option === wrongAnswer ? wrongAnswerBackgroundColor : ''}`}
          onClick={() => handleButtonClick(option)}
          disabled={!(isAnswerClickable || isWrongAnswerClickable)}
        >
          {option}
        </button>
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
