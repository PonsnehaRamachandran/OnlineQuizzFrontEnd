import React from 'react';

function Header({ title }) {
    return (
        <div className="bg-secondary text-white">
            <div className="display-4 text-align:center">{title}</div>
            <hr />
        </div>
    );
}

export default Header;