const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const path = require('path')

const baseURL = 'http://manhua.dmzj.com/rank/day-block-1.shtml'
const rootPath = path.resolve(__dirname, '..') + '/result/'

var options = {
    url: baseURL,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36'
    }
}

// callback hell start

request(options, (err, res, body) => {
    if (err || !body) {
        return
    }

    let $ = cheerio.load(body)
    $('.title>a').each( (i, n) => {
        
        options.url = $(n).attr('href')
        fs.mkdir(rootPath + $(n).attr('title'), err => {
            requestComic()
        })

    }) 
})

function requestComic ( path ) {
    request(options, (err, res, body) => {
        let $ = cheerio.load(body)
    })
}