import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

function CurrencyDropdown() {
    const { currency, dispatch } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(currency);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        handleOptionClick(currency)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleOptionClick = (option) => {
        switch (option) {
            case '$':
                setSelectedOption('$ Dollar')
                break;
            case '£':
                setSelectedOption('£ Pound')
                break;
            case '€':
                setSelectedOption('€ Euro')
                break;
            case '₹':
                setSelectedOption('₹ Ruppee')
                break;

            default:
                break;
        }
        dispatch({
            type: 'CHG_CURRENCY',
            payload: option
        });
        setIsOpen(false);
    };

    return (
        <div className='alert' style={{ backgroundColor: '#C5FF95', padding: '4px' }} >

            <div className="dropdown">
                <div className="dropdown-toggle" onClick={toggleDropdown}>
                    {selectedOption || 'Selecciona una opción'}
                </div>

            </div>
            {isOpen && (
                <ul className="dropdown-menu-style">
                    <li onClick={() => handleOptionClick('$')}>$ Dollar</li>
                    <li onClick={() => handleOptionClick('£')}>£ Pound</li>
                    <li onClick={() => handleOptionClick('€')}>€ Euro</li>
                    <li onClick={() => handleOptionClick('₹')}>₹ Ruppee</li>
                </ul>
            )}
        </div>
    )
}

export default CurrencyDropdown