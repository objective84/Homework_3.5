import React, {useState} from 'react'


const BlogPost = ({addToList}) => {

   
    let [author,setAuthor] = useState('')
    let [title,setTitle] = useState('')
    let [content,setContent] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        let post = {author, title, content}
        addToList(post)
        
       
        setAuthor('')
        setContent('')
        setTitle('')

    }

  return (
    <>
    
    <form onSubmit={handleSubmit}>
        
        <button>Submit Post</button>

    </form>
    
    </>
  )
}

export default BlogPost