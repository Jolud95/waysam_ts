import styles from "./Paginator.module.css";
import React from "react";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanges: (pageNumber: number) => void
}


let Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {(pages || []).map((p) => {
                return <span key={p} className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChanges(p)
                             }}>{p}</span>
            })}
        </div>
    </div>
}
export default Paginator;