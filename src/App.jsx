//key value pair and App class work as the parent class
/***
 * Props means read only properties
 */
import Student from "./Student.jsx"

function App() {
  
  return (
    <>
      <Student name = " spongeboi"  age={23}  isStudent={true}/>
       <Student name="panther"  age={24}   isStudent={true}/>
       <Student age={8}/>
        <Student name="Emmi"  age={44}   isStudent={false}/>
    </>
  )
}

export default App
