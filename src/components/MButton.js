export default function MButton({ meeting, onOpenBlock }) {
  return (
    <button className="btn" onClick={() => onOpenBlock(meeting)}>
      <span className="meeting-title">{meeting.meetingTitle}</span>
      <span className="meeting-date">{meeting.date}</span>
    </button>
  );
}
