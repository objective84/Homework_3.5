import React,{useState} from 'react'
import BlogPost from './BlogPost'

const Blog = () => {
    
    // 2) Create a list of posts using useState, called listOfPosts
    let [listOfPosts, setListOfPosts] = useState([])

    // 10) create a function to add a new post to the listOfPosts
    function addToList(newPost){
        setListOfPosts(previousPosts =>{
            return [newPost, ...previousPosts]
        })
    }

  return (
    <>
    {/* 5) Bring in the BlogPost Component, this is where the posts will get created and where the input form is. It looked like this:
    <BlogPost/>
    */}

    {/* 11) Pass the callback function called addToList from this Blog component down to the BlogPost Component */}
    <BlogPost addToList={addToList}/>

    {/* 3) Create a for loop (map), looping through all the posts in the listOfPosts*/}
    {listOfPosts.map(post =>{
        return(
            <>
            {/* 4) Display the post's title, author, and content */}
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