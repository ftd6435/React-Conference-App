import ListItem  from "./ListItem";

export default function List({attendTab, onAddToMeeting}) {
 const onHoldAttends = attendTab?.filter((a) => !a.attended);

  return (
    <>
    <div className="list">
      {onHoldAttends?.map((attend) =>  <ListItem attend={attend} onAddToMeeting={onAddToMeeting} key={attend.id} />)}
    </div>
    </>
  );
}
