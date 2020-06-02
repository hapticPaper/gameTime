var bd = document.getElementById("wholebody")
var svg = document.getElementById('deathzone')
var turn = 'o'

var scale = d3.scaleLinear()
            .domain([0, 1000])
            .range([0, d3.min(window.innerHeight, window.innerWidth)]);

var board = {0:'',1:'',2:'',3:'',4:'',5:'',6:'',7:'',8:''}
            

function move(){
    if (turn =='x'){
        x_go(event.clientX, event.clientY)
    }
    else{
        o_go(event.clientX, event.clientY)
    }
}

function o_go(x, y){
    console.log(x, y)
    makeCircle(x, y)
    turn = 'x'
}

function x_go(x, y){
    console.log(x, y)
    makeX(x, y)
    turn = 'o'
}



svg.addEventListener("click", move)



function resize(){
    height = +(window.innerHeight) ;
    width = +(window.innerWidth);
    
    var svg = document.getElementById('deathzone');
    svg.style.height=height;
    svg.style.width=width;
};
resize();

function makeX(x,y){
    
    var xid =`${x}${y}${parseInt(Math.random()*10000)}`


    xg = document.createElementNS("http://www.w3.org/2000/svg", "g")
    xgid = `xg-${xid}`
    xg.setAttribute('id', xgid)
    xg.setAttribute('class', 'x')
    death = document.getElementById("deathzone");
    death.appendChild(xg)

    
    x1 = document.createElementNS("http://www.w3.org/2000/svg", "line")
    x1id = `x1-${xid}`
    x1.setAttribute('id', x1id)
    x1.setAttribute('x1', x - +(window.innerHeight/12))
    x1.setAttribute('x2', x + +(window.innerHeight/12))
    x1.setAttribute('y1', y - +(window.innerHeight/12))
    x1.setAttribute('y2', y + +(window.innerHeight/12))
    x1.setAttribute('stroke', 'rgb(255,0,0)')
    x1.setAttribute('stroke-width',5)

    x2 = document.createElementNS("http://www.w3.org/2000/svg", "line")
    x2id = `x2-${xid}`
    x2.setAttribute('id', x2id)
    x2.setAttribute('x1', x + +(window.innerHeight/12))
    x2.setAttribute('x2', x - +(window.innerHeight/12))
    x2.setAttribute('y2', y + +(window.innerHeight/12))
    x2.setAttribute('y1', y - +(window.innerHeight/12))
    x2.setAttribute('stroke', 'rgb(255,0,0)')
    x2.setAttribute('stroke-width',7.5)
    xg.appendChild(x1)
    xg.appendChild(x2)


    d3.select(xg).transition().duration(750).attr("transform", `rotate(10, ${x}, ${y}) scale(0.75 0.75) translate(${window.innerHeight/12} ${window.innerHeight/12})`)


    // xid = `x-${cx}${cy}${parseInt(Math.random()*10000)}`
    // x1 = document.createElementNS("http://www.w3.org/2000/svg", "line")
    // x2 = document.createElementNS("http://www.w3.org/2000/svg", "line")
    // cir.setAttribute('id', cid)
    // cir.setAttribute('cx', cx)
    // cir.setAttribute('cy', cy)
    // cir.setAttribute('r', window.innerHeight/10)
    // cir.setAttribute('fill', '#6b8d9a')
    // cir.setAttribute('stroke', 'red')
    // cir.setAttribute('stroke-width', 5);
    // death = document.getElementById("deathzone");
    // death.appendChild(cir)

    // d3.select(`#${cid}`)
    // .transition().duration(500).attr('r', window.innerHeight/20).attr('fill', '#FFFFFF')
};

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
    .transition().duration(500).attr('r', window.innerHeight/20).attr('fill', '#FFFFFF')
};





window.addEventListener("resize", resize)

