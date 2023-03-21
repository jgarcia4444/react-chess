import React from 'react';

const LeaderboardRow = ({userInfo, rowIndex}) => {

    const {username, wins, losses, winPercentage, firstMatch} = userInfo;

    const computedStyle = () => {
        return rowIndex % 2 === 0 ?
        "bg-blue-500 text-white"
        :
        "bg-white"
    }

    return (
        <div className={`${computedStyle()} flex flex-row w-full py-3 px-2`}>
            <div className="w-10 text-left">{rowIndex + 1}</div>
            <div className="text-left w-2/6">{username}</div>
            <div className="w-1/6 text-left">{wins}</div>
            <div className="w-1/6 text-left">{losses}</div>
            <div className="w-1/6 text-left">{winPercentage}%</div>
            <div className="w-2/6 text-left">{firstMatch}</div>
        </div>
    )
};

export default LeaderboardRow;