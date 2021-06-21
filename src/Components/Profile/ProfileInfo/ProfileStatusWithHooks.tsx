import React, {ChangeEvent, useEffect, useState} from "react";


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [status, setStatus] = useState<string>(props.status);
    const [editMode, setEditMode] = useState<boolean>(false);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        let newStatus =  e.target.value;
        setStatus(newStatus);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;