import Blocks from "./Blocks";
import MeetingButtons from "./MeetingButtons";
import Schedule from "./Schedule";

export default function Container({attendsTab, onAddNewAttend, onModalOpen, meetingsTab, onOpenBlock, activeMeeting, isFormOpen, onFormOpen, onAddToMeeting, onCancelAttendant, onCancelMeeting}) {
  return (
    <div className="container">
      <Schedule onModalOpen={onModalOpen} />
      <MeetingButtons meetingsTab={meetingsTab} onOpenBlock={onOpenBlock} />
      <Blocks attendTab={attendsTab} onAddNewAttend={onAddNewAttend} activeMeeting={activeMeeting} onFormOpen={onFormOpen} isFormOpen={isFormOpen} onAddToMeeting={onAddToMeeting} onCancelAttendant={onCancelAttendant} onCancelMeeting={onCancelMeeting} />
    </div>
  );
}
