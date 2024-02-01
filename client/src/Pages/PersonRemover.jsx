import { useParams } from "react-router-dom"

export default function PersonRemover() {
    
    const { id } = useParams();
   

    return <div>
        person {id} is deleted
    </div>
}