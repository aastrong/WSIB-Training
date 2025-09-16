export const loadExternalLibraries = ({
                                 css = [],
                                 js = [],
                               }) => {
  if (css && css.length) {
    css.forEach((cssLibrary) => {
      const head = document.querySelector('head');
      if (head) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssLibrary;
        head.prepend(link);
      }
    });
  }

  if (js && js.length) {
    js.forEach((jsLibrary) => {
      const body = document.querySelector('body');
      if (body) {
        const script = document.createElement('script');
        script.src = jsLibrary;
        body.prepend(script);
      }
    });
  }

  return true;
};
