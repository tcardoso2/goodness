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
    
    let params = this.req.allParams();
    if(params.version) {
      sails.log(`Showing history version page: ${params.version}`);
      return this.res.view('pages/.history/worldpage/' + params.version.trim());
    }
    // Respond with view.
    return {};

  }


};
