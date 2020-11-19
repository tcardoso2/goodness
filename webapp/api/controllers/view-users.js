module.exports = {


  friendlyName: 'View users',


  description: 'Display "Users" page.',


  exits: {

    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/users'
    }

  },


  fn: async function () {

    sails.log("Executing function...");

    let users = await User.find(/*{ deleted: false }*/);
    sails.log(`Found ${users.length} users.`);
    // Respond with view.
    return {
      members: users 
    };
  }


};
