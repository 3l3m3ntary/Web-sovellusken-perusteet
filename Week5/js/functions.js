function ThrowDice() {
    let number = Math.floor(Math.random() * (7 - 1) + 1);
    var image = document.getElementById("dicePic");
    switch(number){
        case 1:
            image.src = "img/1.png";
            break;
        case 2:
            image.src = "img/2.png";
            break;
        case 3:
            image.src = "img/3.png";
            break;
        case 4:
            image.src = "img/4.png";
            break;
        case 5:
            image.src = "img/5.png";
            break;
        case 6:
            image.src = "img/6.png";
            break;
    }
    return image;
}