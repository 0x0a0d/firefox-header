# firefox-header

Return an Firefox Headers Object used in request module

# Method

getFirefoxHeader([win|linux])

    return headersObject for 'win' or 'linux'
    
getFirefoxVersions

    Return firefox_versions_object
    
#Use

```javascript
const {getFirefoxHeader, getFirefoxVersions} = require('firefox-header');

(async ()=> {
    let firefoxVersions;
    try {
        firefoxVersions = await getFirefoxVersions();
        const firefoxObject = await getFirefoxHeader('win', firefoxVersions);
        console.log(firefoxObject);
    }catch (e) {
        console.log(e);
    }
})()

```