import { useParams } from "react-router-dom"

function User() {
    const {userId} = useParams()

  return (
    <div className="
        bg-orange-700 
        text-white
        text-2xl
        font-mono 
        font-bold 
        text-center
        p-4 m-4 rounded-md
        min-w-fit"
     >
    
    User: {userId}
        
    </div>
  )
}

export default User