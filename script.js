window.addEventListener("load", () => {

    const title = document.querySelector(".title");
    const photo = document.querySelector(".photo-container img");
    const circles = document.querySelectorAll(".circle");
    const github = document.querySelector(".github-btn");


    setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
        title.style.transition = "1s";
    }, 200);


    setTimeout(() => {
        photo.style.opacity = "1";
        photo.style.transition = "1s";
    }, 600);

    
    circles.forEach((circle, index) => {
        setTimeout(() => {
            circle.style.opacity = "1";
            circle.style.transform = "translateY(0)";
            circle.style.transition = "0.6s";
        }, 900 + index * 200);
    });

 
    setTimeout(() => {
        github.style.opacity = "1";
        github.style.transition = "1s";
    }, 1700);

});