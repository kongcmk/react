import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form.jsx"

const Manager = () => {

    const [members, setMembers] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
      const getData = async () => {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setMembers(response.data);
      };
  
      getData();
    }, [reload]);

  
    const createData = async (name, lastname, position) => {
      const requestData = {
        name: name,
        lastname: lastname,
        position: position,
      };

      const response = await axios.post(
        "https://jsd5-mock-backend.onrender.com/members",
        requestData
      );
  
      if (response.status === 200) {
        setReload(!reload);
      }
  
      console.log(response);
    };


    const DeleteHandler = async (id) => {
        const response = await axios.delete(
            `https://jsd5-mock-backend.onrender.com/member/${id}`
          );

          if (response.status === 200) {
            setReload(!reload);
          }
      
          console.log(response + `${id} delete success`);
    }
  
    return (
        <>
        <h2 className="py-1 text-2xl font-bold"
        >Create User</h2>
        <div className="flex items-center justify-center w-full p-1">
            
            <Form 
                className="flex flex-row items-center justify-center w-auto gap-x-4"
            submitHandler={createData} />
        </div>
        <table className="flex-col items-center justify-center w-5/6 h-12 mt-5 mb-10 text-center border border-separate border-spacing-1 border-slate-500 ">
        <thead>
          <tr>
            <th className="w-2/6 h-12 border border-slate-600">Name</th>
            <th className="w-2/6 h-12 border border-slate-600">Lastname</th>
            <th className="w-2/6 h-12 border border-slate-600">Position</th>
            <th className="w-32 h-12 border border-slate-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
                <td className="w-2/6 h-10 border border-slate-700">{member.name}</td>
                <td className="w-2/6 h-10 border border-slate-700">{member.lastname}</td>
                <td className="w-2/6 h-10 border border-slate-700">{member.position}</td>
                <td className="flex items-center justify-center w-full h-10 p-1 border border-slate-700">
                    <button 
                        className="flex flex-row items-center justify-center w-full h-full"
                        onClick={() => DeleteHandler(member.id)}>
                        delete
                    </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}

export default Manager;
