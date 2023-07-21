import React,{useState} from 'react'
import BlogPost from './BlogPost'


const Blog = () => {
    
   
    let [listOfPosts, setListOfPosts] = useState([])

    
    function addToList(newPost){
        setListOfPosts(previousPosts =>{
            return [newPost, ...previousPosts]
        })
    }

  return (
    <>


    {
    /* 
    #################################################################################################################################################################################### HOMEWORK ####################################################################################################################################################################
    
    
    TODO  Create a UserInput Component that will take the information from the input of the user and pass it onto the BlogPost Component
    
    The BlogPost Component should NOT have inputs in it. It should only have a submit button, and after pressing the button, it should create a post and add it to the listOfPosts in the Blog Component.


    Optional TODO: Delete the last post from the listOfPosts
    Optional TODO: Add dates to the posts
    */}

    <BlogPost addToList={addToList}/>


    {listOfPosts.map(post =>{
        return(
            <>
            
            <h2>{post.title}</h2>
            <h3>{post.author}</h3>
            <p>{post.content}</p>
            <hr />
            </>
        )
    })}
    </>
  )
}

export default Blog