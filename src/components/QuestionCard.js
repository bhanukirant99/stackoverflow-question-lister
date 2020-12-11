import React from 'react'
import './QuestionCard.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ProfilePic from './subcomponents/ProfilePic';

function QuestionCard() {
    return (
        <div className='questionCard'>
            <div className="questionCard_top">
                <ProfilePic />
                <div className="questionCard_topInfo">
                    <div className="questionCard_topTitle">
                        Question Title
                    </div>
                    <div className="questionCard_topQuestion">
                        This is the Question
                    </div>
                </div>
            </div>
            <div className="questionCard_middle">
                <div className="questionCard_middleUserName">
                    Username
                </div>
                <div className="questionCard_middleUpvotes">
                    <ArrowUpwardIcon className='questionCard_middleUpvotesArrow'/>
                    Upvotes
                </div>
            </div>
            <div className="questionCard_bottom">
                <div className="questionCard_bottomTag_1">
                    Tag 1
                </div>
                <div className="questionCard_bottomTag_2">
                    Tag 2
                </div>
                <div className="questionCard_bottomTag_3">
                    Tag 3
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
