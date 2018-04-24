const https = require('https');
const URL_FIREFOX_VERSION = 'https://product-details.mozilla.org/1.0/firefox_versions.json';

const getFirefoxVersions = async () => {
    return new Promise((resolve, reject) => {
        https.get(URL_FIREFOX_VERSION, res => {
            let data = '';
            res.on('data', chunk => data+= chunk)
                .on('error', reject)
                .on('end', () => {
                    try {
                        let json = JSON.parse(data);
                        resolve(json);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
        });

    })
};

module.exports = getFirefoxVersions;