import React from "react";

const MeetingDetails = ({ meeting }) => {
  return (
    <div id="meetingdet">
      <div id="detcard" className="text-lg px-4">
        <h2 className="text-4xl text-center font-bold">Meeting Details</h2>
        <h3 className="font-bold text-2xl pb-1 mt-2">{meeting.meetingName}</h3>
        <p>
          <strong>Country Heads:</strong> {meeting.countryHeadName} and{" "}
          {meeting.secondCountryHeadName}
        </p>
        <p>
          <strong>Date:</strong> {meeting.date}
        </p>
        <p>
          <strong>Location:</strong> {meeting.location}
        </p>
        <p>
          <strong>Description:</strong> {meeting.description}
        </p>
        {meeting.photo && (
          <div>
            <h4>Photo</h4>
            <img src={meeting.photo} alt="Meeting" />
          </div>
        )}
        {meeting.agenda && (
          <div>
            <h4>Agenda</h4>
            <p>{meeting.agenda}</p>
          </div>
        )}
        {meeting.attendees && (
          <div>
            <h4>Attendees</h4>
            <ul>
              {meeting.attendees.map((attendee, index) => (
                <li key={index}>{attendee}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingDetails;
