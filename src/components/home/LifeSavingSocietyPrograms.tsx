import React from 'react';
import lifeSavingSocietyImage from "@/assets/home/life-saving.png";
import Image from 'next/image';

const LifeSavingSocietyPrograms = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Life Saving Society Programs</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Content with Image (reversed order) */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Programs */}
          <div className="lg:w-1/2 w-full space-y-8 order-2 lg:order-1">
            {/* Swim Patrol Program */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <h4 className="text-2xl font-semibold text-blue-800 mb-3">Swim Patrol (Rookie, Ranger, & Star) 3 Level Program</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-medium">Content is organized into 3 groups</span> – Water Proficiency, First Aid, and Rescue</li>
                <li>Swim Patrol develops swimming strength and efficiency with emphasis on smart water behavior</li>
                <li>Skill drills enhance capability in the water, good physical conditioning and lifesaving judgment</li>
              </ul>
            </div>

            {/* Bronze Medal Awards */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="text-2xl font-semibold text-blue-800 mb-3">Bronze Medal Awards</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><span className="font-medium">Bronze Star</span> is the only prerequisite to Bronze Star. You'll learn CPR and practice problem-solving and decision-making</li>
                <li><span className="font-medium">Bronze Medallion</span> - If you hold Bronze Star you can take Bronze Med. regardless of your age. Otherwise you have to be a minimum of 13 years</li>
                <li><span className="font-medium">Bronze Cross</span> - Required to become a lifeguard or instructor. If you hold Bronze Medallion and Emergency First Aid, you can take Bronze Cross regardless of your age</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <Image
              src={lifeSavingSocietyImage}
              width={1000}
              height={1000}
              alt="Life Saving Society training programs"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeSavingSocietyPrograms;