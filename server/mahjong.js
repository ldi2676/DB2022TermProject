import express from "express"
import mysql from "mysql"
import bodyParser from "body-parser" //form 같은 추가 기능때매 에러날까봐 미리 넣어주심
import cors from 'cors'

const app = express()
const port = 3010

const dbc = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mysql1234',
	database: 'mahjongdb'
})

app.use(cors())
app.use(bodyParser.json())
// application/x-www-form-urlencoded 처리
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/Han', (req, res) => {								//post방식 get 방식 
	const query = `select * from HAN`
		  // `select name, model, grade, title, boxart 
		  // from gunpla left outer join mechanic 
		  // on gunpla.mechanic_id = mechanic.id`
	dbc.query(query, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.get('/Yaku_Desc', (req, res) => {								//post방식 get 방식 
	const query = `select * from YAKU_DESC`
	dbc.query(query, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.get('/Table', (req, res) => {								//post방식 get 방식 
	const query = "select HAN.yaku_name, YAKU_IMAGE.yaku_nick, menzen,`call`,`desc`, YAKU_IMAGE.image from HAN, YAKU_DESC,YAKU_IMAGE WHERE HAN.id = YAKU_DESC.id and YAKU_DESC.id = YAKU_IMAGE.id;"
	dbc.query(query, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.listen(port, () => {
	console.log('서버 실행됨')
})