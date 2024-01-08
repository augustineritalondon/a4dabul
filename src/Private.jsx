import React from 'react';

const ProtectedRoute = ({ token, children }) => {

    if (token) return children
    return <Navigate to="/" replace />
}

export default ProtectedRoute