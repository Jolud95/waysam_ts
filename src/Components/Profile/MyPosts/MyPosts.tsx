import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/statesType";
import React, {ChangeEvent} from "react";

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: Array<PostsType>
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text: string = e.currentTarget.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};
export default MyPosts
