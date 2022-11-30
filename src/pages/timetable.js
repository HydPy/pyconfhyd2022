import React, { useState } from "react";
import ScheduleCard from "../components/schedule-card";
import SectionHeading from "../components/section-heading";
import Confdata from "../data/conference-schedule.yml";
import Workdata from "../data/workshop-schedule.yml";
import "../assets/stylesheets/timetable.css";

const TimeTable = ({ data }) => {
  const cd = Confdata;
  const wd = Workdata;
  const [show, setShow] = useState(true);
  return (
    <div className="sec" p={2}>
      <div className="heading">
        <SectionHeading>Schedule</SectionHeading>
      </div>
      <div>
        <button
          className={show ? "conf_work_button" : "conf_work_button_not_show"}
          onClick={() => setShow(true)}
        >
          Workshop
        </button>
        <button
          className={!show ? "conf_work_button" : "conf_work_button_not_show"}
          onClick={() => setShow(false)}
        >
          Conference
        </button>
      </div>
      {show && (
        <div>
          {wd.map((events) => (
            <div className="grid">
              <div className="time-col">
                <h3>{events.time} GMT+5:30</h3>
              </div>
              <div className="talk-col">
                {events.workList.map((wl) => (
                  <ScheduleCard
                    track={wl.track}
                    time={wl.time}
                    title={wl.title}
                    speaker_info={wl.speaker}
                    discription={wl.discription}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {!show && (
        <div>
          {cd.map((events) => (
            <div className="grid">
              <div className="time-col">
                <h3>{events.time} GMT+5:30</h3>
              </div>
              <div className="talk-col-1">
                {events.workList.map((wl) => (
                  <ScheduleCard
                    track={wl.track}
                    time={wl.time}
                    title={wl.title}
                    speaker_info={wl.speaker}
                    discription={wl.discription}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeTable;
