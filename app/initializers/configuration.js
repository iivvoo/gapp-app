import ConfigurationController from '../controllers/configuration';

export function initialize(container, application) {
  application.register('configuration:main', ConfigurationController);
}

export default {
  name: 'configuration',
  initialize: initialize
};
