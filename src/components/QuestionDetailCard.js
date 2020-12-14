import React from 'react'
import './QuestionDetailCard.css'
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import CallMadeTwoToneIcon from '@material-ui/icons/CallMadeTwoTone';
import ProfilePic from './subcomponents/ProfilePic';

function QuestionDetailCard({handleClose, profilePicture, reputation, userName, title, upvotes, tags, link, views, askedAt, answerCount}) {
    return (
        <div className="questionDetailCard">
              <div className='questionDetailsCardBlock'>
                <div className="questionDetailCard_top">
                    <div className="questionDetailCard_profile">
                        <ProfilePic profilePicture={profilePicture} reputation={reputation}/>
                        <div className="questionDetailCard_profileserName">
                            {userName}
                        </div>
                    </div>
                    <div className="questionDetailCard_topInfo">
                        <div className="questionDetailCard_topInfoClose" onClick={handleClose}>
                            X
                        </div>
                        <div className="questionDetailCard_topTitle">
                            Question Title: {title}
                        </div>
                    </div>
                </div>
                <div className="questionDetailCard_questionDescription">
                            Question Description: Question DescQuestion DescQuestion DescQuestion DescQuestion Desc
                            Question DescQuestion Desc
                        </div>
                <div className="questionDetailCard_middle">
                    <div className="questionDetailCard_middleViews">
                        Views: {views}
                        <div className="questionDetailCard_middleAns">
                            {answerCount === true
                            ? (
                                <span>Answered</span>
                            ) : (
                                <span>Unanswered</span>
                            )}
                        </div>                
                    </div>
                    <div className="questionDetailCard_middleTime">
                        Asked at: {askedAt.toString().split(0,1)} hrs
                    </div>
                    <div className="questionDetailCard_middleUpvotes">
                        <ArrowUpwardTwoToneIcon className='questionDetailCard_middleUpvotesArrow'/>
                        {upvotes}
                    </div>
                </div>
                <div className="questionDetailCard_bottomTags">
                        {tags?.map(tag => (
                            <div className="questionDetailCard_bottomTag">
                                {tag}
                            </div>
                        ))}
                    </div>
                <div className="questionDetailCard_baseBottom">
                    <a href={link} target="_blank" className="questionDetailCard_baseBottomView">
                        <span className='questionDetailCard_baseBottomCont'>
                            View in Stackoverflow
                        </span>
                        <CallMadeTwoToneIcon className='questionDetailCard_baseBottomArrow'/>
                    </a>
                </div>
            </div>  
        </div>
    )
}

export default QuestionDetailCard
