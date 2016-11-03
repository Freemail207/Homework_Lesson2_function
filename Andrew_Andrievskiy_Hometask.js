/**
 * Created by user on 02.11.2016.
 */
/*
* 1. Напишите функцию, которая будет возвращать набор уникальных символов,
* которые были переданы в эту функцию, как аргумент. Сортировка - не нужна,
* строчные и заглавные буквы - 1 символ.*/
function unique(str) {
    var a=str.toLowerCase().match(/[\d\D]/g);
    var result;
    function findUnique(arr) {
        var obj = {};

        for (var i = 0; i < arr.length; i++) {
            var str = arr[i];
            obj[str] = true;
        }
        return Object.keys(obj);
    }
   result= findUnique(a);
    return result;
}
/*
* 2. Напишите функцию, которая будет возвращать новую функцию,
 с помощью которой можно будет выводить в консоль текстовую информацию.*/
function createLogger(prefix){
    return function(){
        var args = Array.prototype.slice.call(arguments);
        args.unshift(new Date().toISOString() + ' ' + prefix + ': ');
        console.log.apply(console, args);
    }
}
var MyLogger= new createLogger('My logger'),
    MyNewLogger= new createLogger('My new logger');

    MyLogger({key:12,key1:13},'Hello!');
    MyNewLogger({key:1,key1:1},'World!');
