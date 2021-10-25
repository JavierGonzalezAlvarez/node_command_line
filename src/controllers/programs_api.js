const fs = require('fs');
const path = require('path')

exports.get = (req, res) => {
    const path_file = path.join(__dirname, '../../json', 'programs.json');
    fs.readFile(path_file, 'utf8', (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.header("Content-Type", 'application/json');
            res.send(data);
            res.end(data);
        }
    });
}

//get one endpoint by command-line
const path_file = path.join(__dirname, '../../json', 'programs.json');
const programs_api = fs.readFile(path_file, 'utf8', (err, data) => {
    console.log(data);
})

module.exports = {
    programs_api
}