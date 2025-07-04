import React from 'react'
import '../../index.css'
export default function Error() {
    return (
        <>

            <div className="error-page flex items-center justify-center">
                <div className="error-container text-center me-5">
                    <h1 className="error-code mb-0">404</h1>
                    <h2 className="display-6 error-message mb-3">Page Not Found</h2>
                </div>
            </div>

        </>
    )
}
