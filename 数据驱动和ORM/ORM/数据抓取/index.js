const axios = require('axios').default;

axios.get('https://bj.meituan.com/ptapi/recommends').then(res => {
    console.log(res.data);
})