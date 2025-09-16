export const BadgeType = {
  NEUTRAL: 'NEUTRAL',
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

const Badge = ({
  children = null,
  type = BadgeType.NEUTRAL,
}) => {
  const typeColors = {
    [BadgeType.NEUTRAL]: 'bg-gray-200',
    [BadgeType.INFO]: 'bg-blue-200',
    [BadgeType.SUCCESS]: 'bg-green-200',
    [BadgeType.WARNING]: 'bg-orange-200',
    [BadgeType.ERROR]: 'bg-red-200',
  };

  const classes = [
    'inline-block',
    'sb-anchor',
    'text-black',
    'rounded-md',
    'px-6 py-2',
    'font-bold',
    typeColors[type],
  ].join(' ');

  if (!children) {
    return null;
  }

  return (
    <a className={classes}>
      { children }
    </a>
  );
};

export default Badge;
