module.exports = {
  name: 'tour',
  extend: 'apostrophe-pieces',
  label: 'Tour',
  pluralLabel: 'Tours',
  addFields: [
    {
      name: 'title',
      label: 'Tour name',
      type: 'string',
      required: true
    },
    {
      name: 'excerpt',
      label: 'Intro',
      type: 'string',
      required: true
    },
    {
      name: 'description',
      label: 'Description',
      type: 'area',
      options: {
        widgets: {
          'apostrophe-rich-text': {
            toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
          },
          'apostrophe-images': {}
        }
      },
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1,
        minSize: [ 200, 200 ],
        aspectRatio: [ 1, 1 ]
      }
    },
    {
      name: 'cover',
      label: 'Cover photo',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 1,
        minSize: [ 1200, 600 ],
        aspectRatio: [ 2, 1 ]
      }
    },
    {
      name: 'images',
      label: 'Gallery',
      type: 'singleton',
      widgetType: 'apostrophe-images',
      options: {
        limit: 16,
        minSize: [ 800, 600 ],
        aspectRatio: [ 3, 2 ]
      }
    }
  ]
};