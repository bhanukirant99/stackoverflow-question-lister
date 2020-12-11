import React from 'react'
import './ProfilePic.css'
import { Avatar } from '@material-ui/core'

function ProfilePic(reputation) {
    return (
        <div className='profilePic'>
            {0 < reputation && reputation <= 50 ? (
                                <div>
                                    <Avatar className='profilePic_repuLow profilePicStyle' src='https://avatars.dicebear.com/4.5/api/human/1.svg'/>
                                </div>
                ) : 50 < reputation && reputation <= 100 ? (
                            <div>
                                <Avatar className='profilePic_repuMedium profilePicStyle' src='https://avatars.dicebear.com/4.5/api/human/1.svg'/>
                            </div>
                ) : reputation > 100 ? (
                        <div>
                            <Avatar className='profilePic_repuHigh profilePicStyle' src='https://avatars.dicebear.com/4.5/api/human/1.svg'/>
                        </div>
                ) : (
                    <div>
                        <Avatar className='profilePic_repuNor profilePicStyle' src='https://avatars.dicebear.com/4.5/api/human/1.svg'/>
                    </div>
                )}
        </div>
    )
}

export default ProfilePic
