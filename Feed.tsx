import React from "react";
import throbbler from "../../global/throbber_small.svg";
import styled from "styled-components";
import avatar from "../../global/avatar.jpg";
import avatar2 from "../../global/nVp.jpg";
import { Load } from "../../StyledApp";
import Card from "../Global/Card";
const AppFeed = styled.div`
  flex: 0.65;
  background: #ffff;
  border-right: 1.5px solid #efeded;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 425px) {
    flex: 1;
  }
`;
const Feed: React.FC = () => {
  return (
    <AppFeed>
      <Card
        avatar={avatar}
        displayName="Inharul Haque"
        isVerified={true}
        timeStamp="3 August 2021"
        topic="People and Blogs"
        userName="inharulhaque"
        title="my first blog"
        href={"/"}
        description="This was one of great feeling of my life. I was not expecting that anyone will come but now anithing has over 1 Million active users! We are just developers but the platfrom is for all of us. Post something good it helps other and anithing to feature it on explore. The more you post the more you learn. Thanks for this, we are adding new features so until then share and gain knowledge from others"
      />
      <Card
        avatar={avatar2}
        displayName="Nazma Begum"
        isVerified={false}
        timeStamp=""
        topic="People and Blogs"
        userName="NazCreation"
        title="What's up everybody tomorrow i'll post a blog so get ready at 3pm IST!"
        description="10 August 2021"
        href={"/"}
      />

      <Load>
        <img src={throbbler} alt="loading" />
      </Load>
    </AppFeed>
  );
};

export default Feed;
