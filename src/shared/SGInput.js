import React from 'react'

const SGInput = ({ children, className, variant, placeholder, ...props }) => {
    const getInputStyle = () => {
        switch (variant) {
            case 'contained':
                return "";
            case 'outlined':
                return "";
            case 'primary':
                return "placeholder:uppercase bg-primary50 w-full rounded-full p-3 sm:p-5 placeholder:leading-none placeholder:text-primaryLight50 text-primaryLight100";
            default:
                return '';
        }
    };
  return (
      <input className={`leading-none outline-none ${getInputStyle()} ${className || ''}`} placeholder={placeholder} {...props} />
  )
}

export default SGInput