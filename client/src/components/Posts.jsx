import React, { useState } from 'react'

// import Thumbnail1 from '../images/blog1.jpg'
// import Thumbnail2 from '../images/blog2.jpg'
// import Thumbnail3 from '../images/blog3.jpg'
// import Thumbnail4 from '../images/blog4.jpg'

import PostItem from './PostItem'

import { DUMMY_POSTS } from '../data'

// const DUMMY_POSTS = [
//     {
//         id:"1",
//         thumbnail: Thumbnail1,
//         category: 'education',
//         title:'This is the title of the very firt post in this blog',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, obcaecati reiciendis cupiditate blanditiis laborum perferendis eius natus rerum quos dolores expedita commodi dolorum adipisci dicta a sed voluptate, fugiat fuga saepe veniam dolor esse distinctio omnis temporibus. Numquam mollitia, corporis nesciunt deleniti optio veniam libero facilis ab accusantium et modi!',
//         authorID: 3
//     },

//     {
//         id:"2",
//         thumbnail: Thumbnail2,
//         category: 'science',
//         title:'Second Post',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, obcaecati reiciendis cupiditate blanditiis laborum perferendis eius natus rerum quos dolores expedita commodi dolorum adipisci dicta a sed voluptate, fugiat fuga saepe veniam dolor esse distinctio omnis temporibus. Numquam mollitia, corporis nesciunt deleniti optio veniam libero facilis ab accusantium et modi!',
//         authorID: 1
//     },

//     {
//         id:"3",
//         thumbnail: Thumbnail3,
//         category: 'weather',
//         title:'This is the title of the third post in this blog',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, obcaecati reiciendis cupiditate blanditiis laborum perferendis eius natus rerum quos dolores expedita commodi dolorum adipisci dicta a sed voluptate, fugiat fuga saepe veniam dolor esse distinctio omnis temporibus. Numquam mollitia, corporis nesciunt deleniti optio veniam libero facilis ab accusantium et modi!',
//         authorID: 13
//     },

//     {
//         id:"4",
//         thumbnail: Thumbnail4,
//         category: 'farming',
//         title:'This is the title of the second post in this blog',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, obcaecati reiciendis cupiditate blanditiis laborum perferendis eius natus rerum quos dolores expedita commodi dolorum adipisci dicta a sed voluptate, fugiat fuga saepe veniam dolor esse distinctio omnis temporibus. Numquam mollitia, corporis nesciunt deleniti optio veniam libero facilis ab accusantium et modi!',
//         authorID: 11
//     },


// ]


const Posts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS)

  return (
    // <div>Posts</div>
    <section className="posts"> 

      {posts.length > 0 ?  <div className="container posts__container">
       {
        posts.map(({id, thumbnail, category, title, description, authorID}) => 
        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} 
        description={description} authorID={authorID} />)
       }
       </div> : <h2 className='center'>No Posts Found</h2>}

    </section>

  )
}

export default Posts