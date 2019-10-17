import Util from './js/util'
import Api from './js/api'
import Md5 from './js/md5'


function Core() {
    return {
        Util: Util,
        Api: Api,
        Md5: Md5
    }
}

export default new Core()
