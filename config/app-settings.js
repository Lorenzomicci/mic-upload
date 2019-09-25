module.exports = {
    mongoConnString: 'mongodb://admin:pRjJFPKx45w6JQyk@filestorage-mongodb:27017/files',
    allowedExts: [
        "jpg", "png"
    ],
    uploadPath: global.appRoot + '/uploads/',
    defaultVersionExpireInDays: 30,
    defaultVersionDeleteInDays: 30,
};
