const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const Console = require("console");

const app = express();
const url = 'https://www.theguardian.com/international'
axios(url)
    .then(response=>{
        const html = response.data;
        const $ = cheerio.load(html);
        const articles =[];

        $('.fc-item__title',html).each(function (){
            const title = $(this).text();
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles);
    }).catch(err=>console.log('error'))
app.listen(PORT, ()=>Console.log(`server running on port ${PORT}`));
