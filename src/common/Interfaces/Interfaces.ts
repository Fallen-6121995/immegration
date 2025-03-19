import { IconType } from "react-icons"
import {  } from "react-icons/fa";

export interface NavbarLink {
  id: number;
  path: string;
  title: string;
}

export interface DesktopNavbarProps {
  links: NavbarLink[];
}

export interface MobileNavbarProps {
  links: NavbarLink[];
  isOpen: boolean;
  toggleMenu: () => void;
}

export interface SectionHeadingProps {
  heading: string;
  subheading: string;
}

export interface HeroSectionProps {
  backgroundImage: string;
  title?: string;
  subtitle?: string;
  height: string;
  children?: React.ReactNode;
}

export interface InfoItem {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface InfoSectionProps {
  items: InfoItem[];
  columns?: string;
}

export interface ServiceItem {
  id:number;
  icon: IconType;
  title: string;
  description: string;
}

export interface ServiceSectionProps {
  items: ServiceItem[];
}