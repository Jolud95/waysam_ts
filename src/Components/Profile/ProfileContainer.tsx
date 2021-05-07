import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: any
}
type MapDispatchPropsType = {
    setUserProfile: (profile: any) => void
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
            axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
                .then(response => {
                    this.props.setUserProfile(response.data);
                });
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
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

