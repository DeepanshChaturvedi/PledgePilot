import BookmarkIcon from '@mui/icons-material/Bookmark';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserInTheSession } from '../../Utils/SessionStorage';

const FollowButton = (campaign: any) => {
  // state for following
  const [isFollowing, setIsFollowing] = useState<boolean>()
  // const [user, setUser] = useState<any>()
  const navigate = useNavigate();

  // get session user
  const user = getUserInTheSession()
  const campaignId = campaign.campaign._id
  const [follow, setFollow] = useState("FOLLOW")

  const handleFollowClick = async () => {
    if(follow === "FOLLOW"){
      setFollow("FOLLOWING")
    }else{
      setFollow("FOLLOW")
    }
    document.querySelector(".follow-btn")?.classList.toggle("clicked");
    const currUser = await fetch('http://localhost:3001/users/id/' + user._id)
    const currUserData = await currUser.json()
    currUserData.projectsFollowed.push(campaignId)
    const userResponse = await fetch('http://localhost:3001/users/id/' + currUserData._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ projectsFollowed: currUserData.projectsFollowed })
        })
    }

  return (
    <div className='follow-button'>
      <Button className='follow-btn' variant="outlined" onClick={handleFollowClick}>
        {follow} <BookmarkIcon fontSize='medium' color='primary' />
      </Button>
    </div>
  )
}

export default FollowButton
