import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
const Footer = () => {
    return (

        <footer className="bg-gray-200 py-8 flex" >
            <div className="w-full mx-auto px-4">
                <div className="container text-center mx-auto px-4 pb-1 text-gray">
                    <div className="text-center text-xl font-bold text-gray-600">Social Media
                        <ul>
                            <li>
                                <Link href='/'><FontAwesomeIcon size='2xl' className='p-2' icon={faInstagram} /></Link>
                            </li>
                            <li>
                                <Link href='/'><FontAwesomeIcon size='2xl' className='pt-2' icon={faFacebook} /></Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <hr style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    height: '3px',
                }} />
                <p className="text-center text-gray-600 p-2">
                    {new Date().getFullYear()} Weeding Book. All rights reserved.
                </p>

            </div>

        </footer>
    );
};

export default Footer;