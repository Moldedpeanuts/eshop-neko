import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
 
export default function Footer() {
    return (
        <footer className="bg-primary p-6">
            <div className="container mx-auto text-center">
                <div className="mb-6">
                    <h3 className="text-2xl mb-4">
                        Stay Updated
                    </h3>
                    <form className="flex items-center justify-center space-x-2">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email"
                            className="px-4 py-2 w-full sm:w-auto border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button>test</Button>
                    </form>
                </div>
            </div>
        </footer>
    );
}