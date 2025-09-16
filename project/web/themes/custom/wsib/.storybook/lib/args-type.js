import { StorybookTableCategory } from './enums';

/**
 * Default control type by data type
 *
 * @type {{number: string, boolean: string, string: string, bool: string, array: string, enum: string, object: string}}
 */
export const controlTypeByDateType = {
  string  : 'text',
  array   : 'object',
  boolean : 'boolean',
  bool    : 'boolean',
  enum    : 'radio',
  number  : 'number',
  object  : 'object',
};

/**
 * Get control type by data type. If not found, return defaultType
 *
 * @param type
 * @param defaultType
 * @return {*|string}
 */
const getControlType = (type, defaultType = null) => defaultType || controlTypeByDateType[type];

export const argsType = (props) => {
  const {
    type: name = 'string',
    require = false,
    defaultValue = '',
    control,
    category = StorybookTableCategory.MAIN,
    options,
  } = props || {};

  return {
    type: {
      name,
      require,
    },
    defaultValue,
    control: {
      type: getControlType(name, control),
    },
    options,
    table: {
      category,
    },
  };
};
