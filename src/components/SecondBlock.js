import Button from "./Button";
import ListItemSecondList from "./ListItemSecondList";

export default function SecondBlock({attendTab, activeMeeting, onCancelAttendant, onCancelMeeting}) {
  const alreadyAttend = attendTab?.filter((attend) => attend.meeting === activeMeeting?.meetingTitle);

  return (
    <div className={`block-2 ${activeMeeting === null ? 'hidden' : ''}`}>
      <div className="block-content">
        <h2 className="title">{`LIST OF ATTENDANT OF ${activeMeeting?.meetingTitle} MEETING`}</h2>
        <div className="list">
          {alreadyAttend.map((attend) => <ListItemSecondList attend={attend} onCancelAttendant={onCancelAttendant} key={attend.id} />)}
        </div>
        <h3 className="date">{activeMeeting?.date}</h3>
      </div>

      <div>
        <Button onClick={() => onCancelMeeting(activeMeeting?.meetingTitle)}>Cancel Meeting</Button>
      </div>
    </div>
  );
}
