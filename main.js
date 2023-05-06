function startClassification()
{
    navigator.mediaDevices.getUserMedia({aucio:true});
    clssifier = ml5.soundsClassifier('https://teachablemachine.withgoogle.com/models/WalR2cUpD/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    }

    document.getElementById("result_label").innerHTML = 'I can hear - '+
    results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_b+")";

    img1 = document.getElementById('alien1');
    img2 = document.getElementById('alien2');
    img3 = document.getElementById('alien3');
    img4 = document.getElementById('alien4');

    if(results[1].label == "Dog") {
        img1.src = 'Dog.gif.mp3';
        img2.src = 'cat.jpeg';
        img3.src = 'puppy.jpeg';
        img4.src = 'kitten.jpeg';
    } else if(results[2].label == "Cat") {
        img1.src = 'dog.jpeg';
        img2.src = 'Cat.gif.mp3';
        img3.src = 'puppy.jpeg';
        img4.src = 'kitten.jpeg';
    } else if(results[3].label == "Puppy") {
        img1.src = 'dog.jpeg';
        img2.src = 'cat.jpeg';
        img3.src = 'Puppy.gif.mp3';
        img4.src = 'kitten.jpeg';
    } else if(results[4].label == "Kitten") {
        img1.src = 'dog.jpeg';
        img2.src = 'cat.jpeg';
        img3.src = 'puppy.jpeg';
        img4.src = 'Kitten.gif.mp3';
    }
    else {
        img1.src = 'dog.jpeg';
        img2.src = 'cat.jpeg';
        img3.src = 'puppy.jpeg';
        img4.src = 'kitten.jpeg';
    }
}