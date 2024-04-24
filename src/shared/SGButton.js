import React from 'react'

const SGButton = ({ children, className, variant, ...props }) => {
    const getButtonStyle = () => {
        switch (variant) {
            case 'primary':
                return "bg-primary text-white !border-0 py-[17px] px-[30px] shadow-[4px_6px_0] shadow-[#050071] flex items-center gap-x-2.5";
            case 'secondary':
                return "text-[15px] font-poppins bg-yellow50";
            default:
                return '';
        }
    };
  return (
      <button className={`leading-none rounded-full border font-semibold shadow-common hover:shadow-none capitalize duration-200 min-w-fit font-poppins ${getButtonStyle()}  ${className || ''}`} {...props}>{children}</button>
  )
}

export default SGButton