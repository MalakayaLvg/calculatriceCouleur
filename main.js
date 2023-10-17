const cercle = document.querySelector('.cercle')
const timer = document.querySelector('.time')
cercle.addEventListener('click',()=>{

    changeAll()

})

function changeAll(){

    //Delay avant de changer
    let randomDelay = Math.random()*5000
    console.log("delay: " + randomDelay + "ms")
    let heureClicDebut = new Date().getTime()
    console.log("heure du clic : " + heureClicDebut)

    setTimeout(()=>{
        //couleur au hasard

        let hexChars = "abcdef0123456789"
        let color = "#"
        for(let i = 0; i<6;i++)
        {
            color += hexChars[Math.floor(Math.random()*hexChars.length)]
        }

        //hauteur, largeur et border radius au hasard
        // h & w   =  30 à 300 px     br = 10% a 50%

        let height = Math.random()*270 +30
        let width = Math.random()*270 +30
        let borderRadius = Math.random()*40 + 10
        let top = Math.random()*80
        let left = Math.random()*80

        cercle.style.backgroundColor = color
        cercle.style.height = height + "px"
        cercle.style.width = width + "px"
        cercle.style.borderRadius = borderRadius + "%"
        cercle.style.top = top + "%"
        cercle.style.left = left + "%"

    },randomDelay)

    cercle.addEventListener("click",()=>{
        let heureClicDuJoueur = new Date().getTime()
        console.log("heure du clic du joueur : " + heureClicDuJoueur)
    })







    /*
    setTimeout(()=>{
        console.log("voila le message apres 2 secondes")

    },2000 )

    setTimeout(()=>{
        console.log("voila un autre message")

    },Math.random()*3000 )

    console.log(new Date().getTime())
    */

}