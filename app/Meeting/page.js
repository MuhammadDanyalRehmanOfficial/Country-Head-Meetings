"use client";
import MeetingDetails from "../MeetingDetails/page";
import MeetingList from "../MeetingList/page";
import meetingsData from "../data/CountryHeadMeetingData.json"; // Import your meeting data

import { useState } from "react";

const Home = () => {
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const handleMeetingClick = (meeting) => {
    setSelectedMeeting(meeting);
  };

  return (
    <div>
      {selectedMeeting ? (
        <MeetingDetails meeting={selectedMeeting} />
      ) : (
        <MeetingList
          meetings={meetingsData}
          onMeetingClick={handleMeetingClick}
        />
      )}
    </div>
  );
};

export default Home;
