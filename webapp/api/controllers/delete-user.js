module.exports = {


  friendlyName: 'Delete User',


  description: 'Remove a user from the user store',


  inputs: {

    id: {
      type: 'string'
    },

  },


  exits: {

    userAlreadyDeleted: {
      statusCode: 409,
      description: 'The provided user is already deleted.',
    },

  },


  fn: async function (inputs) {

    // Only Super Admins can actually remove users
    if(this.req.me.isSuperAdmin){
      sails.log(`Removing user with id ${inputs.id}... `);
      await User.updateOne({ id: inputs.id })
      .set({
        deleted: true
      });      
    } else {
      sails.error("Non Super Admin User tried removing another user! Not allowed!");
    }
  }


};
