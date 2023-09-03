import { useState } from "react";
import Button from "./Button";

export default function AddNewAttendant({onAddNewAttend, isFormOpen}) {
  const [name, setName] = useState("");
  const  [title, setTitle] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/45");

  function handleAddAttend(e){
    e.preventDefault();

    if(!name || !title || !image) return;

    const id = crypto.randomUUID();
    const imageUnique = `${image}?image=${id}`;
    const newAttend = {id, name, title, image: imageUnique};

    onAddNewAttend(newAttend);

    setName("");
    setTitle("");
    setImage("https://i.pravatar.cc/45");
  }

  return (
    <form action="" className={`add-attendant ${isFormOpen ? '' : 'hidden'}`} onSubmit={(e) => handleAddAttend(e)}>
      <div className="group">
        <label>🧑‍💼 Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="group">
        <label>🪑 Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="group">
        <label>🖼️ Image:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>

      <div>
        <Button>Add Attend</Button>
      </div>
    </form>
  );
}
