
var request = require('request');
var fs = require('fs');

// request post
request.post({
    // the url is the API ( this is the url)
    url: 'https://api.remove.bg/v1.0/removebg',
    formData: {
        image_url: "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
        size: 'auto',
    },
    headers: {
    'X-Api-Key': 'SnDMHtUeRe5pEz8cPHSkopUb'
    },
    encoding: null
}, function (error, response, body) {
    if (error) return console.error('Request Failed Because Invalid URL or file:', error);
    if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    fs.writeFileSync("./transparent-image/removed.png", body);
}
);

