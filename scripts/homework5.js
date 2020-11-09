var svg;
var earth;
var iss;

var n; 
var radius;
var angle;

var flights;

var svg_width = 1580;
var svg_height = 1444;

var earth_width = 100;
var earth_height = 100;

var rocket_width = 50;
var rocket_height = 50;

// This runs when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    n = 7;
    // selecting svg elements
    svg = d3.select("#dogs_svg");
    
    // //tooltip div
    // div = d3.select("body").append("div")
    // .attr("class", "tooltip-map")
    // .style("opacity", 0);

    Promise.all([d3.json('data/flights.json')])
    .then(function(values){
        flights = values[0];
        console.log(flights);
        let yrval = document.getElementById("year-input").value;
        drawcircles(flights[String(yrval)]);
    })

    earth = svg.append('image')
    .attr('xlink:href', '../images/globe.svg')
    .attr('width', 100)
    .attr('height', 100)
    .attr('x', svg_width/2 - earth_width/2)
    .attr('y', svg_height/2 - earth_height/2)
    .attr('preserveAspectRatio','none')
    .attr('id','earth');   
    
});

function drawcircles(yearvals){
    console.log(yearvals);
    n = yearvals.length;
    
    let radset = new Set()
    for(i = 0; i < n; i++){
        radius = parseInt(yearvals[i]['altitude']) * 1.15;
        radset.add(radius);
    }
    
    radset.forEach(function (d) {
        svg.append('circle')
        .style('stroke', 'gray')
        .style('fill', 'none')
        .attr('r', d)
        .attr('cx', svg_width/2)
        .attr('cy', svg_height/2)
        .attr('opacity', 0.5);
    })


    // Orbit 
    svg.append('circle')
    .style('stroke', 'gray')
    .style('fill', 'none')
    .attr('r', radius)
    .attr('cx', svg_width/2)
    .attr('cy', svg_height/2)
    .attr('opacity', 0.3);

    //Rockets
    for(i = 0; i < n; i++){
        console.log(yearvals[i]['rocket']);
        angle = (i / (n/2)) * Math.PI;
        let tempx = 0;
        let tempy = 0;
        radius = parseInt(yearvals[i]['altitude']) * 1.15;
        // console.log(angle)

        // rocket image
        svg.append('image')
        .attr('xlink:href', '../images/ufo-alien-svgrepo-com.svg')
        .attr('width', 50)
        .attr('height', 50)
        .attr('x', radius * Math.cos(angle) + svg_width/2 - rocket_width/2)
        .attr('y', radius * Math.sin(angle) + svg_height/2 - rocket_height/2)
        .attr('preserveAspectRatio','none')
        .attr('id','rocket');
        
        let t1 = (radius * Math.cos(angle) + svg_width/2 - rocket_width/2);
        let t2 = (radius * Math.sin(angle) + svg_height/2 - rocket_height/2);
        
        if(t1 > svg_width/2 && t2 > svg_height/2){
            tempx = 100;
            tempy = 100;
        }else if(t1 < svg_width/2 && t2 < svg_height/2){
            tempx = -100;
            tempy = -100;
        }else if(t1 > svg_width/2 && t2 < svg_height/2){
            tempx = 100;
            tempy = -100;
        }else if(t1 < svg_width/2 && t2 > svg_height/2){
            tempx = -100;
            tempy = 100;
        }else if(t1 > svg_width/2 && t2 == svg_height/2){
            tempx = 100;
            tempy = 0;
        }else if(t1 < svg_width/2 && t2 == svg_height/2){
            tempx = -100;
            tempy = 0;
        }else if(t1 == svg_width/2 && t2 > svg_height/2){
            tempx = 0;
            tempy = 100;
        }else if(t1 == svg_width/2 && t2 < svg_height/2){
            tempx = 0;
            tempy = -100;
        }

        link = d3.linkHorizontal()({
            source: [radius * Math.cos(angle) + svg_width/2 ,radius * Math.sin(angle) + svg_height/2 ] ,
            target: [radius * Math.cos(angle) + svg_width/2 + tempx  ,radius * Math.sin(angle) + svg_height/2  + tempy ] ,
        });
    
        svg.append('path')
        .attr('d', link)
        .attr('stroke', 'white')
        .attr('opacity', 0.4)
        .attr('fill', 'none');

        if(t1 > svg_width/2 && t2 > svg_height/2){
            tempx = 145;
            tempy = 100;
        }else if(t1 < svg_width/2 && t2 < svg_height/2){
            tempx = -228;
            tempy = -100;
        }else if(t1 > svg_width/2 && t2 < svg_height/2){
            tempx = 145;
            tempy = -100;
        }else if(t1 < svg_width/2 && t2 > svg_height/2){
            tempx = -228;
            tempy = 100;
        }else if(t1 > svg_width/2 && t2 == svg_height/2){
            tempx = 145;
            tempy = 0;
        }else if(t1 < svg_width/2 && t2 == svg_height/2){
            tempx = -228;
            tempy = 0;
        }else if(t1 == svg_width/2 && t2 > svg_height/2){
            tempx = 0;
            tempy = 100;
        }else if(t1 == svg_width/2 && t2 < svg_height/2){
            tempx = 0;
            tempy = -100;
        }

        
        let div = d3.select('body').append('div')
        .attr("class", "tooltip-map");

    
        
        div.html(`${yearvals[i]['rocket']}  </br>${yearvals[i]['dogs']}`)
          .style("left",`${radius * Math.cos(angle) + svg_width/2 + tempx }px`)
          .style("top", `${radius * Math.sin(angle) + svg_height/2 + tempy + 130}px`)
          .style('border',  `2px solid ${yearvals[i]['color']}`);

        
        
        // let divtooltip = d3.select('body')
        // .append('div')
        // .attr("class", "tooltip");

        div.append('span')
        .attr('class', 'tooltiptext')
        .html(`${yearvals[i]['Result']}`);
        
        // .html(yearvals[i]['rocket'] + "</br>" + yearvals[i]['dogs']);
        
        // tempdiv.append('text')
        // .attr('x', radius * Math.cos(angle) + svg_width/2 + tempx )
        // .attr('y', radius * Math.sin(angle) + svg_height/2  + tempy)
        // .text(yearvals[i]['rocket'])
        // .attr('font-family', 'sans-serif')
        // .attr('font-size', '20px')
        // .attr('fill', 'white')
        
        // tempdiv.append('text')
        // .attr('x', radius * Math.cos(angle) + svg_width/2 + tempx )
        // .attr('y', radius * Math.sin(angle) + svg_height/2  + tempy)
        // .attr('dy', 15)
        // .text(yearvals[i]['dogs'])
        // .attr('font-family', 'sans-serif')
        // .attr('font-size', '12px')
        // .attr('fill', 'white');
        
        
    }
  
}

