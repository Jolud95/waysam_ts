import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import React from "react";
import {RouteComponentProps, withRouter, Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/store";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: null | ProfileType
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnProfileContainerPropsType = MapStateToPropsType & MapDispatchPropsType;
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnProfileContainerPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        {
            let userId = this.props.match.params.userId
            if (!userId) {
                userId = "2";
            }
            this.props.getUserProfile(userId)
        }
    }
    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
};

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

