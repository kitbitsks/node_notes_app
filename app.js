const chalk = require('chalk')
const noteJS = require('./notes.js')
const yargs = require('yargs')
const { addnote, removeNote, listNotes, readNote } = require('./notes.js')

const command = process.argv[2]
// console.log(yargs.argv)

yargs.version('1.1.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note !',
    builder: {
        title :{
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body :{
            describe : 'body of note',
            demandOption : true,
            type : 'string'
        },
    },
    handler:  (argv) => {
            addnote(argv.title,argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Removed new note !',
    builder: {
        title :{
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv) => {
        removeNote(argv.title)
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'reading your note!',
    builder: {
        title :{
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler: (argv)=> {
        readNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'listing your notes',
    handler: () => {
        listNotes()
    }
})

yargs.parse()
// console.log(yargs.argv)