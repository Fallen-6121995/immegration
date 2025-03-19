import React from "react";
import { ServiceSectionProps } from "@/common/Interfaces/Interfaces";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
const ServicesSection: React.FC<ServiceSectionProps> = ({ items }) => {
    return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <SectionHeading heading="Our Services" subheading="Discover our diverse range of services that guide your study abroad journey."/>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card break-inside-avoid mb-6 bg-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative"
              >
                <div className="flex justify-center items-center h-20 w-20 mx-auto bg-primary/10 text-primary rounded-full">
                  <IconComponent className="text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mt-4 text-gray-800 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 text-center">{service.description}</p>
                {/* {service.linkUrl && (
                  <a
                    href={service.linkUrl}
                    className="mt-4 block text-center text-primary font-medium border border-primary rounded-full px-4 py-2 transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    {service.linkText}
                  </a>
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
    );
};

export default ServicesSection;
