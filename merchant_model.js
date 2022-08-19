const getMerchants = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM warunki ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
//


module.exports = {
    getMerchants
}