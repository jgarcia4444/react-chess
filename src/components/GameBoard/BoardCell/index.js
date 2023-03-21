import React from 'react';

const BoardCell = ({isEven}) => {

    return (
        <div className={`${isEven === true ? "bg-blue-500" : "bg-orange-500"} w-14 h-14`}>
            Cell
        </div>
    )
};

export default BoardCell;