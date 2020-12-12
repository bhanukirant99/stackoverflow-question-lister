import React, { useState } from 'react'
import './QuestionCard.css'
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import ProfilePic from './subcomponents/ProfilePic';
import QuestionDetailCard from './QuestionDetailCard'
import Popup from './Popup'

function QuestionCard({profilePicture, reputation, userName, title, upvotes, tags}) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='questionCard'>
            {isOpen && <QuestionDetailCard
                handleClose={togglePopup}
            />}
            {/* {isOpen && <Popup
            content={<>
                <b>Design your Popup</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>Test button</button>
            </>}
            handleClose={togglePopup}
            />} */}
            <div className="questionCardDetails" onClick={togglePopup}>
                <div className="questionCard_top">
                    <div className="questionCard_topProfile">
                        <ProfilePic profilePicture={profilePicture} reputation={reputation}/>
                        <div className="questionCard_middleUserName">
                            {userName}
                        </div>
                    </div>
                    <div className="questionCard_topInfo">
                        <div className="questionCard_topQuestion">
                            Question Title:
                        </div>
                        <div className="questionCard_topTitle">
                            {title}
                        </div>
                    </div>
                </div>
                <div className="questionCard_bottom">
                    <div className="questionCard_bottomUpvotes">
                        <ArrowUpwardTwoToneIcon className='questionCard_bottomUpvotesArrow' height={20} width={15}/>
                        {upvotes}
                    </div>
                    <div className="questionCard_bottomTags">
                        {tags?.map(tag => (
                            <div className="questionCard_bottomTag">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* {isOpen && <QuestionDetailCard
                handleClose={togglePopup}
            />} */}
        </div>
    )
}

export default QuestionCard
