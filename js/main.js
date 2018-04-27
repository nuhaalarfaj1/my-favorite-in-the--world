function Pepole(name, age, image ){
    this.name = name;
    this.age = age;
    this.portrait = image;

var myDiv =document.createElement("div");
var myH1 =document.createElement("h1");
myH1.innerText = name;
var myImg = document.createElement("img");
myImg.src = image;
myImg.className = "img-fluid";
myDiv.appendChild(myH1);
myDiv.appendChild(myImg);
document.body.appendChild(myDiv);
myDiv.className = "bg-dark text-green p-5 text-center";
}

new Pepole("Angelina Jolie .Actor", 42,"https://media.wmagazine.com/photos/59db9c60e5c6bd261b2b7949/4:3/w_1536/angelina%2520jolie.jpg");
new Pepole("Oprah Winfrey. Media proprietor" ,64 , "https://guardian.ng/wp-content/uploads/2017/12/Oprah-Winfrey-1062x598.jpg");
new Pepole("Bradley Cooper. Actore", 43, "http://www.celebritybeliefs.com/wp-content/uploads/2016/06/bradley-cooper-hobbies-religion-celebrity-views.jpg" );

