module.exports = {


  friendlyName: 'View World',


  description: 'Shows a world where we can put things in it',


  exits: {

    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/worldpage'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
