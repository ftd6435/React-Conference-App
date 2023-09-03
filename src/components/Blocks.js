import SecondBlock from "./SecondBlock";
import FirstBlock from "./FirstBlock";

export default function Blocks({attendTab, onAddNewAttend, activeMeeting, onFormOpen, isFormOpen, onAddToMeeting, onCancelAttendant, onCancelMeeting}) {
  return (
    <div className="blocks">
      <FirstBlock attendTab={attendTab} onAddNewAttend={onAddNewAttend} onFormOpen={onFormOpen} isFormOpen={isFormOpen} onAddToMeeting={onAddToMeeting} />
      <SecondBlock attendTab={attendTab} activeMeeting={activeMeeting} onCancelAttendant={onCancelAttendant} onCancelMeeting={onCancelMeeting} />
    </div>
  );
}
