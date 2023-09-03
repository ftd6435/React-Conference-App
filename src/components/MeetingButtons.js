import MButton from "./MButton";

export default function MeetingButtons({meetingsTab, onOpenBlock}) {
  return (
    <>
      {meetingsTab.length ? <div className="meetings-btn">
        {meetingsTab.map((meeting) => <MButton meeting={meeting} key={meeting.id} onOpenBlock={onOpenBlock} />) }
      </div> : <h2 className="above">👆 Schedule a meeting by clicking on the button above</h2>}
    </>
  );
}
