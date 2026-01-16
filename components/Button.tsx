import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 transition-all duration-500 ease-out font-sans text-sm tracking-widest uppercase font-medium";
  
  const variants = {
    primary: "bg-obsidian text-cream hover:bg-charcoal border border-obsidian",
    secondary: "bg-cream text-obsidian border border-obsidian hover:bg-obsidian hover:text-cream",
    outline: "bg-transparent text-cream border border-cream hover:bg-cream hover:text-obsidian"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
