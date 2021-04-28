const axios = require('axios');

axios.get('https://chs.meituan.com/ptapi/recommends').then((res) => {
    console.log(res);
});