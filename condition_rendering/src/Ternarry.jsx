import React from 'react'

const Ternarry = () => {
    
    const isLoggedIn = false
    
    return (
        <>
            <div>Ternarry</div>
            {isLoggedIn ? "Dashboard Access Given" : "Access denied"}
        </>
    )
}

export default Ternarry