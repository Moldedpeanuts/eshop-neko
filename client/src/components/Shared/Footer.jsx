import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
 
export default function Footer(value, onSubmit) {
    const regex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';

    const [email, setEmail] = useState('');

    

    return (
        <footer className="w-full bg-primary p-6">
                <div className="w-full px-4">
                    <h3 className="text-3xl text-white mb-4 text-center">
                        Subscribe to our Newsletter
                    </h3>
                    <form className="flex items-center justify-center space-x-2 w-full">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email"
                            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                            required
                        />
                        <Button variant="outline">Subscribe</Button>
                    </form>
                </div>
        </footer>
    );
}