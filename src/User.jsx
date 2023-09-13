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
        <h2 className="py-1 text-2xl font-bold">
            User list
        </h2>
        <table 
            className="flex-col items-center justify-center w-5/6 h-12 mt-5 mb-10 text-center border border-separate border-spacing-1 border-slate-500">
        <thead>
          <tr>
            <th className="h-12 border border-slate-600">Name</th>
            <th className="h-12 border border-slate-600">Lastname</th>
            <th className="h-12 border border-slate-600">Position</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="h-10 border border-slate-700">{member.name}</td>
              <td className="h-10 border border-slate-700">{member.lastname}</td>
              <td className="h-10 border border-slate-700">{member.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}


export default User;