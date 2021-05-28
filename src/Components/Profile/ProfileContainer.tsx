import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/statesType";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: null | ProfileType
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
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
};


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
