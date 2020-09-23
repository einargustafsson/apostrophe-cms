module.exports = {
  name: 'person',
  label: 'Person',
  pluralLabel: 'People',
  addFields: [
    {
      name: 'thumbnail',
      label: 'Headshot',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        aspectRatio: [ 1, 1 ],
        minSize: [ 300, 300 ],
        limit: 1
      }
    },
    {
      name: 'role',
      label: 'Role',
      type: 'string'
    },
    {
      name: 'description',
      label: 'Description',
      type: 'string',
      textarea: true
    }
  ],
  arrangeFields: [
    {
      name: 'details',
      label: 'Details',
      fields: [
        'role',
        'thumbnail',
        'description'
      ]
    }
  ]
};
