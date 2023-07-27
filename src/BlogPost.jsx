import React, {useState} from 'react'
import BlogInput from './BlogInput'

const BlogPost = ({id, addToList}) => {

   
    
    let [author,setAuthor] = useState('')
    let [title,setTitle] = useState('')
    let [content,setContent] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        addToList({id, author, title, date: new Date().toLocaleDateString(), content})
        setAuthor('')
        setContent('')
        setTitle('')

    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <BlogInput {...{title, setTitle, author, setAuthor, content, setContent} } />
        <button>Submit Post</button>

    </form>
    
    </>
  )
}

export default BlogPost