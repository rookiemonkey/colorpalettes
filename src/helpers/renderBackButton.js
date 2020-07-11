import React from 'react';
import { Link } from 'react-router-dom';

const renderBackButton = props => {

    return (
        <div className="ColorBox-container back-button-container" id="ColorBox-single">

            <div
                className='ColorBox-overlay'
            ></div>

            <div className='ColorBox-overlay-message'>
                <h1>COPIED!</h1>
            </div>

            <div className="ColorBox-copy-container">
                <div className="ColorBox-content-container">
                    <span className='ColorBox-name'></span>
                </div>
                <button
                    id="ColorBox-back"
                    onClick={() => { props.goBack() }}
                >BACK</button>
            </div>

        </div>
    )
}

export default renderBackButton;