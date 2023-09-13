import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
    const [members, setMembers] = useState([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
      const getData = async () => {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setMembers(response.data);
      };
  
      getData();
    }, []);


    return (
        <>
        <h2 className="text-2xl font-bold py-1">
            User list
        </h2>
        <table 
            className="w-5/6 flex-col justify-center items-center text-center h-12 border-separate border-spacing-1 border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 h-12">Name</th>
            <th className="border border-slate-600 h-12">Lastname</th>
            <th className="border border-slate-600 h-12">Position</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="border border-slate-700 h-10">{member.name}</td>
              <td className="border border-slate-700 h-10">{member.lastname}</td>
              <td className="border border-slate-700 h-10">{member.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}


export default User;