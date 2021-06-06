import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/statesType";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    posts: Array<PostsType>
}
type ValuesType = {
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    let onAddPost = (values: ValuesType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};

const AddNewPostForm: React.FC<InjectedFormProps<ValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<ValuesType>({form: "ProfileAddNewPostForm"})(AddNewPostForm);
export default MyPosts
