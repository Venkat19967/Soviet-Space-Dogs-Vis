var svg;
var earth;
var iss;

var tt;

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


    
    

    Promise.all([d3.json('data/flights.json')])
    .then(function(values){
        flights = values[0];
        console.log(flights);
        let yrval = document.getElementById("year-input").value;
        drawcircles(flights[String(yrval)]);
    })

    d3.select('#year-input').on('input', function () {
        
        yrval = this.value;

        drawcircles(flights[String(yrval)])
    });

    
    
});

function drawcircles(yearvals){
   
    
    
    svg.html("");
    d3.selectAll('#info').remove();


    svg.append('text')
    .attr('x', svg_width/2 - earth_width/2 + 50 + 40)
    .attr('y', 22)
    .attr('fill', 'white')
    .attr("font-weight",100)
    .text('100');
    svg.append('text')
    .attr('x', svg_width/2 - earth_width/2 + 150)
    .attr('y', 45)
    .attr('fill', 'white')
    .text('212');
    svg.append('text')
    .attr('x', svg_width/2 - earth_width/2 + 280)
    .attr('y', 70)
    .attr('fill', 'white')
    .text('451');
    svg.append('text')
    .attr('x', svg_width/2 - earth_width/2 + 295)
    .attr('y', 95)
    .attr('fill', 'white')
    .text('Orbital');

    svg.append('line')
    .style("stroke", "white")
    .style("stroke-width", 1)
    .attr("x1", svg_width/2 - earth_width/2 + 50)
    .attr("y1", 25)
    .attr("x2", svg_width/2 - earth_width/2 + 50 + 115)
    .attr("y2", 25);


    svg.append('line')
    .style("stroke", "white")
    .style("stroke-width", 1)
    .attr("x1", svg_width/2 - earth_width/2 + 50)
    .attr("y1", 50)
    .attr("x2", svg_width/2 - earth_width/2 + 50 + 243.8)
    .attr("y2", 50);

    svg.append('line')
    .style("stroke", "white")
    .style("stroke-width", 1)
    .attr("x1", svg_width/2 - earth_width/2 + 50)
    .attr("y1", 75)
    .attr("x2", svg_width/2 - earth_width/2 + 50 + 518.65)
    .attr("y2", 75);

    svg.append('line')
    .style("stroke", "white")
    .style("stroke-width", 1)
    .attr("x1", svg_width/2 - earth_width/2 + 50)
    .attr("y1", 100)
    .attr("x2", svg_width/2 - earth_width/2 + 50 + 575)
    .attr("y2", 100);

    svg.append('line')
    .style("stroke", "white")
    .style("stroke-width", 1)
    .attr("x1", svg_width/2 - earth_width/2 + 50)
    .attr("y1", 25)
    .attr("x2", svg_width/2 - earth_width/2 + 50 )
    .attr("y2", svg_height/2 - earth_height/2 +50)
    .attr('opacity', 0.1);

    svg.append('line')
    .style("stroke", "white")
    .style("stroke-width", 1)
    .attr("x1", svg_width/2 - earth_width/2 + 50 + 115)
    .attr("y1", 25)
    .attr("x2", svg_width/2 - earth_width/2 + 50 + 115)
    .attr("y2", svg_height/2 - earth_height/2 +50)
    .attr('opacity', 0.1);

    svg.append('line')
    .style("stroke", "white")
    .style("stroke-width", 1)
    .attr("x1", svg_width/2 - earth_width/2 + 50 + 575)
    .attr("y1", 100)
    .attr("x2", svg_width/2 - earth_width/2 + 50 + 575)
    .attr("y2", svg_height/2 - earth_height/2 +50)
    .attr('opacity', 0.1);

    svg.append('line')
    .style("stroke", "white")
    .style("stroke-width", 1)
    .attr("x1", svg_width/2 - earth_width/2 + 50 + 518.65)
    .attr("y1", 75)
    .attr("x2", svg_width/2 - earth_width/2 + 50 + 518.65)
    .attr("y2", svg_height/2 - earth_height/2 +50)
    .attr('opacity', 0.1);

    svg.append('line')
    .style("stroke", "white")
    .style("stroke-width", 1)
    .attr("x1", svg_width/2 - earth_width/2 + 50 + 243.8)
    .attr("y1", 50)
    .attr("x2", svg_width/2 - earth_width/2 + 50 + 243.8 )
    .attr("y2", svg_height/2 - earth_height/2 +50)
    .attr('opacity', 0.1);


    earth = svg.append('image')
    .attr('xlink:href', '../images/globe.svg')
    .attr('width', 100)
    .attr('height', 100)
    .attr('x', svg_width/2 - earth_width/2)
    .attr('y', svg_height/2 - earth_height/2)
    .attr('preserveAspectRatio','none')
    .attr('id','earth');   


    svg.append('rect')
    .attr('x', 20)
    .attr('y', 20)
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('width', 20)
    .attr('height', 20)
    .attr('stroke', 'green')
    .attr('stroke-width', 2.5)
    .attr('fill', 'none');

    svg.append('text')
    .attr('x', 60)
    .attr('y', 35)
    .attr('fill', 'white')
    .text('Mission successful');
   
    svg.append('rect')
    .attr('x', 20)
    .attr('y', 60)
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('width', 20)
    .attr('height', 20)
    .attr('stroke', 'yellow')
    .attr('stroke-width', 2.5)
    .attr('fill', 'none');

    svg.append('text')
    .attr('x', 60)
    .attr('y', 75)
    .attr('fill', 'white')
    .text('One dog recovered');

    svg.append('rect')
    .attr('x', 20)
    .attr('y', 100)
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('width', 20)
    .attr('height', 20)
    .attr('stroke', 'red')
    .attr('stroke-width', 2.5)
    .attr('fill', 'none');

    svg.append('text')
    .attr('x', 60)
    .attr('y', 115)
    .attr('fill', 'white')
    .text('Mission failure');

   
    svg.append('text')
    .attr('x', 25)
    .attr('y', 150)
    .attr('fill', 'white')
    .text('♂');

    svg.append('text')
    .attr('x', 60)
    .attr('y', 150)
    .attr('fill', 'white')
    .text('Male');

    svg.append('text')
    .attr('x', 25)
    .attr('y', 180)
    .attr('fill', 'white')
    .style("font-weight","300" )
    .text('♀');

    svg.append('text')
    .attr('x', 60)
    .attr('y', 180)
    .attr('fill', 'white')
    .text('Female');

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

        tooltip = d3.select("body").append("div")
        .attr("class", "rocket-hover")
        .attr('id', `rocket-hover${String(i)}`)
        .html(`${yearvals[i]['result']}`)
        .style("opacity", 0);
        
        // rocket image
        svg.append('image')
        .attr('xlink:href', '../images/ufo-alien-svgrepo-com.svg')
        .attr('width', 50)
        .attr('height', 50)
        .attr('x', radius * Math.cos(angle) + svg_width/2 - rocket_width/2)
        .attr('y', radius * Math.sin(angle) + svg_height/2 - rocket_height/2)
        .attr('preserveAspectRatio','none')
        .attr('id',`rocket${i}`)
        .on('mouseover', function(d,i) {
            let tempid = d3.select(this).attr('id');
            console.log(tempid[6]);
            tt = d3.select('#rocket-hover' +tempid[6]);
            tt.transition()
              .duration(50)
              .style("opacity", 1);
            tt
            .style("left", (d3.event.pageX) + 10 + "px")
            .style("top", (d3.event.pageY) + 10 + "px");
          })
          .on('mousemove', function(d,i) {
            let tempid = d3.select(this).attr('id');
            console.log(tempid[6]);
            tt = d3.select('#rocket-hover' +tempid[6]);
            tt.transition()
              .duration(50)
              .style("opacity", 1);
            tt
            .style("left", (d3.event.pageX) + 10 + "px")
            .style("top", (d3.event.pageY) + 10 + "px");
          })
          .on('mouseout', function(d,i) {
            tt.transition()
              .duration(50)
              .style("opacity", 0);
          });

        
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
        .attr("class", "tooltip-map")
        .attr('id','info');
        
        div.html(`${yearvals[i]['rocket']}  </br>${yearvals[i]['dogs']}`)
          .style("left",`${radius * Math.cos(angle) + svg_width/2 + tempx }px`)
          .style("top", `${radius * Math.sin(angle) + svg_height/2 + tempy + 130}px`)
          .style('border',  `2px solid ${yearvals[i]['color']}`);
        
    }
}