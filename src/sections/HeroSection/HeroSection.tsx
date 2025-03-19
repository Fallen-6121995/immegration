import React from 'react';
import { HeroSectionProps } from '@/common/Interfaces/Interfaces';
import { FaUser, FaEnvelope, FaPhone, FaMapPin } from "react-icons/fa";

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage, title, subtitle, height = '100vh', children }) => {
    return (
        <section
            className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-12 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})`, height }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Left Side - Text Content */}
            <div className="relative z-10 text-white max-w-2xl w-full text-left">
                {title && (
                    <h1 className="text-3xl md:text-5xl font-bold leading-snug max-w-[20ch]">
                        {title}
                    </h1>
                )}
                {subtitle && <p className="text-lg md:text-xl mt-4 max-w-[40ch]">{subtitle}</p>}

                {/* Additional Children (Bullet Points, CTA, etc.) */}
                {children}
            </div>

            {/* Right Side - Form with Minimal Gradient */}
            <div className="relative z-10 p-8 rounded-2xl shadow-xl w-full md:w-1/3 mt-8 md:mt-0 bg-gradient-to-br from-white via-white via-[45%] to-primary/80">
                <h2 className="text-2xl font-bold text-primary mb-6 text-center leading-tight">
                    Book Your Free Consultation <br />
                    <span className="text-secondary text-2xl">Today!</span>
                </h2>

                <form className="space-y-4">
                    <div className="relative flex items-center">
                        <FaUser className="absolute left-4 text-primary text-lg" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:outline-none"
                            required
                        />
                    </div>
                    <div className="relative flex items-center">
                        <FaEnvelope className="absolute left-4 text-primary text-lg" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:outline-none"
                            required
                        />
                    </div>
                    <div className="relative flex items-center">
                        <FaPhone className="absolute left-4 text-primary text-lg" />
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:outline-none"
                            required
                        />
                    </div>
                    <div className="relative flex items-center">
                        <FaMapPin className="absolute left-4 text-primary text-lg" />
                        <input
                            type="text"
                            placeholder="Pincode"
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:outline-none"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-secondary transition-all shadow-md"
                    >
                        Book Your Free Consultation
                    </button>
                </form>
            </div>
        </section>
    );
};

export default HeroSection;
