import Button from "./Button";

export default function Schedule({onModalOpen}) {
  

  return (
    <div className="schedule">
      <Button onClick={onModalOpen} >Schedule Meeting</Button>
      <div className="circle"></div>
    </div>
  );
}
