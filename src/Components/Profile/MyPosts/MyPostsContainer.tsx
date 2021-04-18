import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {StateType, StoreType} from "../../../redux/store";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {
                    let state: StateType = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    };
                    let onPostChange = (text: string) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
};
export default MyPostsContainer;
