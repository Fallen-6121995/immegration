import React from 'react'
import { InfoSectionProps } from '@/common/Interfaces/Interfaces';

const InfoSection: React.FC<InfoSectionProps> = ({ items, columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" }) => {
    return (
        <section className="relative z-10 mt-[-50px] px-6 md:px-12 lg:px-20 xl:px-32">
            <div className={`grid ${columns} gap-6`}>
                {items.map((item,index) => {
                    const IconComponent = item.icon; // Dynamically render the icon component
                    return (
                        <div key={item.id} className="bg-gradient-to-br from-primary via-white via-[15%] to-white p-6 rounded-xl shadow-lg text-center">
                            <div className="flex justify-center items-center h-16 w-16 mx-auto bg-gray-100 rounded-full">
                                <IconComponent className="text-primary text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                            <a href={item.linkUrl} className="text-red-500 font-semibold mt-2 inline-block">
                                {item.linkText}
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default InfoSection;
