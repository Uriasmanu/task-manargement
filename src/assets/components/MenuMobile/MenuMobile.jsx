// MenuMobile.jsx
import React from 'react';
import './_menuMobile.scss';

const MenuMobile = ({ onClick }) => {
    return (
        <button >
            <input id="checkbox" type="checkbox" onClick={onClick}/>
                <label className="toggle" for="checkbox">
                    <div id="bar1" class="bars"></div>
                    <div id="bar2" class="bars"></div>
                    <div id="bar3" class="bars"></div>
                </label>
        </button>

    );
}

export default MenuMobile;
