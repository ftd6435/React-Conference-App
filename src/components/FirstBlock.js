import Button from "./Button";
import AddNewAttendant from "./AddNewAttendant";
import List from "./List";

export default function FirstBlock({attendTab, onAddNewAttend, onFormOpen, isFormOpen, onAddToMeeting}) {
  return (
    <div className="block-1">
      <List attendTab={attendTab} onAddToMeeting={onAddToMeeting} />
      <AddNewAttendant onAddNewAttend={onAddNewAttend} isFormOpen={isFormOpen} />
      <div className="btn-sec">
        <Button onClick={() => onFormOpen((isOpen) => !isOpen)}>{isFormOpen ? 'Close Form' : 'Add Attendant'}</Button>
      </div>
    </div>
  );
}
