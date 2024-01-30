import { useEffect, useState } from "react";
import QuestionService from "../services/questionService";
import Options from '../layouts/Options';
import UserService from '../services/userService';

function VideoPlayer({ questionData, setQuestionData, playedVideos, setPlayedVideos, level, setTrueCount, setFalseCount, trueCount, falseCount, userID,setUserPoints }) {
    const [isOptionClicked, setIsOptionClicked] = useState(false);
    const userService = new UserService();  // Create an instance of userService

    const fetchRandomQuestion = async () => {
        try {
            const response = await new QuestionService().getQuestionByLevel(level, userID);
            const questions = response.data.data;

            if (questions && questions.length > 0) {
                const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

                setPlayedVideos(prevPlayedVideos => [...prevPlayedVideos, randomQuestion.questionUrl]);

                setQuestionData(randomQuestion);

                const video = document.getElementById("questionVideo");
                video.src = `./videos/${level}/${randomQuestion.questionUrl}.mp4`;

                video.addEventListener("loadedmetadata", () => {
                    video.play();
                });

                setIsOptionClicked(false);
            } else {
                console.error("No questions found in the response.");
            }
        } catch (error) {
            console.error("Error fetching question:", error);
        }
    };

    const handleNextButtonClick = async () => {
        if (isOptionClicked && questionData) {
            try {
                const response = await userService.addSolvedQuestion(userID, questionData?.questionId);  // Use userService here

                if (response.success) {
                    // Handle success, e.g., update UI or trigger the next question fetch
                    fetchRandomQuestion();
                } else {
                    // Handle failure, log an error, or display a message to the user
                    console.error('Error adding solved question:', response.message);
                }
            } catch (error) {
                // Handle errors that occurred during the request
                console.error('Error in handleNextButtonClick:', error);
            }
        }
    };

    const handleOptionClick = (clickedOption) => {
        setIsOptionClicked(true);
    };

    useEffect(() => {
        fetchRandomQuestion();
    }, [level]);

    return (
        <div className='h-[600px] grid content-center justify-items-center mt-[300px]'>
            <div className="w-[1000px] h-[800px] bg-gray-200 rounded-[20px] flex flex-col items-center justify-center mt-11">
                <div className=" pt-10">
                    <video id="questionVideo" width="750" height="500" controls>
                        {/* Video source will be dynamically set */}
                    </video>
                </div>
                <div className="w-2/6 flex items-center content-center mt-5">
                    <div className="mr-5 flex flex-row ">
                        <p className="font-extrabold text-xl mr-1"> Movie: </p><p className="font-extralight text-xl italic"> {questionData?.movieName}</p>
                    </div>
                    <div className="ml-auto">
                        <button
                            className={`font-bold w-[100px] h-[50px] bg-gray-300 hover:bg-gray-400 flex items-center justify-center rounded-[20px] my-2 ${!isOptionClicked ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleNextButtonClick}
                            disabled={!isOptionClicked}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <Options
                    setUserPoints={setUserPoints}
                    userID={userID}
                    trueCount={trueCount}
                    falseCount={falseCount}
                    setFalseCount={setFalseCount}
                    setTrueCount={setTrueCount}
                    questionID={questionData?.questionId}
                    subtitle={questionData?.subtitle}
                    answer={questionData?.answer}
                    questionLevel={questionData?.questionLevel}
                    wrongAnswer={questionData?.wrongAnswer}
                    onOptionClick={handleOptionClick}
                />
            </div>
        </div>
    );
}

export default VideoPlayer;
