const fs = require('fs')
const chalk = require('chalk')

const getnotes = function () {
    return "your notes !"
}

const addnote = (title, body) => {
    const notes = loadNote()

    // check for duplicates

    const duplicate = notes.find((note) => note.title === title)

    debugger 
    
    if (!duplicate) {
        const newNote = {
            title: title,
            body: body
        }
        notes.push(newNote)
        saveNote(notes)
        console.log(chalk.green.inverse('Notes Created !\nPlease check notes.json file for more details'))
    } else {
        console.log("Duplicate entry !")
    }
}

const saveNote = (updatedNote) => {
    const stringNote = JSON.stringify(updatedNote)
    fs.writeFileSync('notes.json', stringNote)
}

const loadNote =  () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        const dataJSON = JSON.parse(dataString)
        return dataJSON
    } catch (e) {
        return []
    }
}


// remove a note
const removeNote = function(title){
    const notes = loadNote()
    prevSize = notes.length
    const notesExist = notes.filter((note) => note.title !== title)
    currentSize = notesExist.length
    if (prevSize > currentSize){
        saveNote(notesExist)
        console.log(chalk.green.inverse("Note removed Successfully !"))
    }
    else{
        console.log(chalk.red.inverse("Note doesn't exist !!"))
    }
}

// list notes
const listNotes = () =>{
    console.log("Your list of notes are:")
    console.log(loadNote())
}

// read a note
const readNote = (title) => {
    const isTitle = loadNote().find((note)=> note.title === title)
    if(isTitle !== undefined){
        console.log(isTitle)
    }
    else{
        console.log(chalk.red.inverse("Note with this title is not present !"))
    }
}

module.exports = {
    getnotes: getnotes,
    addnote: addnote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote
}