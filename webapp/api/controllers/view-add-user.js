module.exports = {


  friendlyName: 'View add user',


  description: 'Display "Add user" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/add-user'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
