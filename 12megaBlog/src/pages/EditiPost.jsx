import React,{useState, useEffect} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'


function EditiPost() {
    const [post, setPost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug)
            .then((post) => {
                setPost(post)
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return post? (
    <div className="py-8">
        <Container>
            <PostForm/>
        </Container>
    </div>
  ) : null
}

export default EditiPost