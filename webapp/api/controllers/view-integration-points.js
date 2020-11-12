module.exports = {


  friendlyName: 'View integration points',


  description: 'Display "Integration points" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/integration-points'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
