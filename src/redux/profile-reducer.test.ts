import {ProfilePageType} from "./statesType";
import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";


let state: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 10},
    ],
    profile: null,
    status: ""
}

it('new post should be added', () => {
    let action = addPostActionCreator("Hello, my friend")
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)

})
it('new message should be added', () => {
    let action = addPostActionCreator("Hello, my friend")
    let newState = profileReducer(state, action)
    expect(newState.posts[2].message).toBe("Hello, my friend")
})

it('post should be removed', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})

it('post with incorrect id not should be removed', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})