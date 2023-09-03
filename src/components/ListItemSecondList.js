import Button from "./Button";

export default function ListItem({ attend, onCancelAttendant }) {
  return (
    <div className="list-item active">
      <div className="detail">
        <img src={attend.image} alt={attend.name} />
        <div className="detail-text">
          <h3>{attend.name}</h3>
          <p>{attend.title}</p>
        </div>
      </div>
      <Button onClick={() => onCancelAttendant(attend)}>Cancel</Button>
    </div>
  );
}
