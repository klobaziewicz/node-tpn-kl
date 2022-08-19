const pool = require("./db")

const getUsers = (req, res) => {
    pool.query('SELECT * FROM warunki', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers
}