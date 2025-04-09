import React from 'react';
import redCrosProgramImage from "@/assets/home/red-swim.png";
import Image, { StaticImageData } from 'next/image';

const RedCrossPrograms = () => {
    return (
        <section className="py-16 bg-blue-50" id="red-cross-program">
            <div className="container mx-auto px-4">
                {/* Main Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-800 mb-4">What Do We Offer?</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                {/* Content with Image */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="lg:w-1/2 w-full">
                        <Image
                            src={redCrosProgramImage}
                            width={1000}
                            height={1000}
                            alt="Children learning swimming with Red Cross"
                            className="w-full h-auto rounded-xl shadow-xl"
                        />
                    </div>

                    {/* Right Column - Programs */}
                    <div className="lg:w-1/2 w-full space-y-8">
                        {/* Section Header */}
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-black mb-2">Red Cross Programs</h3>
                            <p className="text-gray-600">Comprehensive swim education for all ages</p>
                        </div>

                        {/* Preschool Program */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">Red Cross Swim Preschool</h4>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><span className="font-medium">7-level preschool program</span> for 6 months and up</li>
                                <li>Children enter levels based on age and then progress based on either age or ability</li>
                                <li>Opportunity for parents and their children to become comfortable in the water and learn water safety at an early age</li>
                            </ul>
                        </div>

                        {/* Kids Program */}
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
                            <h4 className="text-2xl font-semibold text-blue-800 mb-3">Red Cross Swim Kids</h4>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><span className="font-medium">10-level program for kids.</span> Children feel proud of their achievement as they get through all levels</li>
                                <li>Swimming and Water Safety skills are taught in the water so kids are always active and wet</li>
                                <li>This approach promotes success and encourages lifelong fitness</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RedCrossPrograms;