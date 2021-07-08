import styles from "./Paginator.module.css";
import React, {useState} from "react";

type PaginatorPropsType = {
    portionSize: number
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanges: (pageNumber: number) => void
}


let Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

            {(pages || [])
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={(props.currentPage === p) ? styles.selectedPage : styles.pageNumber}
                                 onClick={(e) => {
                                     props.onPageChanges(p)
                                 }}>{p}</span>
                })}

            {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}
export default Paginator;