import React from 'react'
import './QuestionDetailCard.css'
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import CallMadeTwoToneIcon from '@material-ui/icons/CallMadeTwoTone';
import ProfilePic from './subcomponents/ProfilePic';

function QuestionDetailCard({handleClose}) {
    return (
        <div className="questionDetailCard">
              <div className='questionDetailsCardBlock'>
                <div className="questionDetailCard_top">
                    <div className="questionDetailCard_profile">
                        <ProfilePic />
                        <div className="questionDetailCard_profileserName">
                            Username
                        </div>
                    </div>
                    <div className="questionDetailCard_topInfo">
                        <div className="questionDetailCard_topInfoClose" onClick={handleClose}>
                            X
                        </div>
                        <div className="questionDetailCard_topTitle">
                            Question Title: Title title Title title Title title Title title Title title
                            Title titleTitle titleTitle titleTitle titleTitle title
                        </div>
                    </div>
                </div>
                <div className="questionDetailCard_questionDescription">
                            Question DescQuestion DescQuestion DescQuestion DescQuestion DescQuestion Desc
                            Question DescQuestion Desc
                        </div>
                <div className="questionDetailCard_middle">
                    <div className="questionDetailCard_middleViews">
                        Views: 0
                        <div className="questionDetailCard_middleViews">
                            answered
                        </div>                
                    </div>
                    <div className="questionDetailCard_middleTime">
                        Asked at: 11-12-2020 22:23:22
                    </div>
                    <div className="questionDetailCard_middleUpvotes">
                        <ArrowUpwardTwoToneIcon className='questionDetailCard_middleUpvotesArrow'/>
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
                    <span className="questionDetailCard_baseBottomView">
                        <span className='questionDetailCard_baseBottomCont'>
                            View in Stackoverflow
                        </span>
                        <CallMadeTwoToneIcon className='questionDetailCard_baseBottomArrow'/>
                    </span>
                </div>
            </div>  
        </div>
    )
}

export default QuestionDetailCard
