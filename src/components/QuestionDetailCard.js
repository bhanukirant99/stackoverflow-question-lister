import React from 'react'
import './QuestionDetailCard.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ProfilePic from './subcomponents/ProfilePic';

function QuestionDetailCard() {
    return (
        <div className='questionDetailCard'>
            <div className="questionDetailCard_top">
                <div className="questionDetailCard_profile">
                    <ProfilePic />
                    <div className="questionDetailCard_profileserName">
                        Username
                    </div>
                </div>
                <div className="questionDetailCard_topInfo">
                    <div className="questionDetailCard_topTitle">
                        Question Title
                    </div>
                </div>
            </div>
            <div className="questionDetailCard_questionDescription">
                        Question Desc
                    </div>
            <div className="questionDetailCard_middle">
                <div className="questionDetailCard_middleViews">
                    Views: 0
                </div>
                <div className="questionDetailCard_middleTime">
                    Asked at: 11-12-2020 22:23:22
                </div>
                <div className="questionDetailCard_middleUpvotes">
                    <ArrowUpwardIcon className='questionDetailCard_middleUpvotesArrow'/>
                    Upvotes
                </div>
            </div>
            <div className="questionDetailCard_bottom">
                <div className="questionDetailCard_bottomTag_1">
                    Tag 1
                </div>
                <div className="questionDetailCard_bottomTag_2">
                    Tag 2
                </div>
                <div className="questionDetailCard_bottomTag_3">
                    Tag 3
                </div>
            </div>
            <div className="questionDetailCard_baseBottom">
                <div className="questionDetailCard_baseBottom">
                    View in Stackoverflow
                </div>
                <div className="questionDetailCard_baseBottom">
                    <ArrowUpwardIcon className='questionDetailCard_baseBottom'/>
                </div>
            </div>
        </div>
    )
}

export default QuestionDetailCard
