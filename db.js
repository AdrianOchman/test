const mariadb = require('mariadb')
const dotenv = require('dotenv')

dotenv.config()

const pool = mariadb.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
})

async function saveUser(name, email){
    let conn
    try{
        conn = await pool.getConnection()
        const result = await conn.query("INSERT INRO users (name, email) VALUES (?, ?)", [name, email])
        return result
    }catch(err){
        throw err
    }finally{
        if (conn) conn.release()
    }
}


module.exports={
    saveUser
}