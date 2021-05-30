import React from 'react';

export default function Component(){
    return (
    <div className="relative bg-highlight">
        <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
                <p className="font-medium text-gray-700">
            <span className="md:hidden">
              We announced a new product!
            </span>
            <span className="hidden md:inline">
              Big news! Pre-orders now open...
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="/" className="text-primary font-bold underline">
                Register Yourself Now &rarr;
              </a>
            </span>
                </p>
            </div>
        </div>
    </div>
);
}
