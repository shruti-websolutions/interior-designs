import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Reusable Button Component:
 * - variant='primary': Parrot green (#8ec641), text-black, sharp corners (rounded-none).
 * - variant='secondary': Dark frosted glass with subtle border, sharp corners.
 * - Supports both `<button>` and `<a>` when `href` is supplied.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  target,
  rel,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 text-sm transition-all duration-200 cursor-pointer rounded-none'; // No rounded edges

  const variants = {
    primary:
      'bg-[#8ec641] hover:bg-[#9bd44e] text-black font-semibold px-8 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base tracking-wide shadow-md shadow-[#8ec641]/20 hover:shadow-lg hover:shadow-[#8ec641]/30 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-black/20 sm:bg-black/30 hover:bg-black/30 sm:hover:bg-white/10 text-neutral-950 sm:text-white font-medium px-8 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base border border-[#8ec641] hover:border-[#9bd44e] tracking-wide shadow-sm hover:shadow-[0_0_20px_rgba(142,198,65,0.25)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'bg-transparent hover:bg-white/10 text-white font-medium px-6 py-3.5 border border-white/20',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
