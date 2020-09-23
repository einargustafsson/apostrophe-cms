module.exports = {
  addFields: [
    {
      name: 'logoImages',
      label: 'Masked Logo Images',
      help: 'On page load, choose one randomly and mask it with the logomark',
      type: 'singleton',
      widgetType: 'apostrophe-images'
    },
    {
      name: 'demoMode',
      label: 'Enable Demo Mode?',
      help: 'This will turn on introductory modal windows when a user first arrives, introducing them to ApostrpoheCMS',
      type: 'boolean',
      choices: [
        { label: 'No', value: false },
        { label: 'Yes', value: true }
      ]
    },
    {
      name: 'trackingID',
      label: 'Google Analytics Tracking ID',
      help: 'If present, traffic will be tracked to this Google Analytics property.',
      type: 'string'
    }
  ],
  arrangeFields: [
    {
      name: 'navigation',
      label: 'Navigation',
      fields: [
        'logoImages'
      ]
    },
    {
      name: 'admin',
      label: 'Admin',
      fields: [
        'demoMode',
        'trackingID'
      ]
    }
  ],
  construct: function (self, options) {
    self.prependSnippets = () => {
      self.apos.templates.prepend('body', (req) => {
        return self.partial('body-snippet', {});
      });
      self.apos.templates.append('head', (req) => {
        return self.partial('head-snippet', {});
      });
    };
  },
  afterConstruct: (self) => {
    self.prependSnippets();
  }
};
