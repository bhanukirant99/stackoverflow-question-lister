import React from 'react'
import './ProfilePic.css'
import { Avatar } from '@material-ui/core'

function ProfilePic({reputation, profilePicture}) {
    return (
        <div className='profilePic'>
            {0 < reputation && reputation <= 50 ? (
                                <div>
                                    <Avatar className='profilePic_repuLow profilePicStyle' src={profilePicture}/>
                                </div>
                ) : 50 < reputation && reputation <= 100 ? (
                            <div>
                                <Avatar className='profilePic_repuMedium profilePicStyle' src={profilePicture}/>
                            </div>
                ) : reputation > 100 ? (
                        <div>
                            <Avatar className='profilePic_repuHigh profilePicStyle' src={profilePicture}/>
                        </div>
                ) : (
                    <div>
                        <Avatar className='profilePic_repuNor profilePicStyle' src={profilePicture}/>
                    </div>
                )}
        </div>
    )
}

export default ProfilePic
