import React from 'react';

import Container from '../../shared/Container';
import PageTitle from '../../components/PageTitle';
import LeaderboardRow from '../../components/LeaderboardRow';

const LeaderBoard = () => {

    const leaderData = {
        username: "grandMaster",
        wins: 25,
        losses: 0,
        winPercentage: 100,
        firstMatch: "March 21, 2023",
    }

    const renderRows = () => {
        let leaderRows = [];
        let i = 0;
        while (i < 10) {
            leaderRows.push(<LeaderboardRow key={i} rowIndex={i} userInfo={leaderData}/>)
            i += 1
        }
        return leaderRows;
    }

    return (
        <Container>
            <div className="w-3/4 h-full m-auto text-left">
                <PageTitle title={'Leaderboard'} />
                <div className="w-full">
                    <div className="p-2 bg-gray-400 rounded-t flex flex-row">
                        <div className="w-10 text-left">Rk.</div>
                        <div className="text-left w-2/6">Username</div>
                        <div className="w-1/6 text-left">Wins</div>
                        <div className="w-1/6 text-left">Losses</div>
                        <div className="w-1/6 text-left">Win%</div>
                        <div className="w-2/6 text-left">First Match</div>
                    </div>
                    <div className="overflow-y-auto h-72 w-full">
                        {renderRows()}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LeaderBoard;