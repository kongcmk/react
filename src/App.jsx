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
      <div className="flex flex-col items-center justify-center w-screen h-64 text-center" >
        <h1 
          className="py-2 text-3xl font-bold">
          Generation Thailand
        </h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      
        { section === "" && (
          
          <h3 className='py-2 text-xl font-bold text-center'>
            Please select button.
            </h3>
        )
        }

        { section === "USER" && (
          
          <h3 className='py-2 text-xl font-bold text-center'>
           HOME - USER SECTOR
            </h3>
        )
        }
        
        { section === "ADMIN" && (
          
          <h3 className='py-2 text-xl font-bold text-center'>
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


      <div className='flex flex-col items-center justify-center w-screen gap-y-4'>
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
