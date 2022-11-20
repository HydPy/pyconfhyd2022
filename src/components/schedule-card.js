import React from "react"
import {
    PlayCircle, PlusCircle
  } from 'react-feather'
import '../static/stylesheets/timetable.css'
const ScheduleCard = ({
    track,
    time,
    title,
    speaker_info,
    discription

  }) => {
    return (
        <div className="talkcard">
            <div className="liftcard">
                <div className="tag">
                    <div className="track">{track}</div>
                    <div className="time">{time}</div>
                </div>
                <div className="talk-div">
                        <span className="talk-area">
                            <div className="talk-margin">
                                <h4>{title}</h4>
                            </div>
                        </span>
                </div>
                <div className="speaker-div">
                    <span>{speaker_info}</span>
                </div>
                <div className="discription-div">
                    <p>{discription}</p>
                </div>
                <div className="info-button-div">
                    <button className="bottom-button">Learn More&nbsp;<PlusCircle/></button>
                    <button className="bottom-button"><PlayCircle/>&nbsp;Watch Now</button>
                </div>
            </div>
        </div>
    ) 
}

export default ScheduleCard;