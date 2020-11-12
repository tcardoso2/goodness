module.exports = {


  friendlyName: 'View messages',


  description: 'Display "Messages" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/messages'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
