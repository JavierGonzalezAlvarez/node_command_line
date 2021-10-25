const { Command } = require('commander');

const { programs_api } = require('./src/controllers/programs_api');

const program = new Command();

program
    .version('0.0.1')
    .description('command line for api')

//commands for getting data
program
    .command('get api')
    .alias('g')
    .description('get data')
    .action(() => {
        //get
        programs_api
    });

program.parse(process.argv);