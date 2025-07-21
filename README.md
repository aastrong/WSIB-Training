# A Drupal via DDEV template on Codespaces

This is a [Drupal via DDEV](https://github.com/drud/ddev) template configured for ephemeral development environments on Github Codespaces.

## Next Steps

1. Clone this repository, fork it or use the template.
2. Go to Code > Codespaces > Create new codespace based on main
3. Once the codespace is setup, move to the project folder by running `cd project`
4. Start the containers by running `ddev start`
5. Get dependencies by running `ddev composer install`
6. Install the website by running the command `ddev drush si --existing-config`
7. Login to your website by runnin `ddev drush uli` and visiting that URL
