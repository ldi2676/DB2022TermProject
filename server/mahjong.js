import express from "express"
import mysql from "mysql"
import bodyParser from "body-parser" //form 같은 추가 기능때매 에러날까봐 미리 넣어주심
import cors from 'cors'

const app = express()
const port = 3010

const dbc = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'raim0526',
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

app.get('/Yaku_Image', (req, res) => {								//post방식 get 방식 
	const query = `select * from YAKU_IMAGE`
	dbc.query(query, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.get('/User_Data', (req, res) => {								//post방식 get 방식 
	const query = `select * from User_Data`
	dbc.query(query, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.get('/User_Post', (req, res) => {								//post방식 get 방식 
	const query = `select * from User_Post`
	dbc.query(query, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})
app.post('/User_Post', (req, res) => {								//post방식 get 방식 
	// var write_user = req.body.User;
	// var write_title = req.body.title;
	// var write_date = req.body.Date;
	// var write_content = req.body.Content;
	// var datas = [write_user, write_title, write_date, write_content]
	console.log(req.body.data);
	res.end("Success");
	// res.send(write_user+title+Date+content)
	// const query = 'INSERT INTO User_Post (write_id,write_user, write_title,write_date,write_content) VALUES' + write_user + write_title + write_date + write_content;
	// dbc.query(query, datas, (err, rows) => {
	// 	if (err) {
	// 		res.send('{"status": "error"}')
	// 		return console.log(err)
	// 	}
	// 	res.send(rows)
	// 	console.log("처리")
	// })
});

app.get('/User_Comment', (req, res) => {								//post방식 get 방식 
	const query = `select * from User_Comment`
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