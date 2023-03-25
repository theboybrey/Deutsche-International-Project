import React from 'react'
import '../styles/LoginScreen.css'
import FilterSection from './FilterSection'

const PendingAdmission = () => {
    return (
        <div className='pending-section items-center justify-center flex mx-auto rounded'>

            {/* Filter Component */}
            <FilterSection/>

            {/* Pending Admission Formats */}
            <div className="user-pending-admission bg-black">

            </div>

        </div>
    )
}

export default PendingAdmission