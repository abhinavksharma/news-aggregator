const newsorg = require('../utils/NewsorgUtils');


const newsapiclient = newsorg.getNewsAPI();

async function fetchheadlines() {

    try {
        let newsdata = await newsapiclient.v2.topHeadlines({country:'us'});
        return newsdata;
    }
    catch(error){
        return new Error(error);
    }
  }

  module.exports = {fetchheadlines};