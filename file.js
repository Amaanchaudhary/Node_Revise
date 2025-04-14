import fs from 'fs'
import os from 'os'
import http from 'http'

const server = http.createServer()

// Downlaod and watch Way 1 to Read or Write file
// server.on("request", (req, res) => {
//   fs.readFile('./test.txt', (err, result) => {
//     if (err) return console.log("err", err);
//     res.end(result.toString());
//   })
// })

// Stream Watch Realtime - Way 2 to Read or Write file chunk by chunk 
server.on("request", (req, res) => {
  const rdStream = fs.createReadStream("./tests.txt")

  rdStream.on("data", (chunkdata) => {
    res.write(chunkdata)
  })

  rdStream.on("end", () => {
    res.end();
  })

  rdStream.on("error", (err) => {
    console.log(err);
    res.end("File not Found")
  })
})


server.listen('8000', '127.0.0.1',
  () => console.log("server is listening on port 8000"))


// Writing file/ creating

// sync..  //Write file override the data not append
// fs.writeFileSync('./test.txt', "Hey world")

// async..
// fs.writeFile('./test.txt', "Hey world async", (err) => console.log(err))


//Reading file

// Sync..
// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

// Async..
// fs.readFile("./contacts.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(res);
//   }
// })

// append data into file
// fs.appendFileSync("./test.txt", "Hey Amaam Here \n")

// to make a copy of file sync..
// fs.cpSync("./contacts.txt", "./copy.text");

// To delete the file sync...
// fs.unlinkSync("./copy.text");

// console.log(fs.statSync("./test.txt"))

// fs.mkdirSync("my_doc")
// fs.mkdirSync("my-doc/a/b", {recursive : true})


// console.log(os.cpus().length);

