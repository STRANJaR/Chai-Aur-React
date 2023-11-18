import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'

function AllPosts() {
    const [post, setPost] = useState([])
    // useEffect(() => {
        appwriteService.getPost([])
        .then((posts) => {
            if(posts) {
                setPost(posts.documents)
            }
        })
    // }, [])
  return (
    <div className='w-full py-8'>

        <Container>
            <div className="flex flex-wrap">
                {post.map((post) => {
                    <div key={post.$id} className="py-2 w-1/4">
                        <PostCard {...post} />
                    </div>
                })}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts