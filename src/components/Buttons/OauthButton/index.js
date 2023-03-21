import React from 'react';

import AppleLogo from '../../../media/logos/apple-logo.png';

const OAuthButton = ({isLogin, isGoogleOAuth}) => {

    const configuredSrc = () => {
        if (isGoogleOAuth === true) {
            return "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
        } else {
            return AppleLogo;
        }
    }

    return (
        <button className="w-full bg-white rounded flex flex-row justify-center font-bold text-blue-500 mt-4 align-middle h-9 hover:opacity-75">
            <span className="mr-4 self-center">
                {isLogin === true ? "Login" : "Sign Up"} with {isGoogleOAuth === true ? "Google" : 'Apple'}
            </span>
              <img src={configuredSrc()} alt={"Company Logo"} loading="lazy" className={` rounded-full ${isGoogleOAuth === true ? "w-6" : "w-8"} self-center`} />
        </button>
    )
}

export default OAuthButton;