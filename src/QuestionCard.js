import React from 'react'
import './QuestionCard.css'
import { Avatar } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function QuestionCard(reputation) {
    return (
        <div className='questionCard'>
            <div className="questionCard_top">
                {0 < reputation && reputation <= 50 ? (
                                <div>
                                    <Avatar className='questionCard_profileRepuLow' src='https://avatars.dicebear.com/4.5/api/human/1.svg'/>
                                </div>
                ) : 50 < reputation && reputation <= 100 ? (
                            <div>
                                <Avatar className='questionCard_profileRepuMedium' src='https://avatars.dicebear.com/4.5/api/human/1.svg'/>
                            </div>
                ) : reputation > 100 ? (
                        <div>
                            <Avatar className='questionCard_profileRepuHigh' src='https://avatars.dicebear.com/4.5/api/human/1.svg'/>
                        </div>
                ) : (
                    <div>
                        <Avatar className='questionCard_profileRepuNor' src='https://avatars.dicebear.com/4.5/api/human/1.svg'/>
                    </div>
                )}
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
