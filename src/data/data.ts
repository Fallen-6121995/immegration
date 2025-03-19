import { InfoItem, NavbarLink, ServiceItem } from "@/common/Interfaces/Interfaces"
import { FaBullseye, FaGlobe, FaUniversity, FaUserTie,FaChalkboardTeacher, FaPassport, FaSuitcaseRolling } from "react-icons/fa"

export const mainData = {
    websiteName: 'My Website',
    websiteDescription: 'This is my website description',
    websiteLogo: 'https://via.placeholder.com/150',
    phoneNumber: '123-456-7890',
    ctaMainHeading:"Start Your International Education Journey Today!"
}

export const navbarLinksData:NavbarLink[] = [
    {id:1, title: 'Home', path: '/' },
    {id:2, title: 'About', path: '/about' },
    {id:3, title: 'Services', path: '/services' },
    {id:4, title: 'Contact', path: '/contact' },
]

export const infoItems: InfoItem[] = [
    {
        icon: FaGlobe,
        title: "About Us",
        description: "When candidates like you aspire to build a career abroad...",
        linkText: "Read More",
        linkUrl: "#",
        id: 1,
    },
    {
        icon: FaUserTie,
        title: "Why Us",
        description: "If you have ever dreamed of studying abroad, we provide solutions...",
        linkText: "Read More",
        linkUrl: "#",
        id: 2,
    },
    {
        icon: FaBullseye,
        title: "Vision & Mission",
        description: "We aim to empower students with the best educational opportunities...",
        linkText: "Read More",
        linkUrl: "#",
        id: 3,
    },
    // {
    //     icon: FaUniversity,
    //     title: "Our Universities",
    //     description: "Explore top universities that partner with us for global education...",
    //     linkText: "Read More",
    //     linkUrl: "#",
    //     id: 4,
    // },
];

export const services: ServiceItem[] = [
    {
        id: 1,
        icon: FaChalkboardTeacher,
        title: "Expert Counseling",
        description: "Personalized guidance to help you choose the right path for studying abroad."
    },
    {
        id: 2,
        icon: FaGlobe,
        title: "Visa Assistance",
        description: "Hassle-free visa processing with our experienced consultants."
    },
    {
        id: 3,
        icon: FaUniversity,
        title: "University Selection",
        description: "Get matched with top universities that fit your career goals."
    },
    {
        id: 4,
        icon: FaPassport,
        title: "Application Processing",
        description: "End-to-end support in preparing and submitting applications."
    },
    {
        id: 5,
        icon: FaSuitcaseRolling,
        title: "Pre-Departure Support",
        description: "Everything you need to transition smoothly to your new country."
    },
  ];

  export const dreamCountries = [
    {
        id:1,
        name: 'United Kingdom',
        code: 'GB',
        universities: [
          { name: 'University of Oxford', logo: 'oxford-logo.png' },
          { name: 'University of Cambridge', logo: 'cambridge-logo.png' },
          // Add more universities as needed
        ],
      },
      {
        id:2,
        name: 'United States',
        code: 'US',
        universities: [
          { name: 'Harvard University', logo: 'harvard-logo.png' },
          { name: 'Stanford University', logo: 'stanford-logo.png' },
          // Add more universities as needed
        ],
      },
  ];