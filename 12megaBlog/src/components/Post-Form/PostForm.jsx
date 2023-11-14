import React from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, Select} from '../index'
import appwriteService from '../../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { UseSelector } from 'react-redux'
import { useSelector } from 'react-redux'

function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post ?.title || '',
            slug: slug?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
            
            
        }
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.user.userData)
  return (
    <h1>PostForm</h1>
  )
}

export default PostForm