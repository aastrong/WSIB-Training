import THEME_ICONS from '@root/dist/theme-icons';
import { useEffect, useState } from 'react';

const IconsGrid = () => {
  const [copied, setCopied] = useState(false);

  const buttonClasses = [
    'border',
    'border-primary-300',
    'p-4',
    'h-32',
    'text-center',
    'rounded-lg',
    'drop-shadow-sm',
    'hover:bg-dark',
    'hover:drop-shadow-md',
    'hover:text-white',
    'transition-all',
  ];

  const copyIcon = (iconKey) => {
    navigator.clipboard.writeText(`${iconKey}`).catch((e) => {});
    setCopied(iconKey);
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }

    return () => {};
  }, [copied, setCopied]);

  const icons =
    THEME_ICONS &&
    Object.keys(THEME_ICONS).map((iconKey) => {
      return (
        <button key={iconKey} className={buttonClasses.join(' ')} onClick={() => copyIcon(iconKey)}>
          <i className={`icon icon-${iconKey} text-4xl`} />
        </button>
      );
    });

  return (
    <section className="mt-10 relative sb-unstyled">
      <p className="font-bold bg-white p-2 py-6 m-0 sticky top-0 bg-white/80 backdrop-blur-lg z-10">
        Click to copy the icon id
        {
          copied && (<span className="!ml-2 inline-block px-2 py-0.5 bg-orange-300 text-black rounded-md text-xs">"{copied}" Copied!</span>)
        }
      </p>
      <section className="grid gap-4 grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
        {icons}
      </section>
    </section>
  );
};

export default IconsGrid;
