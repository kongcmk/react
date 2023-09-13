import { useState } from "react";

const Form = ({ submitHandler }) => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();

  return (
    <div className="flex flex-col items-center justify-center w-5/6 h-auto gap-2 text-center sm:flex-row">
        <input
            className="w-4/6 p-2 rounded sm:w-1/3"
            type="text"
            placeholder="name"
            value={name}
            required
            onChange={(ev) => setName(ev.target.value)}
        />
        <input
            className="w-4/6 p-2 rounded sm:w-1/3"
            type="text"
            placeholder="lastname"
            value={lastname}
            required
            onChange={(ev) => setLastname(ev.target.value)}
        />
        <input
            className="w-4/6 p-2 rounded sm:w-1/3"
            type="text"
            placeholder="position"
            value={position}
            required
            onChange={(ev) => setPosition(ev.target.value)}
        />
        <button 
            className="pt-2 pb-2 pl-4 pr-4 rounded w-fit"
            onClick={() => submitHandler(name, lastname, position)}>
            Submit
        </button>
    </div>

  );
};

export default Form;
