const config = {
    user: 'sa',
    password: 'sa2K17docker',
    server: '34.196.169.149',
    database: 'examen',
    connectionTimeout: 30000,
    requestTimeout: 20000,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 50000
    }
}


exports.config = config