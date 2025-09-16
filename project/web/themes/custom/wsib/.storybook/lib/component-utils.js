import DrupalAttributes from 'drupal-attribute';

const EXTERNAL = 'external';

export const extractLibraries = (componentConfig) => {
  const {
    libraryOverrides= {},
  } = componentConfig || {};

  const extractedLibraries = {
    css: [],
    js: [],
  };

  const {
    css: {
      component = {},
      theme = {},
      base = {},
    } = {},
    js = null,
  } = libraryOverrides;

  const cssLibraries = {...component, ...theme, ...base};

  const filterExternals = (librariesObject) => {
    return Object.keys(librariesObject)
      .filter((library) => {
        const { type } = librariesObject[library] || {};
        return type === EXTERNAL;
      });
  };

  extractedLibraries.css = filterExternals(cssLibraries);
  extractedLibraries.js = filterExternals(js);

  return extractedLibraries
};

/**
 * Add the attributes and componentMetadata object to the props object
 *
 * @param props
 * @return {*&{componentMetadata: {path: string}, attributes: DrupalAttribute}}
 */
export const componentProps = (props) => {
  const SB_IFRAME_NAME = '/iframe.html';
  let baseUrl = '';
  try {
    const { pathname = '' } = window.location;
    baseUrl = pathname.replace(SB_IFRAME_NAME, '');
    // remove leading slash
    if (baseUrl.indexOf('/') === 0) {
      baseUrl = baseUrl.substring(1);
    }
    baseUrl = baseUrl || '.'; // if not baseUrl serve from current directory
  } catch (e) {
    // window is not defined or not available
  }

  return {
    ...props,
    /* Mocking the Drupal componentMetadata object */
    attributes: new DrupalAttributes(),
    componentMetadata: {
      path: baseUrl,
    },
  }
};
