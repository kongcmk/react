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
        <h2 className="text-2xl font-bold py-1"
        >Create User</h2>
        <div className="w-full p-1 flex justify-center items-center">
            
            <Form 
                className="w-auto flex flex-row justify-center items-center gap-x-4"
            submitHandler={createData} />
        </div>
        <table className="w-5/6 flex-col justify-center items-center text-center h-12 border-separate border-spacing-1 border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 h-12">Name</th>
            <th className="border border-slate-600 h-12">Lastname</th>
            <th className="border border-slate-600 h-12">Position</th>
            <th className="border border-slate-600 h-12 w-32">Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
                <td className="border border-slate-700 h-10">{member.name}</td>
                <td className="border border-slate-700 h-10">{member.lastname}</td>
                <td className="border border-slate-700 h-10">{member.position}</td>
                <td className="border border-slate-700 h-10 w-full p-1 flex justify-center items-center">
                    <button 
                        className="w-full h-full flex flex-row justify-center items-center"
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
