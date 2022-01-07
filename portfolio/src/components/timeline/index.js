import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import  WorkIcon from "../../img/job-work-svgrepo-com.svg"
import  SchoolIcon  from "../../img/degree-svgrepo-com.svg"
import "./timeline.scss";

const Timeline=()=>{
    return (
        <>
        {/*Icons by svgrepo.com*/}
        <h2 id="achievements">My greatest achievements </h2>
        <VerticalTimeline>
          
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2017-2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={SchoolIcon } alt="myLogo" />}   >
    <h3 className="vertical-timeline-element-title">Bachelor degree Web developer</h3>
    <h4 className="vertical-timeline-element-subtitle">IEPS,Fléron,Belgium</h4>
    <p>
    User Experience,Adobe suite(photoshop,illustrator,XD,firework), Symfony,Laravel,PHP (OOP, MVC),JS,jQuery
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020 - 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img src={WorkIcon } alt="myLogo" />}   >
  
    <h3 className="vertical-timeline-element-title">Web developer - 1 year and 1 month</h3>
    <h4 className="vertical-timeline-element-subtitle">Solar-Tech engineering (Wattuneed), Andrimont, Belgium</h4>
    <p>
     Module prestashop (php,jQuery), back office (laravel,react), mobile app (react-native)
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>

        </>
    )
}
export default Timeline;