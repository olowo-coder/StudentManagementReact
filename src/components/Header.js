import React from 'react';
import Button from './Button';

function Header({ onAdd, showAdd }) {
    const onClick = () =>{
        console.log('clicked')
    }

    // const location = useLocation();

    return (
            <Button 
            onClick={onAdd}
            color={showAdd ? 'btn btn-danger btn-sm mb-3' : 'btn btn-primary btn-sm mb-3'} 
            text={showAdd ? 'Close' : 'Add Student'} />
    )
}

export default Header
