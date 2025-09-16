import { useEffect } from 'react';
import '../lib/drupal-behaviors.js';
import { loadExternalLibraries } from '../lib/load-libraries';

export const DrupalBehaviorsDecorator = (Story) => {
  useEffect(() => {
    setTimeout(() => {
      Drupal.attachBehaviors();
    }, 200);
  }, [Drupal]);

  useEffect(() => {
    Drupal.attachBehaviors();

    return () => Drupal.detachBehaviors();
  });

  return <Story />;
};

export const DrupalLibrariesDecorator = function (Story) {
  useEffect(() => {
    const libraryOnceKey = `${this.componentName}--libraries`;
    const {
      documentElement,
    } = document;
    const loaded = documentElement && documentElement.classList.contains(libraryOnceKey);
    if (documentElement && !loaded) {
      documentElement.classList.add(libraryOnceKey);
      loadExternalLibraries(this.libraries);
    }
  });
  return <Story />;
};

export default DrupalBehaviorsDecorator;
