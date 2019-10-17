import md5 from './md5';

function Util() {
    return {
        signParams: signParams
    }

    function signParams(params) {
        if (!params) {
            params = {}
        }
        let obj = params;
        obj.timestamp = (new Date()).valueOf();
        obj.version = '1.0.0';
        let hashObj = {};
        Object.keys(obj).sort().forEach(key => {
            hashObj[key] = obj[key]
        });
        hashObj.key = "hd520156";
        let sign = md5.md5(decodeURIComponent(json2Form(hashObj)));
        params.sign = sign;
        params.timestamp = obj.timestamp;
        params.version = '1.0.0';
        return params;
    }

    function json2Form(json) {
        let array = [];
        for (let i in json) {
            array.push(`${encodeURIComponent(i)}=${encodeURIComponent(json[i])}`)
        }
        return array.join("&")
    }
}

export default new Util()
