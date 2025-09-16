import path from 'path';
import DrupalAttributes from 'drupal-attribute';
import Twig from 'twig';

const components = {};
try {
  /**
   * Register Components to the Twig registry.
   * @param request
   * @param resourceName Where is the component located.
   */
  const importComponents = (request, resourceName) => {
    request.keys().forEach((key) => {
      const name = path.basename(key, '.twig').replace('.scss', '');
      const isTemplateFile = key.includes('.twig');
      const id = `${resourceName}:${name}`;
      if (isTemplateFile && Twig && Twig.twig) {
        components[id] = request(key);
        const template = request(key);
        const twigData = {
          id,
          data: template.tokens,
          allowInlineIncludes: true,
          rethrow: true,
        };

        Twig.twig(twigData);
      }
    });
  };

  /*
  * Register components from the custom and contrib modules.
  * */

  try {
    importComponents(
        require.context(`../../../../../modules/${MODULES_LOCATION}/ew_components/components`, true, /\.(twig|scss)$/, 'sync'),
        'ew_components',
    );
  } catch (e) {
  }

  try {
    importComponents(
        require.context(`../../components`, true, /\.(twig|scss)$/, 'sync'),
        THEME_NAME,
    );
  } catch (e) {
  }

} catch (e) {
  // console.log('Error importing components', e);
}


export const includeFunction = (name, props = {}) => {
  const componentTemplate = components[name];

  if (componentTemplate) {
    const { attributes: attrs = {} } = props || {};
    return componentTemplate({ ...props, attributes: new DrupalAttributes() });
  }
  return `Component ${name} not found!`;
};
