const http = require('http');
const url = require('url');
const fs = require('fs');

// JSON: READING,PARSING and ADDING IN AN ARRAY
const data = fs.readFileSync("./programmingsimple.json", "utf8");
const dataObject = JSON.parse(data);
const programmingArray = Object.values(dataObject)

// CREATING SERVER AND ROUTES
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    // GETTING ALL DATA FROM JSON
    if (req.url === '/') {
        try {
            res.write(JSON.stringify(dataObject));
            res.end();
        } catch (e) {
            res.write("Something Went Wrong!!");
            res.end();
        }
    }

    // GETTING ALL DATA FROM JSON
    if (req.url === '/,/overview') {
        try {
            res.write(JSON.stringify(dataObject));
            res.end();
        } catch (e) {
            res.write("Something Went Wrong!!");
            res.end();
        }
    }

    // GETTING ALL DATA BY ID
    if (path === '/program') {
        try {
            const id = query.id;
            if ((id >= 0) && (id <= (programmingArray[0].length - 1))) {
                const programm = programmingArray[0][id];
                res.write(JSON.stringify(programm));
            } else {
                res.write("BAD REQUEST!!")
            }
            res.end();
        } catch (e) {
            res.write("Something Went Wrong!!");
            res.end();
        }
    }

});

server.listen(8080);

