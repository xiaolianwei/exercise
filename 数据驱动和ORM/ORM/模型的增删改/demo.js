const classSer = require('../services/classService');

// classSer.addClass({
//     name: '牛逼班',
//     openDate: '2012-12-10',
// }).then(res => console.log(res))

classSer.update(2,{
    openDate: '2001-5-4'
}).then(res => console.log(res))

// require('../models/relation');
// require('../mock/mockStudent');