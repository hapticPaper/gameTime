var bd = document.getElementById("wholebody")
var svg = document.getElementById('deathzone')

function boomboom(){
    console.log(event)
    makeCircle(event.clientX, event.clientY)
}

svg.addEventListener("click", boomboom)



function resize(){
    height = window.innerHeight;
    width = window.innerWidth;
    
    var svg = document.getElementById('deathzone');
    svg.style.height=height;
    svg.style.width=width;
};
resize();

function makeCircle(cx,cy){
    cid = `circle-${cx}${cy}${parseInt(Math.random()*10000)}`
    cir = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    cir.setAttribute('id', cid)
    cir.setAttribute('cx', cx)
    cir.setAttribute('cy', cy)
    cir.setAttribute('r', window.innerHeight/10)
    cir.setAttribute('fill', '#6b8d9a')
    cir.setAttribute('stroke', 'red')
    cir.setAttribute('stroke-width', 5);
    death = document.getElementById("deathzone");
    death.appendChild(cir)

    d3.select(`#${cid}`)
    .transition().duration(500).attr('r', 80).attr('fill', '#800000')
    .transition().duration(500).attr('r', 0)
};





window.addEventListener("resize", resize)