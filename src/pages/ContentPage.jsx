import VideoPlayer from '../layouts/VideoPlayer'
import React from 'react'
import { Grid } from 'semantic-ui-react'

export default function ContentPage({ setUserPoints,questionData, setQuestionData, playedVideos, setPlayedVideos,level,setFalseCount,setTrueCount,trueCount,falseCount,userID }) {
  console.log(userID);
  return (
    <div>

      <VideoPlayer setUserPoints={setUserPoints} userID={userID} trueCount={trueCount} falseCount={falseCount} setFalseCount={setFalseCount} setTrueCount={setTrueCount}  level={level} questionData={questionData} setQuestionData={setQuestionData} playedVideos={playedVideos} setPlayedVideos={setPlayedVideos} />
      
      {/* <SetFollowing /> */}
    </div>
  )
}
