import Button from "./Button";

export default function ListItem({ attend, onAddToMeeting }) {
  return (
    <div className="list-item">
      <div className="detail">
        <img src={attend.image} alt={attend.name} />
        <div className="detail-text">
          <h3>{attend.name}</h3>
          <p>{attend.title}</p>
        </div>
      </div>
      <Button onClick={() => onAddToMeeting(attend)}>Add</Button>
    </div>
  );
}
