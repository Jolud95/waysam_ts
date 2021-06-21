import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preolader/Preloader";
import {ProfileType} from "../../../redux/statesType";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OrkIBshFdNqomsJQDXnJu64boaLgt29mBQ&usqp=CAU'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
};
export default ProfileInfo;
