import React from 'react';

import './timeline.style.scss';

import ProfTimelineData from './professiontimeline.data';
import EducationData from "./educationtimeline.data";

const TimelineComponent = () => {
    return (
        ProfTimelineData.length > 0 && (
            <div className="fullwidth">
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
            <p>{data.date}
                <br />{data.dvsn}
                <br />{data.desc}
                <br /> {data.domain}</p>
        </div>
    )
}

export const TimeLineHoverMain = () => {
    return (
        EducationData.length > 0 && (
            <div className="fullwidth">
                <div className="timeline group">
                    {EducationData.map((data, idx) => (
                        <TimeLineItemWithHover data={data} key={idx} />
                    ))}
                </div>
            </div>
        )
    )
}

const TimeLineItemWithHover = ({ data }) => {
    return (
        <div className="item">
            <h4>{data.degree}</h4>
            <p>{data.university}
                <br />{data.location}
                <br />{data.stream}</p>
        </div>
    )
}


export default TimelineComponent;