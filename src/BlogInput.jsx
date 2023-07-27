import React from 'react'

const BlogInput = ({title, setTitle, author, setAuthor, content, setContent}) => {
  return (
    <>
       <div>
            <label for="title">Title</label>
            <input id="title" className="postTitle" required onChange={e => setTitle(e.target.value)} value={title}/>
        </div>
        <div>
            <label for="author">Author</label>
            <input id="author" className="author" required onChange={e => setAuthor(e.target.value)} value={author}></input>
        </div>
        <hr/>
        <textarea id="postBody" className="postBody" required onChange={e => setContent(e.target.value)} value={content}></textarea>
        <br/>
    </>
  )
}

export default BlogInput
