
import React from 'react';

const Container = ({children}) => {

    return (
        <div className="flex flex-col w-screen justify-center text-center px-4 py-20 bg-slate-300 h-screen">
            {children}
        </div>
    )
}

export default Container;