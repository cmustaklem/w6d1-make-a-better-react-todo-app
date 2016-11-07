//Loading other libraries, it is loading them and placing them into a variable
//we always start are the plural "Posts", and have Post children
import React from 'react'
import ReactDOM from 'react-dom'
import Posts from '../components/Posts'

function renderView(data) {
    ReactDOM.render(
        <Posts data={data} />, //babel replaces this tag and makes it and "data" are props, which allows someone to place in values... You cannot only mount one component

        document.getElementById('posts') //this is the ID that you are using on the page
    )
}


renderView(posts)
