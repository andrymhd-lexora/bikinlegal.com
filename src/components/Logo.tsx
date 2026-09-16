import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
  showOwnership?: boolean;
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  showTagline = true,
  showOwnership = false,
  theme = 'auto',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const imageSrc = '/logo.png';

  const titleColorClass = 
    theme === 'dark' 
      ? 'text-white' 
      : theme === 'light' 
      ? 'text-slate-900' 
      : 'text-slate-900 dark:text-white';

  const taglineColorClass = 
    theme === 'dark' 
      ? 'text-slate-400' 
      : theme === 'light' 
      ? 'text-slate-500' 
      : 'text-slate-500 dark:text-slate-400';

  const ownershipColorClass = 
    theme === 'dark' 
      ? 'text-slate-400' 
      : theme === 'light' 
      ? 'text-slate-600' 
      : 'text-slate-600 dark:text-slate-400';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brand Logo Image with crisp container */}
      <div className={`${sizeClasses[size]} shrink-0 rounded-xl overflow-hidden bg-white dark:bg-slate-800 p-0.5 shadow-sm border border-slate-200/80 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}>
        <img
          src={imageSrc}
          alt="Logo BikinLegal.com"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/logo.png';
          }}
        />
      </div>

      {/* Typography & Subtitle */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight font-display ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${titleColorClass}`}>
              Bikin<span className="text-blue-600 dark:text-blue-400">Legal</span>
              <span className="text-amber-500">.com</span>
            </span>
          </div>

          {showTagline && (
            <span className={`text-[11px] font-medium leading-none mt-0.5 hidden sm:block ${taglineColorClass}`}>
              Jasa Pendirian PT, CV & Legalitas Usaha
            </span>
          )}

          {showOwnership && (
            <span className={`text-[10px] font-semibold tracking-wide ${ownershipColorClass}`}>
              Merek milik <span className="font-bold">PT. Bikin Legalitas Bisnis</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
};
