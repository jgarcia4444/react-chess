import React from 'react';
import { connect } from 'react-redux';
import {FiLoader} from 'react-icons/fi';

const AuthSubmitButton = ({isLogin, authSubmitClick, loading}) => {

    const renderButtonDisplay = () => {
        if (loading === true) {
            return <FiLoader color={'#fff'} className="animate-spin" size={22}/>
        } else {
            return isLogin === true ? "Login" : "Sign Up"
        }
    }

    return (
        <button onClick={authSubmitClick} className="w-full my-2 bg-blue-500 py-2 rounded text-white font-bold hover:bg-blue-600 flex flex-row justify-center">
            {renderButtonDisplay()}
        </button>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
    }
}

export default connect(
    mapStateToProps,
    null
)(AuthSubmitButton);