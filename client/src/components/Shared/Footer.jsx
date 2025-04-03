import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
 
export default function Footer() {
    return (
        <footer className="bg-primary p-6">
                <div className="px-4 sm:px-0">
                    <h3 className="text-2xl text-white mb-4">
                        Stay Updated
                    </h3>
                    <form className="flex items-center justify-center space-x-2">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email"
                            className="px-4 py-2 sm:w-auto border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                        <Button variant="outline">Subscribe</Button>
                    </form>
                </div>
        </footer>
    );
}