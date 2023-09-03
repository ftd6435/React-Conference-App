import { useState } from "react";

export default function Modal({isOpenModal, onModalOpen, onAddNewMeeting}) {
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDate, setMeetingDate] = useState("");

  function handleScheduleMeeting(e){
    e.preventDefault();

    if(!meetingDate || !meetingTitle) return;

    const date = new Date(meetingDate).toDateString();

    const newMeeting = {id: crypto.randomUUID(), meetingTitle, date};
    onAddNewMeeting(newMeeting);

    setMeetingTitle("");
    setMeetingDate("");
    // console.log(newMeeting);
  }

  return (
    <div className={`modal ${isOpenModal ? 'hidden' : ''}`}>
      <div className="modal-content">
        <form action="" className="add-attendant" onSubmit={(e) => handleScheduleMeeting(e)}>
          <div className="group">
            <label>👩🏻‍🤝‍👩🏻 Meeting:</label>
            <input type="text" value={meetingTitle} onChange={(e) => setMeetingTitle(e.target.value)} />
          </div>
          <div className="group">
            <label>🗓️ Schedule:</label>
            <input type="date" value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)} />
          </div>

          <div>
            <button className="btn" onClick={onModalOpen}>Schedule Meeting</button>
          </div>
        </form>
      </div>
      <div className="overlay" onClick={onModalOpen}></div>
    </div>
  );
}
