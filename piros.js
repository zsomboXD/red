let randX
let randY

function start(){
document.getElementById('racs').innerHTML=''
    let meret=document.getElementById('meret').value
    if(meret<2 || meret>10) return
    console.log(meret);
    rajzol(meret)
    randX=randnr(meret)
    randY=randnr(meret)
    console.log(randX,randY)
}

function rajzol(meret){
    for(let i=1;i<=meret;i++){
        let sor=document.createElement('div')
        sor.classList.add('row')
        sor.classList.add("justify-content-center")
        document.getElementById('racs').appendChild(sor)
        for(let j=1;j<=meret;j++){
            let cella=document.createElement('div')
            cella.setAttribute('class','border bg-secondary box')
            cella.dataset.x=i
            cella.dataset.y=j
            sor.appendChild(cella)
        }
    }
}
let szamlalo=0
function pozicio(e){
    if(!e.target.classList.contains('box')) return
    console.log(e.target); 
    let x=e.target.dataset.x
    let y=e.target.dataset.y
    console.log(x,y);
    
    if(x==randX &&y==randY){
        szamlalo+=1
        e.target.classList.add('bg-danger')   
        alert(`${szamlalo}-re találtad el.`)
    }else{
        e.target.classList.add('bg-dark')   
        szamlalo+=1
    }
}
function randnr(n){
    return Math.floor(Math.random()*n)+1
}
function reload(){
    window.location.reload();
}
