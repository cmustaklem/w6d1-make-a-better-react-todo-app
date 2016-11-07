import React , { Component } from 'react'

const Post = (props) => <div className="post">
    <img src={props.post.image} alt={props.post.title} />
    <h3>{props.post.title}</h3>
    <p className="lead">
    Published on {props.post.date} at {props.post.time}
    </p>
    <p>
        {props.post.body}
    </p>
    <span className="small">Author: {props.post.author}</span>
</div>

export default Post
