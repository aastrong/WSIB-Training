import twigDrupal from 'twig-drupal-filters';
import twigBEM from 'bem-twig-extension';
import twigAddAttributes from 'add-attributes-twig-extension';
import DrupalAttributes from 'drupal-attribute';

import { includeFunction } from './import-contexts';

export const namespaces = {
};

/**
 * Configures and extends a standard twig object.
 *
 * @param {Twig} twig - twig object that should be configured and extended.
 *
 * @returns {Twig} configured twig object.
 */
export const setupTwig = (twig) => {
  twig.cache();
  twigDrupal(twig);
  twigBEM(twig);
  twigAddAttributes(twig);

  twig.extendFunction('include', includeFunction);
  twig.extendFunction('create_attribute', (attrs) => {
    const attributes = (attrs && Object.entries(attrs)) || [];
    return new DrupalAttributes(attributes);
  });

  /**
   * Translates a string using the given options.
   * @param value
   * @param options
   * @return {*}
   */
  const trans = (value, options) => {
    const [optionsKeys = null] = options || [];
    if (optionsKeys && typeof optionsKeys === 'object') {
      let newValue = value;
      Object.keys(optionsKeys).forEach((optionKey) => {
        newValue = newValue.replace(optionKey, optionsKeys[optionKey]);
      });

      return newValue;
    }

    return value;
  };

  twig.extendFilter('t', trans);
  twig.extendFilter('trans', trans);
  twig.extendTag({
    type: 'trans',
    regex: /^trans$/,
    next: ['endtrans'],
    open: true,
    parse: function (token, context, chain) {
      const output = this.parse.apply(this, [token.output, context]);

      return {
        chain: false,
        output: output
      };
    },

    compile: function (token) {
      return token;
    }
  });

  twig.extendTag({
    type: 'endtrans',
    regex: /^endtrans$/,
    next: [],
    open: false,

    parse: function (token, context, chain) {
      return {
        chain: false,
        output: ''
      };
    },

    compile: function (token) {
      return token;
    }
  });

  return twig;
};
