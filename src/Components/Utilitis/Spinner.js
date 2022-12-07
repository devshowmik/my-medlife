import React, { useContext } from 'react';
import { DarkContext } from '../../Context/DarkMode/DarkMode';

const Spinner = () => {
    const { darkMode } = useContext(DarkContext)
    return (
        <div>
            <div className={`spinner-border ${darkMode ? 'text-light' : 'text-dark'}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;