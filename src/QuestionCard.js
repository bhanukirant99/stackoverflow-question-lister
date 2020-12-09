import React from 'react'
import './QuestionCard.css'
import logo from './logo.svg';
import { Avatar } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function QuestionCard() {
    return (
        <div className='questionCard'>
            <div className="questionCard_top">
                <Avatar className='questionCard_profilePicture' src='https://avatars.dicebear.com/4.5/api/human/1.svg'/>
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
                    <ArrowUpwardIcon />
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
