import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
 
export default function Footer() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="w-full">
                <div className="bg-primary w-full px-4 py-12">
                    <h3 className="text-3xl text-white mb-4 text-center">
                        Subscribe to our Newsletter
                    </h3>
                    <form className="flex items-center justify-center space-x-2 w-full" onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Enter Your Email"
                            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                            onChange={handleChange}
                            required
                            value={email}
                        />
                        <Button variant="outline" type="submit">Subscribe</Button>
                    </form>
                </div>
                <div className="container mx-auto px-6 py-12">
                    <div className="flex flex-wrap justify-between gap-6">
                        {/* Useful Links Column */}
                        <div className="flex-1 min-w-[200px]">
                            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                            <ul className="flex flex-col items-center">
                                <li><a href="#" className="text-gray-400 hover:text-primary">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Shop</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Contact</a></li>
                            </ul>
                        </div>
                        
                        {/* Customer Service Column */}
                        <div className="flex-1 min-w-[200px]">
                            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                            <ul className="flex flex-col items-center">
                                <li><a href="#" className="text-gray-400 hover:text-primary">FAQ</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Shipping Info</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Returns</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Privacy Policy</a></li>
                            </ul>
                        </div>
                        
                        {/* Follow Us Column */}
                        <div className="flex-1 min-w-[200px]">
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <ul className="flex flex-col items-center">
                                <li><a href="#" className="text-gray-400 hover:text-primary">Facebook</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Twitter</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">Instagram</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-primary">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Acknowledgements */}
                    <div className="flex justify-start text-center mt-8">
                        <p className="text-gray-400 text-sm">© 2025 Neko All rights reserved.</p>
                    </div>
                </div>
        </footer>
    );
}