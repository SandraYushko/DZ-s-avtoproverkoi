import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from '../HW1';

// создать тип вместо any и отобразить приходящие данные
export type FriendMessagePropsType = {
    friendMessage: MessageType
}
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.friendMessage.id}
            className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <img src={props.friendMessage.user.avatar} alt={"tekst"}
                    id={'hw1-friend-avatar-' + props.friendMessage.id}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.friendMessage.id}
                        className={s.friendName}>
                        {props.friendMessage.user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.friendMessage.id}
                        className={s.friendMessageText}
                    >
                        {props.friendMessage.message.text}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.friendMessage.id}
                className={s.friendTime}
            >
                {props.friendMessage.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
