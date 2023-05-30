import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from '../HW1';

// создать тип вместо any и отобразить приходящие данные
export type FriendMessagePropsType = {
    friendMessage0: MessageType
}
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.friendMessage0.id}
            className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <img src={props.friendMessage0.user.avatar} alt={"tekst"}
                    id={'hw1-friend-avatar-' + props.friendMessage0.id}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.friendMessage0.id}
                        className={s.friendName}>
                        {props.friendMessage0.user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.friendMessage0.id}
                        className={s.friendMessageText}
                    >
                        {props.friendMessage0.message.text}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.friendMessage0.id}
                className={s.friendTime}
            >
                {props.friendMessage0.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
