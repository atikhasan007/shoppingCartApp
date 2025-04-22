import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../store/middlewares';

const PostList = () => {

    const {isLoading , posts, errorMessage} = useSelector((storeState) => storeState.post);
     
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPost);
    },[])



  return (
    <div>
        <h2>ALL Posts</h2>
        {isLoading && <h2>Loading....</h2>}
        {errorMessage && <h2>{errorMessage}</h2>}
        <ul>
            {posts.map((post) => {
                return (
                    <li key={post.id}>{post.id} - {post.title}</li>

                )
            })}
        </ul>
      
    </div>
  )
}

export default PostList
