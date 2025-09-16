import localTailwindConfig from '@root/tailwind.config';
import { parseColor } from 'tailwindcss/lib/util/color';
import resolveConfig from 'tailwindcss/resolveConfig';
import _map from 'lodash/map';
import _startCase from 'lodash/startCase';
import classNames from 'classnames';

const Swatch = ({ category = '' }) => {
  const tailwindConfig = resolveConfig(localTailwindConfig);
  const { theme: { colors: allColors = {} } = {} } = tailwindConfig || {};

  function copyText(event) {
    const clipboardText = event.target.querySelector('.clipboard-text');
    const clipboardColor = event.target.querySelector('.clipboard-color');
    const copiedText = clipboardColor.textContent;
    navigator.clipboard.writeText(copiedText);

    clipboardText.classList.add('opacity-100');
    clipboardText.innerText = 'Copied!';

    setTimeout(() => {
      clipboardText.classList.remove('opacity-100');
      clipboardText.innerText = '';
    }, 500);
  }

  const clipBoardSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-clipboard"
      viewBox="0 0 16 16"
    >
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
    </svg>
  );

  const clipboardText = 'Copy to clipboard';
  const currentColor = allColors[category];

  const swatchWrapperClasses = classNames(
    'rounded-md',
    'relative',
    'border',
    'border-neutral-400',
    'text-left',
    'text-base',
    'flex',
    'flex-col'
  );
  const swatchClasses = classNames(
    'w-full',
    'aspect-square',
    'rounded-t-md',
    'flex-none',
    'relative'
  );
  const buttonClasses = classNames(
    'flex',
    'group',
    'items-center',
    'text-left',
    'gap-1',
    'sb-unstyled'
  );
  const colorNameClasses = classNames(buttonClasses, 'font-bold');
  const colorCodeClasses = classNames(buttonClasses, 'text-xs');
  const colorCssPropertyClasses = classNames(
    colorCodeClasses,
    'pt-1',
    'mt-1',
    'border-t',
    'border-neutral-400',
    'w-full'
  );
  const colorClasses = classNames(
    'clipboard-color',
    'pointer-events-none',
    'text-ellipsis',
    'overflow-hidden'
  );
  const textClasses = classNames(
    'clipboard-text',
    'pointer-events-none',
    'opacity-0',
    'scale-85',
    'font-normal',
    'text-xs',
    'transition-opacity',
    'bg-yellow-100'
  );
  const svgClasses = classNames(
    'clipboard-icon',
    'pointer-events-none',
    'opacity-0',
    'scale-75',
    'group-hover:opacity-100',
    'group-focus-visible:opacity-100',
    'transition-opacity',
    'flex-0'
  );

  const buttonMaker = (label, classes) => {
    return (
      <button
        key={label}
        onClick={copyText}
        aria-label={`${clipboardText} ${label}`}
        className={classes}
      >
        <span className={colorClasses}>{label}</span>
        <span className={svgClasses}>{clipBoardSvg}</span>
        <span className={textClasses}></span>
      </button>
    );
  };

  const makeColorTile = (color, colorKey, parentColorKey = '') => {
    const style = {
      backgroundColor: color,
    };
    const realColorKey = colorKey === 'DEFAULT' ? '' : colorKey;
    const separator = parentColorKey && realColorKey ? '-' : '';
    const variableName = `${parentColorKey}${separator}${realColorKey}`;
    const colorVariableName = `var(--${variableName})`;
    const parsedColor = parseColor(color);
    const rgb = parsedColor && parsedColor.color.join(', ');

    return (
      <div className={swatchWrapperClasses} key={variableName}>
        <div className={swatchClasses} style={style}></div>
        <div className="p-4 flex flex-col flex-grow">
          {buttonMaker(`${variableName}`, colorNameClasses)}
          {rgb && buttonMaker(`rgb(${rgb})`, colorCodeClasses)}
          {buttonMaker(color, colorCodeClasses)}
          <div className="mt-auto sb-unstyled">
            {colorVariableName && buttonMaker(`${colorVariableName}`, colorCssPropertyClasses)}
          </div>
        </div>
      </div>
    );
  };

  /**
   * Create a section for each color in the configuration.
   * @param colors
   * @param parentColorKey
   * @return {JSX.Element}
   */
  const getColorsTiles = (colors, parentColorKey) => {
    const title = _startCase(parentColorKey);
    // Skip the current, transparent and inherit colors.
    if (['current', 'transparent', 'inherit'].includes(parentColorKey)) {
      return null;
    }
    const colorElements =
      typeof colors === 'string'
        ? makeColorTile(colors, parentColorKey)
        : _map(colors, (color, key) => makeColorTile(color, key, parentColorKey));
    return (
      <section key={parentColorKey}>
        <h2 className="h2">{title}</h2>
        <section className="mt-6 mb-12 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {colorElements}
        </section>
      </section>
    );
  };

  const gradients = [
    'bg-gradient-green-dark-arch',
    'bg-gradient-green-dark',
    'bg-gradient-green-light',
    'bg-gradient-grey',
  ];

  return (
    <section>
      {_map(allColors, (colors, colorKey) => {
        return getColorsTiles(colors, colorKey);
      })}
      <section className="mt-6 mb-12">
        <h2>Gradients</h2>
        <section className="mt-6 mb-12 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            _map(gradients, (gradient) => {
            return (
              <div className={swatchWrapperClasses}>
                <div className={classNames(swatchClasses, gradient)}></div>
                <div className="p-4 flex flex-col flex-grow">
                  {buttonMaker(`${gradient}`, '')}
                </div>
              </div>
            );
          })}
      </section>
      </section>
    </section>
  );
};

export default Swatch;
