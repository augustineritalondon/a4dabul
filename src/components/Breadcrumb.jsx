import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
    return (
        <div className='bg-primary py-2 block relative z-40'>
            <div className='a4dbul-container flex justify-between'>
                <div className='self-center flex justify-between'>
                    <p className='text-white text-xs md:text-sm lg:text-base '>Free Call: +234 704 067 1352</p>
                    <p className='text-white text-xs md:text-sm lg:text-base ml-5'>Opening Hours: Mon-Fri: 8am - 5:30pm</p>
                    <ul className='md:hidden'>
                        <li className='mx-2'> <Link to="/admin/login"><img src="https://img.icons8.com/glyph-neue/35/ffffff/administrator-female.png" alt="administrator-female" /></Link> </li>

                    </ul>
                </div>
                <ul className='md:flex self-center hidden'>
                    <li className='mx-2'> <a href="https://www.facebook.com/omolola.iroko.79"><img src="https://img.icons8.com/ios-filled/18/ffffff/facebook-new.png" /></a> </li>
                    <li className='mx-2'> <a href="https://www.a4dabul.com/"><img src="https://img.icons8.com/ios-glyphs/18/ffffff/google-logo--v1.png" /></a> </li>
                    <li className='mx-2'> <a href="https://www.instagram.com/A4dabul"><img src="https://img.icons8.com/ios-glyphs/18/ffffff/instagram-new.png" /></a> </li>
                    <li className='mx-2'> <a href="https://twitter.com/IrokoOmolola1"><img src="https://img.icons8.com/ios-glyphs/18/ffffff/twitter--v1.png" /></a> </li>
                    {/* <li className='mx-2'> <Link to="/admin/login"><img src="https://img.icons8.com/glyph-neue/23/ffffff/administrator-female.png" alt="administrator-female" /></Link> </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb