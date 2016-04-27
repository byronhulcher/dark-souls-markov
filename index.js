var Blather = require('blather');
var b = new Blather({
  depth: 1
});
b.addFile('items.txt')
// b.addFile('dialogue.txt')
var total = 0;
while (total < 20){
    s = b.sentence()
    if (s.length > 35 && s.length <= 60){
        console.log(s)
        total += 1;
    }
}