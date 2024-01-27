function generate(){
    var quotes={
       " -Mahatma Gandhi": '"You must be the change you wish to see in the world." ',
      " -Mother Teresa ": '"Spread love everywhere you go. Let no one ever come to you without leaving happier"',
      "-Franklin D. Roosevelt" : " 'The only thing we have to fear is fear itself'"
    }
var authors = Object.keys(quotes)
var author = authors[Math.floor(Math.random()*authors.length)]
  
var q = quotes[author]
document.getElementById("quote").innerHTML=q;
document.getElementById("author").innerHTML=author;
}