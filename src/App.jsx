// import './App.css'

//import component
import Layout from './Layout.jsx'
import User from './User.jsx'
import Manager from './Admin.jsx'
import { useState } from 'react'

function App() {
  const [section, setSection] = useState("");

  return (
    <Layout>
      <div className="w-screen h-64 flex flex-col justify-center items-center text-center" >
        <h1 
          className="text-3xl font-bold py-2">
          Generation Thailand
        </h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      
        { section === "" && (
          
          <h3 className='text-xl font-bold py-2 text-center'>
            Please select button.
            </h3>
        )
        }

        { section === "USER" && (
          
          <h3 className='text-xl font-bold py-2 text-center'>
           HOME - USER SECTOR
            </h3>
        )
        }
        
        { section === "ADMIN" && (
          
          <h3 className='text-xl font-bold py-2 text-center'>
            HOME - ADMIN SECTOR
            </h3>
        )
        }

      

      <div className='flex justify-center gap-10 mt-4 mb-16 '>
        <button 
          onClick={() => setSection("USER")}>
            User
        </button>
        <button
          onClick={() => setSection("ADMIN")}>
            Admin
        </button>
      </div>


      <div className='w-screen flex flex-col justify-center items-center gap-y-4'>
      {
        section === "USER" && ( 
          <User className="self-auto"/>
        )
      }

      {
        section === "ADMIN" && (
          <Manager className="self-auto"/> 
        )
      }
      </div>
      
    </Layout>
  )

}



export default App
