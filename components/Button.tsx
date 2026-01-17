import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "relative px-8 py-3 transition-all duration-500 ease-out font-sans text-sm tracking-widest uppercase font-medium overflow-hidden group";

  const variants = {
    primary: "bg-obsidian text-cream border border-obsidian hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
    secondary: "bg-cream text-obsidian border border-obsidian hover:bg-obsidian hover:text-cream",
    outline: "bg-transparent text-cream border border-cream hover:bg-cream hover:text-obsidian"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2 justify-center">{children}</span>

      {/* Primary Button Sheen Effect */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 ease-in-out" />
      )}
    </button>
  );
};
