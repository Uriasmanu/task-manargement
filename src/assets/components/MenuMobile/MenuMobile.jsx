// MenuMobile.jsx
import React from 'react';
import './_menuMobile.scss';

const MenuMobile = ({ onClick }) => {
    return (
        <button >
            <input id="checkbox" type="checkbox" onClick={onClick}/>
                <label className="toggle" htmlFor="checkbox">
                    <div id="bar1" className="bars"></div>
                    <div id="bar2" className="bars"></div>
                    <div id="bar3" className="bars"></div>
                </label>
        </button>

    );
}

export default MenuMobile;
