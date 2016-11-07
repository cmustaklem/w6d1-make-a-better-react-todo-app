import React, { Component } from 'react'
import Post from './Post'

const Posts = (props) => {//this is a function
    const PostItems = props.data.map((post, i) => {//map remaps the data and transforms the data into a list of components
        return <Post post={post} key={i} />
    }) //this is the top level element

    return (<div>
                <h1>Blog Post</h1>
                {PostItems}
           </div>
)
}

export default Posts
