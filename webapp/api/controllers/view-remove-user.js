module.exports = {


  friendlyName: 'View remove user',


  description: 'Display "Remove user" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/remove-user'
    }

  },


  fn: async function () {

    // Respond with view.
    let uId = this.req.params.id;
    sails.log(`Viewing user remove view for user: ${uId}`);

    let result = await User.find({ id: uId });
    sails.log(`Found in DB user ${uId} named ${result[0].fullName}...`);
    // Respond with view.
    return {
      id: this.req.params.id,
      fullName: result[0].fullName
    };

  }


};
