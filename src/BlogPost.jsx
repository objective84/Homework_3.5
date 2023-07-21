import React, {useState} from 'react'

// 12) Add a props to the BlogPost component and name it addToList
const BlogPost = ({addToList}) => {

    // #6 Create the useStates for the user inputs, which will create the blog 
    let [author,setAuthor] = useState('')
    let [title,setTitle] = useState('')
    let [content,setContent] = useState('')

    function handleChange(e){
        setAuthor(e.target.value)
    }


    /* 9) The handleSubmit functions needs to have a preventDefault, then you can create a post and save the post wherever you'd like. Previously, the handleSubmit function looked like this:  
    
    function handleSubmit(e){
        e.preventDefault()
        setPost( {author, title, content})
    }

    This function would create a post for you.
*/

    /*
     13) Edit the handleSubmit function so that it creates a post and adds that post to the listOfPosts we had from the Blog Component. It does this by using the callback function we got as a prop
     */

    function handleSubmit(e){
        e.preventDefault()
        let post = {author, title, content}
        addToList(post)
        
        // clears the content
        setAuthor('')
        setContent('')
        setTitle('')

    }

  return (
    <>
    
    {/* 7) Create the form which has inputs and sends those inputs to the useState variables above. Initially, form did not have onSubmit*/}

    {/* 8) Create the onSubmit and that will be a function that creates the post */}
    <form onSubmit={handleSubmit}>
        <label> Author Name: </label>
        <input 
        type="text"
        onChange={handleChange}
        value={author}
        />
        <br />
        <label> Title: </label>
        <input 
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        />
        <br />
        <label> Contents: </label>
        <input 
        type="text"
        onChange={e => setContent(e.target.value)}
        value={content}
        />
        <br />
        <br />
        <button>Submit Post</button>

    </form>
    
    </>
  )
}

export default BlogPost