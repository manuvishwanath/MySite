import React from 'react';
import { FcCalendar } from 'react-icons/fc';

import './timeline.style.scss';

import ProfTimelineData from './professiontimeline.data';
import EducationData from "./educationtimeline.data";

const ProfessionTimelineComponent = () => {
    return (
        ProfTimelineData.length > 0 && (
            <div className="fullwidth my-10">
                <div className="timeline group">
                    {ProfTimelineData.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                    ))}
                </div>
            </div>
        )
    )
}

const TimelineItem = ({ data }) => {
    return (
        <div className="item">
            <h3>{data.name}</h3>
            <p><FcCalendar />  {data.date}
                <br /><b>Division: </b>{data.dvsn}
                <br /><b>Company Info: </b>{data.desc}
                <br /><b>Domain: </b> {data.domain}</p>
        </div>
    )
}

export const EduTimeLineComponent = () => {
    return (
        EducationData.length > 0 && (
            <div className="fullwidth my-10">
                <div className="timeline group">
                    {EducationData.map((data, idx) => (
                        <EduTimeLineItem data={data} key={idx} />
                    ))}
                </div>
            </div>
        )
    )
}

const EduTimeLineItem = ({ data }) => {
    return (
        <div className="item">
            <h4>{data.degree}</h4>
            <p><b>University: </b>{data.university}
                <br /><b>College: </b>{data.location}
                <br /><b>Stream: </b>{data.stream}</p>
        </div>
    )
}


export default ProfessionTimelineComponent;