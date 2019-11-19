const {google} = require('googleapis');

const YTube = {
    searchByKeyword(ytKeyword, ytPart, ytMaxResults) {
        console.log(ytKeyword, ytPart, ytMaxResults);
        
        const service = google.youtube('v3');
        return new Promise( (resolve, reject) => {
            try {
                service.search.list({
                    auth: process.env.YT_API_KEY,
                    part: ytPart,
                    q: ytKeyword,
                    maxResults: ytMaxResults
                }, (err, res) => {
                    if (err) {
                        console.log('The API returned an error: ' + err);
                    }
                    
                    let result = res.data.items;
                    
                    if (result.length > 0) {
                        resolve(result);
                    } else {
                        reject({message:'No results!'});
                    }
                });
            } catch(err) {
                reject(err);
            }
        });
    }
};

module.exports = YTube;
