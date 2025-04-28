/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import additionalServicesImage from "@/assets/home/additional-service.png";

const AdditionalServices = () => {
    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                {/* Main Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-800 mb-4">Additional Services</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>
                {/* Content with Image (standard order) */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="lg:w-1/2 w-full">
                        <Image
                            src={additionalServicesImage}
                            width={1000}
                            height={1000}
                            alt="Additional swimming services"
                            className="w-full h-auto rounded-xl shadow-xl"
                        />
                    </div>
                    {/* Right Column - Services */}
                    <div className="lg:w-1/2 w-full space-y-8">
                        {/* Life Guarding Service */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">Life Guarding Service</h4>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>At your next social gathering we will provide supervision of your pool so you can entertain without having to worry about the pool</li>
                                <li><span className="font-medium">Minimum 3hr booking</span></li>
                            </ul>
                        </div>
                        {/* Adult Learn to Swim */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">Adult Learn to Swim</h4>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>No matter what your age is it's never too late to learn how to swim</li>
                                <li>We work with you to help you progress and become a more confident swimmer no matter what level you're at</li>
                            </ul>
                        </div>
                        {/* Stroke Correction */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">Stroke Correction</h4>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Geared to those who are in need of a tune up with their strokes such as Triathletes</li>
                                <li>For those wanting to improve the overall foundation of their strokes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdditionalServices;