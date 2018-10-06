const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainwindow;

//listen for the ap pto be ready 
app.on('ready', function(){
    //Create new Window
    mainwindow = new BrowserWindow({});
    //Load the Html file into the window
    mainwindow.loadURL(url.format({
        pathname: path.join(__dirname,'mainwindow.html'),
        protocal: 'file:',
        slashes: true
    }));
    
    // build menu from template
    const mainMenu = Menu.buildFromTemplate(mainmenutemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);


});

// create menu template
const mainmenutemplate = [
    {
        label: 'File' 
    },
    {
        label: 'Edit'
    },
    {
        label: 'Exit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' :'Ctrl+Q',
        click(){
            app.quit();
        }
    }
];
function loadfile() {
    loadStrings("test.txt", fileloaded);
}
function fileloaded(data) {
    txt = data;
    createP(join(data, "<br/>"));
}
function setup(){
    noCanvas();
    var button = select("#loadfile");
    button.mousePressed(loadfile);
}