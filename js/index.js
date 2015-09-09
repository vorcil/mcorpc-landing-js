
function startThePage(){
 
 var height = $(document).height() - 20;
 
 var width  = $(document).width();

 
 var h = height/2 - 100;
 
 var w = width/2;

  
//dark #3C3F42
//green #377D5B
//newgreen #48b49f

var svgSelection = 
    d3.select("body").append("svg:svg")
   
   .attr("width", width)
    
  .attr("height", height).style("position", "absolute")
 .style("z-index", "1")
  

  for (var i = 0; i<13; i++){
   

 var heightPlacement = (Math.random())*height*(0.8) + 50;
   
 var widthPlacement = (Math.random())*width*(0.8) + 100;

  
  var myCircle = svgSelection.append("rect")
   
   .attr("rx",0)
    
  .attr("ry",0)
  
    .attr("x", 100 + widthPlacement)
   
   .attr("y", 50 + heightPlacement)
  
    .attr("width",0)
    
  .attr("height",0)
    
  .style("fill", "#3C3F42")
    
  .style("stroke", "#3C3F42");

  }
  


for (var j = 0; j < 3; j++){
  
  var heightPlacement = (Math.random())*height*(0.8) + 50;
  
  var widthPlacement = (Math.random())*width*(0.8) + 100;

    
var myCircle = svgSelection.append("circle")
    
    .attr("cx", 100 + widthPlacement)
  
      .attr("cy", 50 + heightPlacement)
    
    .attr("r", 0)
     
   .attr("class", "small")
    
    .style("fill", "lightgray")
     
   .style("stroke", "white");
 }
 


 for (var k = 0; k < 5; k++){
   
 var myLines = svgSelection.append("line")
   
   .attr("x1",w)
    
  .attr("y1",h)
    
  .attr("x2",w)
     
 .attr("y2",h)
    
  .style("visibility", "hidden")
    
  .style("stroke", "#3C3F42")
   
   .style("stroke-width", 5);
  }
};



function transitionPage(){
 
 startThePage();
 
 $('.alert').hide();

 
 var height = $(document).height() - 20;
 
 var width  = $(document).width();
  

  var h = height/2 - 100;
 
 var w = width/2;

 


//----------------------------------------------------------===========================================================================
//three middle lines

 var myLines = d3.selectAll("line");

 
 myLines
    .transition()
   
 .delay(4000)
  
  .each(function(d,i){
 
   
  var currentint = i;
   
   var toMaoduration = 1500;
    
  var lineItUp = 750;

  
    switch (currentint){
    


    case 0:
          d3.select(this)
         
   .attr("x1",(w+150))
        
    .attr("y1",(h+120))
      
      .attr("x2",(w+150))
          
  .attr("y2",(h+120))
         
   .transition()
       
     .duration(lineItUp/3)
     
       .style("visibility", "visible")
 
          .attr("x2",w+150)
   
         .attr("y2",(h-80))
         
   .style("stroke-width", 30);
         
   break;
     

   case 1:
          d3.select(this)
        
    .transition()
         
   .duration(250)
         
   .attr("x1",w+153)
       
     .attr("y1", (h-70))
        
    .attr("x2",w+153)
          
  .attr("y2",(h-70))
          
  .transition()
          
  .duration(lineItUp/3)
    
        .style("visibility", "visible")
     
       .attr("x2",(w+285))
         
   .attr("y2",(h+110))
         
   .style("stroke-width", 30);
      
      break;
    

//mid line
    case 2:
          d3.select(this)
      
      .transition()
       
     .duration(500)
          
  .attr("x1",w+288)
          
  .attr("y1",(h+120))
       
     .attr("x2",w+288)
          
  .attr("y2",(h+120))
         
   .transition()
          
  .duration(lineItUp/3)
          
  .style("visibility", "visible")
    
        .attr("x2",w+288)
           
 .attr("y2",(h-80))
          
  .style("stroke-width", 30);
     
       break;
     




   case 3:           //for the circle
          d3.select(this)
      
      .transition()
         
   .duration(500)
        
    .attr("x1",w-50)
      
      .attr("y1",h+15)
         
   .attr("x2",w-50)
         
   .attr("y2",h+15)
         
   .transition()
           
 .duration(lineItUp/3)
          
  .attr("x2",w+50)
          
  .attr("y2",h+15)
           
 .style("visibility","visible")
   
         .style("stroke", "#48b49f")
  
          .style("stroke-width", 30);
  
          break;
      

  case 4:           //for the circle
          d3.select(this)
      
      .transition()
         
   .duration(500)
        
    .attr("x1",w)
      
      .attr("y1",h-40)
         
   .attr("x2",w)
         
   .attr("y2",h-50)
         
   .transition()
           
 .duration(lineItUp/3)
          
  .attr("x2",w)
          
  .attr("y2",h+70)
           
 .style("visibility","visible")
   
         .style("stroke", "#48b49f")
  
          .style("stroke-width", 30);
  
          break;
  

  default:
            break;
      }
    });

 



 var myRectangles = d3.selectAll("rect");    

    
    myRectangles
      .transition()
    
  .duration(2500)
    
  .style("fill", "3C3F42")
  
    .attr("rx", 30)
    
  .attr("ry", 30)
     
 .attr("width",30)
     
 .attr("height",30)
     
 .transition()
     
 .duration(2500)
   
   .attr("y",(height/2))
   
   .each(function(d,i){
       
 var placement = i*(width/15)+30;
     
   d3.select(this)
        
  .transition()
       
   .duration(1000)
       
   .attr("x", placement);
      })
  

    .each(function(d,i){
      
  var currentint = i;
     
   var toMaoduration = 1500;
   
     var lineItUp = 750;
      
  switch (currentint){
       

 
  case 0:
            d3.select(this)
   
           .transition()
          
    .duration(toMaoduration)
        
      .attr("x",(w-325))
             
 .attr("y",(h-80))
            
  .transition()
            
  .duration(lineItUp-100)
      
        .remove();
          

    break;
          case 1:                       //finished
            d3.select(this)
         
     .transition()
         
     .duration(toMaoduration)
    
          .attr("x",(w-325))
         
     .attr("y",h)
            
  .transition()
            
  .duration(lineItUp-100)
        
      .remove();
            

  break;
         

//first line ----------------------------------------------------------===========================================================================

 case 2:                       //finished
            d3.select(this)
         
     .transition()
           
   .duration(toMaoduration)
      
        .attr("x",(w-325))
          
    .attr("y",(h+80))
             
 .transition()
            
  .duration(lineItUp)
       
       .attr("y",(h-80))
         
     .attr("rx",0)
          
    .attr("ry",0)
             
 .attr("width", 30)
             
 .attr("height", 200);
          
    break;
        


  case 3:                       //finished
            d3.select(this)
   
           .transition()
      
        .duration(toMaoduration)
   
           .attr("x",(w-250))
       
       .attr("y", h-70)
              
.transition()
          
    .duration(lineItUp)
       
       .attr("y",(h-60))
           
   .attr("rx",0)
           
   .attr("ry",0)
           
   .attr("width", 30)
           
   .attr("height", 80);
       
     break;
        


  case 4:                       //finished
            d3.select(this)
         
     .transition()
            
  .duration(toMaoduration)
        
      .attr("x",(w-175))
         
     .attr("y",(h-80))
            
  .transition()
             
 .duration(lineItUp-100)
         
     .remove();
         

     break;
          case 5:                       //finished
            d3.select(this)
      
        .transition()
         
     .duration(toMaoduration)
           
   .attr("x",(w-175))
         
     .attr("y", h)
           
   .transition()
           
   .duration(lineItUp-100)
             
 .remove();
           
   break;
          case 6:                       //finished
            d3.select(this)
     
         .transition()
    
          .duration(toMaoduration)
       
       .attr("x",(w-175))
         
     .attr("y",(h+80))
           
   .transition()
           
   .duration(lineItUp)
            
  .attr("y",(h-80))
       
       .attr("rx",0)
           
   .attr("ry",0)
          
    .attr("width", 30)
            
  .attr("height", 200);
           

   break;
          case 7:                       //finished
            d3.select(this)
           
   .transition()
            
  .duration(toMaoduration)
           
   .attr("x",(w-105))   //-95
            
  .attr("y",(h+80))
             
 .transition()
            
  .duration(250/3)
             
 .remove();
            

  break;
          case 8:                       //finished
            d3.select(this)
    
          .transition()
          
    .duration(toMaoduration)
        
      .attr("x",(w-67))
             
 .attr("y",h)
              .transition()
  
            .duration(500/3)
           
   .remove();
            

  break;
          case 9:                       //finished
            d3.select(this)
       
      .transition()
           
   .duration(toMaoduration)
       
       .attr("x",w-15)
         
     .attr("y",(h-80))
            
  .transition()
          
    .duration(250)
          
   .remove();
           

  break;
          case 10:                      //finished
            d3.select(this)
      
        .remove();
           
   break;
          case 11:                      //finished           
            d3.select(this)
          
    .transition()
           
   .duration(toMaoduration)
        
      .attr("x",(w+37))
            
  .attr("y",h)
             
 .transition()
          
    .duration(1000/3)
            
  .remove();
             
 break;
          case 12:                      //finished
            d3.select(this)
        
      .transition()
          
    .duration(toMaoduration)
           
   .attr("x",(w+73))
          
    .attr("y",(h+80))
            
  .transition()
           
   .duration(1250/3)
              .remove();
     
         break;
          default:                      //finished
            d3.selectAll("circle")
     
         .transition()
          
    .duration(toMaoduration)
        
      .attr("x",w)
             
 .attr("y",h);
              break;
   
     }
      });

  


//circle ----------------------------------------------------------===========================================================================
var myCircles = d3.selectAll("circle");

 
 myCircles
   
 .transition()
   
 .duration(2500)
   
 .style("fill", "#48b49f")
    
.attr("r", 15)
    
.transition()
   
 .duration(2500)
  
  .attr("cy",(height/2))
   
 .each(function(d,i){
     

 var placement = i*(width/15)+30;
     
 d3.select(this)
       
 .transition()
     
   .duration(1000)
       
 .attr("cx", placement);
   
 })
   
 .each(function(d,i){
      
  var currentint = i;
     
   var toMaoduration = 1500;
      
  switch (currentint){
          case 0:                      //finished
            d3.select(this)
        
      .transition()
            
  .duration(toMaoduration/2)
          
    .attr("cx",w)
            
  .attr("cy",h+15)
            
  .transition()
            
  .duration(toMaoduration/2)
       
       .attr("r",100);
              

    break;
          case 1:                      //finished
            d3.select(this)
       
       .transition()
        
      .duration(toMaoduration/2)
             
 .attr("cx",w)
         
     .attr("cy",h+15)
             
 .transition()
            
  .duration(toMaoduration/2)
           
   .style("fill","white")
            
  .attr("r", 70);
              break;
                     d3.select(this)
       
       .transition()
            
  .duration(toMaoduration)
            
  //.attr("cx",w)
            
  //.attr("cy",h)
            
  .attr("r",0)
            
  .remove();
             

 break;
          case 2:                      //finished
            d3.select(this)
       
       .transition()
        
      .duration(toMaoduration/2)
             
 .attr("cx",w+65)
         
     .attr("cy",h+15)
             
 .transition()
            
  .duration(toMaoduration/2)
           
   .style("fill","white")
            
  .attr("r", 70);
              break;
   

       default:
            d3.select(this)
       
       .transition()
            
  .duration(toMaoduration)
            
  //.attr("cx",w)
            
  //.attr("cy",h)
            
  .attr("r",0)
            
  .remove();
              break;


      }
      });
 

 //shows the alert
  setTimeout(function(){
    $("#redirect_alert").show('fade-in');
  },4350);
  
//click to redirect
  $('#hitmeup').on("click",function(){
      window.location.href = "home";
  });

//above timer was originally at 5000 (see if this new one looks better)
  //automatic redirection 2.5 seconds after the alert
  setTimeout(function(){
  
  window.location.href = "home";
  },8850);

  //click to redirect
  $('#reload').on("click",function(){
      window.location.href = "home";
  });
};
