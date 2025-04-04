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
        <footer className="w-full p-6">
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
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Useful Links</h3>
                            <ul>
                            <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Shop</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Customer Service</h3>
                            <ul>
                            <li><a href="#" class="text-gray-400 hover:text-white">FAQ</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Shipping Info</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Returns</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
                            <ul>
                            <li><a href="#" class="text-gray-400 hover:text-white">Facebook</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Twitter</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Instagram</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">YouTube</a></li>
                            </ul>

                            <div class="text-center mt-8">
                                <p class="text-gray-400 text-sm">© 2025 Neko All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    );
}