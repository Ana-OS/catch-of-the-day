import React from 'react';
import PropTypes from 'prop-types';
// propTypes specifies the type of data that needs to be passed on

const Header = ({subtitle}) => (
    <header className="top">
        <h1>
            Catch 
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span> 
            Day
        </h1>  
        <h3 className="tagline">
            <span>{subtitle}</span>
        </h3>
    </header>  
)

Header.propTypes = {
    subtitle: PropTypes.string.isRequired
}
export default Header