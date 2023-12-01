require('dotenv').config();
const { response } = require('express');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

function getNewsAPI(){
    return newsapi;
}

module.exports = {getNewsAPI};