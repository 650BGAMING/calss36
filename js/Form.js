class Form {
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Go Brrrr");
        title.position(130,0);
        var input = createInput("what is your name");
        var button = createButton("lets's go");
        var greeting = createElement('h3');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hi if you win i will lose"+name);
            greeting.position(130,160);
        })


    }




}