const config = {
    user: 'sa',
   // password: 'sa2K17docker',
   // server: '34.196.169.149',
    password: 'sa2K17docker',
    server: '34.196.169.149',
    database: 'Examen',
    "options": {
        "encrypt": false,
        "enableArithAbort": true
        },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

exports.config = config