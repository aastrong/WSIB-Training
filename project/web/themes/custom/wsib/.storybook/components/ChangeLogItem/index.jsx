export const ChangeLogItemPropsType = {
  ADDED: 'ADDED',
  CHANGED: 'CHANGED',
  DEPRECATED: 'DEPRECATED',
  REMOVED: 'REMOVED',
  FIXED: 'FIXED',
  SECURITY: 'SECURITY',
};

export const DEFAULT_TASK_URL = 'https://rm.ewdev.ca/issues/';

const ChangeLogItem = ({
  component = null,
  description = null,
  task = null,
  storybookPath = null,
  type = ChangeLogItemPropsType.ADDED,
}) => {
  const separator = <span> — </span>;
  const rmLinkMarkup = task && (
    <span>
      <a
        href={`${DEFAULT_TASK_URL}${task}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`badge badge--${type}`}
      >
        {`RM-${task}`}
      </a>
      {separator}
    </span>
  );
  const storybookPathMarkup = storybookPath && (
    <span>
      <a
        href={`/?path=${storybookPath}`}
        className="font-bold"
      >
        {component}
      </a>
    </span>
  );

  const descriptionMarkup = description && (
    <>
      {separator}
      <span className="ml-2">{description}</span>
    </>
  );

  return (
    <div className="change-log-item">
      {rmLinkMarkup}
      {storybookPathMarkup}
      {!storybookPath && <strong>{component}</strong> }
      {descriptionMarkup}
    </div>
  );
};

export default ChangeLogItem;
