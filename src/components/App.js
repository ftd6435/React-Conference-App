import { useState } from "react";
import Container from "./Container";
import Modal from "./Modal";

export const initialAttendant = [
  {
    id: 1,
    name: "Pathé PK",
    image: "https://i.pravatar.cc/45?profil=pkdiallo",
    title: "Website Developer",
    meeting: "On Hold",
    attended: false,
  },
  {
    id: 2,
    name: "Jeans JWS",
    image: "https://i.pravatar.cc/45?profil=jean",
    title: "Network",
    meeting: "On Hold",
    attended: false,
  },
  {
    id: 3,
    name: "MsB Barry",
    image: "https://i.pravatar.cc/45?profil=msb",
    title: "Website Developer",
    meeting: "On Hold",
    attended: false,
  },
  {
    id: 4,
    name: "Franky FK",
    image: "https://i.pravatar.cc/45?profil=pkdiallo",
    title: "Web Designer",
    meeting: "On Hold",
    attended: false,
  },
  {
    id: 5,
    name: "Bangaly YGF",
    image: "https://i.pravatar.cc/45?profil=pkdiallo",
    title: "Mobile Developer",
    meeting: "On Hold",
    attended: false,
  },
];

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [meetingsTab, setMeetingsTab] = useState([]);
  const [meetingAttend, setMeetingAttend] = useState(initialAttendant);
  const [activeMeeting, setActiveMeeting] = useState(null);
  const [curMeeting, setCurMeeting] = useState("");


  function handleModal(){
    setIsOpenModal((isOpen) => !isOpen);
  }

  function handleOpenBlock(meeting){
    setCurMeeting((mTitle) => mTitle === meeting.meetingTitle ? "" : meeting.meetingTitle);
    setActiveMeeting((m) => m?.id === meeting.id ? null : meeting);
  }

  function handleAddNewMeeting(meeting){
    setMeetingsTab((mTab) => [...mTab, meeting]);
  }

  function handleCancelMeeting(mTitle){
    setMeetingsTab((mTab) => mTab.map((m) => m).filter((m) => m.meetingTitle !== mTitle));
    
    setMeetingAttend((attends) => attends.map((attend) => attend.meeting === mTitle ? {...attend, meeting: "On Hold", attended: false} : attend));
    setActiveMeeting(null);
  }

  function handleAddNewAttend(newAttend){
    setMeetingAttend((attend) => [...attend, newAttend]);
  }

  function handleAddTOMeeting(attendant){
    if(curMeeting !== "")
        setMeetingAttend((attends) => attends.map((attend) => attend.id === attendant.id ? {...attend, meeting: curMeeting, attended: true } : attend));
  }

  function handleCancelAttendant(attendant){
    setMeetingAttend((attends) => attends.map((attend) => attend.id === attendant.id ? {...attend, meeting: "On Hold", attended: false } : attend));
  }

  return (
    <div className="app">
      <Container attendsTab={meetingAttend} onAddNewAttend={handleAddNewAttend} onModalOpen={handleModal} onFormOpen={setIsFormOpen} isFormOpen={isFormOpen} meetingsTab={meetingsTab} onOpenBlock={handleOpenBlock} activeMeeting={activeMeeting} onAddToMeeting={handleAddTOMeeting} onCancelAttendant={handleCancelAttendant} onCancelMeeting={handleCancelMeeting} />
      <Modal isOpenModal={isOpenModal} onModalOpen={handleModal} onAddNewMeeting={handleAddNewMeeting} />
    </div>
  );
}
