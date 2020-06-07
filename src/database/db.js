//verbose configura mensagens do sqlite 3 no terminal
const sqlite3 = require("sqlite3").verbose()

//criar o objeti que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto banco de dados, para nossas operações
// db.serialize(() => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//            id INTEGER PRIMARY KEY AUTOINCREMENT,
//            image TEXT,
//            name TEXT,
//            address TEXT,
//            address2 TEXT,
//            state TEXT,
//            city TEXT,
//            items TEXT
//         );   
//     `)


//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address, 
//             address2,
//             state, 
//             city,
//             items
//         ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Papersider",
//         "Guilherme Gemballa, Jardim America",
//         "N° 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         //this referencia resposta do run
//         console.log(this)
//     }
//     db.run(query, values, afterInsertData)

//     // db.all(`SELECT name FROM places`, function(err, rows){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros")
//     //     console.log(rows)
//     // })

//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Registrado deletado com sucesso")
//     // })
// })
