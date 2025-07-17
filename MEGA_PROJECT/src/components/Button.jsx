import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}


// import React, { forwardRef } from 'react'

// // ✅ forwardRef allows parent components to directly access the button DOM node
// const Button = forwardRef(
//   function Button(
//     {
//       children,           // <Button> children (e.g., text or icons)
//       type = 'button',    // Type of button: 'button', 'submit', 'reset'
//       className = '',     // Extra styling passed from the parent
//       ...props            // Any other props like onClick, disabled, id, etc.
//     },
//     ref                  // Ref passed from the parent component
//   ) {
//     return (
//       <button
//         type={type}            // Button behavior type
//         ref={ref}              // Ref attached to the actual <button> DOM element
//         className={`           
//           px-6 py-2            // Padding
//           rounded-full         // Fully rounded corners
//           font-semibold        // Bold font
//           bg-blue-600          // Default background
//           text-white           // Text color
//           hover:bg-blue-700    // Hover color
//           transition duration-200  // Smooth hover transition
//           disabled:opacity-50      // Faded style when disabled
//           disabled:cursor-not-allowed  // Disable pointer when disabled
//           ${className}         // Merge with user-passed styles
//         `}
//         {...props}             // Spread any extra props like onClick, disabled, etc.
//       >
//         {children}             // Button content (text or icons)
//       </button>
//     )
//   }
// )

// export default Button
