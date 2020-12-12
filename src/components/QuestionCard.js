import React from 'react'
import './QuestionCard.css'
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import ProfilePic from './subcomponents/ProfilePic';

function QuestionCard() {
    return (
        <div className='questionCard'>
            <div className="questionCard_top">
                <div className="questionCard_topProfile">
                    <ProfilePic />
                    <div className="questionCard_middleUserName">
                        Username
                    </div>
                </div>
                <div className="questionCard_topInfo">
                    <div className="questionCard_topTitle">
                        Question Title Question Title Question Title Question Title Question Title
                    </div>
                    <div className="questionCard_topQuestion">
                        This is the Question
                    </div>
                </div>
            </div>
            <div className="questionCard_bottom">
                <div className="questionCard_bottomUpvotes">
                    <ArrowUpwardTwoToneIcon className='questionCard_bottomUpvotesArrow'/>
                    Upvotes
                </div>
                <div className="questionCard_bottomTags">
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
        </div>
    )
}

export default QuestionCard
