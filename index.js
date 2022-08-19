const express = require("express")
const app = express()
//const pool = require("./db")
//const client = require("./db")
const merchant_model = require('./merchant_model')
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

var pg = require('pg');
var conString = "postgres://zcozoigt:2AnzqjMTtyqvuBW5aJTQXOsw_WPVD-Ka@dumbo.db.elephantsql.com/zcozoigt";
var client = new pg.Client(conString);
client.connect();

/*
const query = `
CREATE SEQUENCE IF NOT EXISTS zgloszenia_id_seq;

CREATE TABLE IF NOT EXISTS public.zgloszenia
(
    id integer NOT NULL DEFAULT nextval('zgloszenia_id_seq'::regclass),
    login character varying(255) COLLATE pg_catalog."default",
    droga text COLLATE pg_catalog."default",
    data date,
    liczba_osob integer,
    CONSTRAINT zgloszenia_pkey PRIMARY KEY (id)
);
CREATE SEQUENCE IF NOT EXISTS warunki_id_seq;

CREATE TABLE IF NOT EXISTS public.warunki
(
    id integer NOT NULL DEFAULT nextval('warunki_id_seq'::regclass),
    data character varying COLLATE pg_catalog."default",
    info character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT warunki_pkey PRIMARY KEY (id)
);
CREATE SEQUENCE IF NOT EXISTS login_id_seq;

CREATE TABLE IF NOT EXISTS public.login
(
    id integer NOT NULL DEFAULT NEXTVAL('login_id_seq'),
    login character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    mail character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT login_pkey PRIMARY KEY (id)
);
CREATE SEQUENCE IF NOT EXISTS drogi_id_seq;

CREATE TABLE IF NOT EXISTS public.drogi
(
    id integer NOT NULL DEFAULT nextval('drogi_id_seq'::regclass),
    droga character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT drogi_pkey PRIMARY KEY (id)
);
INSERT INTO drogi (droga) VALUES ('Mięguszowiecki Szczyt Wielki'),('Cubryna'),('Mięguszowiecki Szczyt Czarny'),('Niżne Rysy'),('Mnich'),('Zamarła Turnia'),('Zadni Kościelec');
`;

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is successfully created');
    //client.end();
});


app.get("/a", (req, res) => {
    res.send('aaa')
})
//
const { Client } = require('pg');

const a = new Client({
    host: 'ec2-52-49-120-150.eu-west-1.compute.amazonaws.com',
    database: 'dflbq5p1a4jdk5',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      "ssl": { "require": true }
    },
    logging: false,
    tls: {
      rejectUnauthorized: false
    }
    connectionString: process.env.DATABASE_URL || "postgres://zcqfsvsjqpypzi:13eb1b69561d654c355e029fff414f52ef63c7e9c046aae901bf3786a83f4198@ec2-52-51-3-22.eu-west-1.compute.amazonaws.com:5432/dd211hnd2asikd",
    ssl: false,
});

a.connect();

a.query('SELECT * FROM drogi;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    a.end();
});
//

// create all databases ------------- tworzenie wszystkich baz danych -----------------
app.get("/create_all_databases", async (req, res) => {
    try {
        const name = req.query

        let int_name = name.id.toString()
        const wpisy = await pool.query(
            ""
        )
        res.json(wpisy.rows)
        res.send(wpisy.rows)

    } catch (error) {
        console.log(error.message)
    }
})
*/


//
app.get("/wpisy", async (req, res) => {
    try {
        //const name = req.query

        //let int_name = name.id.toString()
        //console.log(int_name)

        const wpisy = await client.query(
            "SELECT * FROM warunki",
        )
        res.json(wpisy.rows)
        res.send(wpisy.rows)

    } catch (error) {
        console.log(error.message)
    }
})

// SELECT
app.get("/select", async (req, res) => {
    try {
        //const name2 = req.query

        //let int_name2=name2.id.toString()
        //console.log(int_name)

        var wpisy2 = await client.query("SELECT * FROM warunki");
        /*const wpisy2 = await pool.query(
            "SELECT * FROM warunki"
        )*/
        console.log(wpisy2.rows)
        res.json(wpisy2.rows)

    } catch (error) {
        console.log(error.message)
    }
})

// ADD
app.get("/add", async (req, res) => {
    try {
        let now = new Date();
        let date = now.toLocaleString()
        //
        const info = req.query
        console.log(info)
        const newInfo = await client.query(
            "INSERT INTO warunki (info,data) VALUES ($1,$2);",
            [info.info, date]
        )
        res.json(newInfo.rows[0])

    } catch (error) {
        console.log(error.message)
    }
})
//

// REGISTER
app.get("/register", async (req, res) => {
    try {
        const info = req.query
        console.log(info)

        const newInfo = await client.query(
            "INSERT INTO login (login,password,mail) VALUES ($1,$2,$3);",
            [info.login, info.password, info.mail]
        )
        res.json(newInfo.rows[0])

    } catch (error) {
        console.log(error.message)
    }
})
//

// SELECT LOGIN
app.get("/select_login", async (req, res) => {
    try {
        var wpisy2 = await client.query("SELECT * FROM login");
        console.log(wpisy2.rows)
        res.json(wpisy2.rows)
        /*
        const wpisy2 = await pool.query(
            "SELECT * FROM login"
        )
        console.log(wpisy2.rows)
        res.json(wpisy2.rows)
        */
    } catch (error) {
        console.log(error.message)
    }
})

//
// SELECT drogi
app.get("/select_drogi", async (req, res) => {
    try {

        var query = await client.query("SELECT * FROM drogi");
        console.log(query.rows)
        res.json(query.rows)

        //var query2 = client.query("SELECT * FROM drogi")
        //console.log(query2)
        //res.json(query2)

        /*
        const drogi = await pool.query(
            "SELECT * FROM drogi"
        )
        //console.log(drogi.rows)
        res.json(drogi.rows)
        */
    } catch (error) {
        console.log(error.message)
    }
})

/*
client.query('SELECT * FROM drogi;', (err, res) => {
    if (err) throw err;
    console.log(res.rows);
    for (let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    //client.end();
});
*/

//
// INSERT zgloszenia
app.get("/insert_zgloszenia", async (req, res) => {
    try {
        const info = req.query
        console.log(info)

        const newInfo = await client.query(
            "INSERT INTO zgloszenia (login,droga,data,liczba_osob) VALUES ($1,$2,$3,$4);",
            [info.login, info.droga, info.data, info.liczba_osob]
        )
        res.json(drogi.rows)

    } catch (error) {
        console.log(error.message)
    }
})
// SELECT zgloszenia
app.get("/select_zgloszenia", async (req, res) => {
    try {
        var query = await client.query("SELECT * FROM zgloszenia");
        res.json(query.rows)
        /*
        const drogi = await pool.query(
            "SELECT * FROM zgloszenia"
        )
        res.json(drogi.rows)
        */
    } catch (error) {
        console.log(error.message)
    }
})
//

app.use(express.json()) //req.body
app.use(cors());
//

app.listen(5000, () => {
    console.log("server jest na porcie 5000")
})