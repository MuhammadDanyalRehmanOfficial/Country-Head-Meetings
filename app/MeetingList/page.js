"use client";
import React, { useState } from "react";

const MeetingList = ({ meetings, onMeetingClick }) => {
  const [filter, setFilter] = useState("all"); // 'all', 'past', or 'upcoming'
  const [sort, setSort] = useState("date"); // 'date' or 'country'

  // Filter meetings based on the selected filter
  const filteredMeetings = meetings.filter((meeting) => {
    const currentDate = new Date();
    const meetingDate = new Date(meeting.date);
    if (filter === "past") {
      return meetingDate < currentDate;
    } else if (filter === "upcoming") {
      return meetingDate >= currentDate;
    }
    return true; // 'all' filter
  });

  // Sort meetings based on the selected sorting option
  const sortedMeetings = filteredMeetings.sort((a, b) => {
    if (sort === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sort === "country") {
      return a.countryName.localeCompare(b.countryName);
    }
    return 0; // Default sorting
  });

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="px-7">
      <div className="flex justify-center items-center gap-20 h-20">
        <h2 id="top-heading" className="text-xl font-bold">
          Country Heads Meetings
        </h2>
        <div
          id="sort"
          className="flex justify-between items-center w-1/3 text-sl font-semibold"
        >
          <div>
            <label htmlFor="filter">Filter By: </label>
            <select
              className="border-black border-2"
              id="filter"
              onChange={handleFilterChange}
              value={filter}
            >
              <option value="all">All</option>
              <option value="past">Past</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
          <div>
            <label htmlFor="sort">Sort By: </label>
            <select
              className="border-black border-2"
              id="sort"
              onChange={handleSortChange}
              value={sort}
            >
              <option value="date">Date</option>
              <option value="country">Country</option>
            </select>
          </div>
        </div>
      </div>
      <div id="cardlist">
        {sortedMeetings.map((meeting, index) => (
          <div
            id="card"
            className="text-lg"
            key={index}
            onClick={() => onMeetingClick(meeting)}
          >
            <h3 id="heading" className="font-bold text-lg pb-1">
              {index + 1}. {meeting.meetingName}
            </h3>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingList;
