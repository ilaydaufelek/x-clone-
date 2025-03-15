
import { useState } from "react";
import { topics } from "../../../uilts/consts";
import Topic from "./topic";
import SidebarSection from "../../../components/sidebar-section";

export default function Topics(){

  const [topicList,setTopicList]=useState(topics)
    return (
      <SidebarSection  
      title="  Neler oluyor?"
      more='/trends'
       >
          {topicList.map((topic, index)=>(
        <Topic item={topic} key={index} topicList={topicList} setTopicList={setTopicList} />
    ))}
  
      </SidebarSection>
      
  
    )
}