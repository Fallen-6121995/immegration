import React from 'react'
import { SectionHeadingProps } from '@/common/Interfaces/Interfaces'

const SectionHeading:React.FC<SectionHeadingProps> = ({heading,subheading}) => {
  return (
    <div className="text-center mb-12">
          <h2 className="underline decoration-wavy decoration-4 decoration-[var(--secondaryThemeColor)] underline-offset-14 text-4xl font-bold text-gray-800 py-5">{heading}</h2>
          <p className="text-gray-600 mt-4 text-lg">
           {subheading}
          </p>
        </div>
  )
}

export default SectionHeading
