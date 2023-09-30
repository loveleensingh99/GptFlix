import React from 'react';


export const Footer = () => {
    return (
        <footer className="px-16 py-20 bg-black ">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4">
                        <h3 className="mb-3 text-xl font-bold text-white">Links</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">Home</li>
                            <li className="mb-2">TV Shows</li>
                            <li className="mb-2">Movies</li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="mb-3 text-xl font-bold text-white">Help</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2">FAQ</li>
                            <li className="mb-2">Contact Us</li>
                            {/* Add more help links */}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="mb-3 text-xl font-bold text-white">Follow Us</h3>
                        <div className="flex">
                            <ul className="text-gray-400">
                                <li className="mb-2">Facebook</li>
                                <li className="mb-2">Twitter</li>
                                <li className="mb-2">Instagram</li>
                                {/* Add more links as needed */}
                            </ul>

                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="mb-3 text-xl font-bold text-white">Legal</h3>
                        <div className="flex">
                            <ul className="text-gray-400">
                                <li className="mb-2">Privacy Policy</li>
                                <li className="mb-2">Terms and conditions</li>
                                <li className="mb-2">Contact Us</li>

                            </ul>

                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        {/* Additional content for the fourth column */}
                    </div>
                </div>
            </div>
            <div className="py-10">
                <p className='text-center text-white text-md md:text-lg'>© 2023 GptFlix Developed by <span className='hover:underline'> <a href="https://loveleendev.netlify.app/" >Loveleen Singh</a> </span></p>
            </div>
        </footer>
    );
}