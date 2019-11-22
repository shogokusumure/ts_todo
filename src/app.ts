import {Item} from './item';
import {Register} from './register';

// var elem = document.getElementById('output');
// var aBook = new Item('はじめてのTypeScript',2980);
// aBook.say(elem);

var taskName = document.querySelector('input[name="name"]')
console.log(taskName.value)

var task = new Register('TypeScriptを書く', ' 2019-11-21', '00:00:00');
task.regist()