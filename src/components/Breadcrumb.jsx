import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Breadcrumb = () => {
    return (
        <div className='bg-primary py-2 block'>
            <div className='a4dbul-container flex justify-between'>
                <div className='self-center flex justify-between'>
                    <p className='text-white text-xs md:text-sm lg:text-base '>Free Call: +234 704 067 1352</p>
                    <p className='text-white text-xs md:text-sm lg:text-base ml-5'>Opening Hours: Mon-Fri: 9am - 6pm</p>
                </div>
                <ul className='md:flex self-center hidden'>
                    <li className='mx-2'><img src="https://img.icons8.com/ios-filled/18/ffffff/facebook-new.png" /></li>
                    <li className='mx-2'><img src="https://img.icons8.com/ios-glyphs/18/ffffff/google-logo--v1.png" /></li>
                    <li className='mx-2'><img src="https://img.icons8.com/ios-glyphs/18/ffffff/instagram-new.png" /></li>
                    <li className='mx-2'><img src="https://img.icons8.com/ios-glyphs/18/ffffff/twitter--v1.png" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb