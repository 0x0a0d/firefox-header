const getFirefoxVersions = require('./getFirefoxVersions');

const getFirefoxHeader = async (os = 'win') => {
    let firefoxVersions;
    try {
        firefoxVersions = await getFirefoxVersions();
    }
    catch (e) {
        throw e;
    }
    const {LATEST_FIREFOX_VERSION} = firefoxVersions;
    let rv = LATEST_FIREFOX_VERSION.split('.').slice(0, 2).join('.');
    let ua = `Mozilla/5.0 (${os=='win'?'Windows NT 10.0; WOW64': 'X11; Ubuntu; Linux x86_64'}; rv:${rv}) Gecko/20100101 Firefox/${rv}`;
    const headers = {
        'User-Agent': ua,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
    }
    return headers;
}

module.exports = getFirefoxHeader;