"use client";
import React, { useState } from 'react';
import { dreamCountries } from '@/data/data';
import ReactCountryFlag from 'react-country-flag';
import SectionHeading from '@/components/SectionHeading/SectionHeading';

const TopUniversitiesSection = () => {
const [selectedCountryCode, setSelectedCountryCode] = useState(dreamCountries[0].code);
  const selectedCountry = dreamCountries.find(country => country.code === selectedCountryCode);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <SectionHeading heading='Top Countries' subheading='' />
        <div className="flex justify-center mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4">
            {dreamCountries?.map((country) => (
              <button
                key={country.code}
                onClick={() => setSelectedCountryCode(country.code)}
                className={`flex items-center px-4 py-2 rounded-t-lg transition-colors duration-300 ${
                  selectedCountryCode === country.code
                    ? 'bg-white text-blue-600 shadow-md border-b-2 border-blue-600'
                    : 'bg-blue-200 text-gray-600 hover:bg-white hover:text-blue-600 hover:shadow-md'
                } focus:outline-none`}
              >
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    marginRight: '0.5em',
                  }}
                  title={country.name}
                />
                <span className="text-lg font-medium">{country.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCountry?.universities.map((university, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center transition-transform duration-300 hover:border-r-4 hover:border-blue-600"
            >
              <img
                src={university.logo}
                alt={`${university.name} logo`}
                className="w-16 h-16 mr-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{university.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopUniversitiesSection;
