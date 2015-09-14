var dataSet = [
	["thechampionclubcom.png","The Champiob Club (Martial Arts)","Cluster L","04-447-4980","Fitness Center","","http://thechampionclub.com/index.php"],
	["","Smart Fitness","Cluster M","04-438-5055","Fitness Center","",""],
	["targetgym.png","Target Gym","Cluster Q","04-421-0372","Fitness Center","","http://targetgym.ae"],
	["","Fitness Zone ","Cluster R","04-451-0522","Fitness Center","",""],
	["fitmyway.png","Fit My Way","Cluster X2, ShopNo:S 14","04-420-3677","Fitness Center","","http://fitmyway.net"],
	["rails.png","Rails Billiards & Snooker ","Red Diamond, JLT","04-432-7742","Fitness Center","","http://rails.ae"],
	["","Cool Look Aesthetic & Fitness Ceter","Cluster E, Lake View No:7-11","04-368-8736","Fitness Center","","http://jeaniqueyogaandpilates.com/"],
	["jeaniqueyogaandpilates.png","Jeanique Yoga And Pilates JLT","Cluster I, Platinum Tower, Shop:510","055-788-5977","Fitness Center","",""],
	["","Soul Fitness Club","Cluster A","04-438-0000","Fitness Center","",""],
	["lifespark.png","Lifespark Reebok","Cluster H, Concorde Tower, Shop:G10","04-450-8234","Fitness Center","","http://reebokcrossfitlifespark.com/"]  
];


 
$(document).ready(function() {
    $('#fitnessData').DataTable( {
        data: dataSet,
        columns: [
            { title: "Logo",bSortable: false },
            { title: "Name" },
            { title: "Address" },
            { title: "Contact No." },
            { title: "Type" },
            { title: "Map",bSortable: false },
            { title: "Website" }
        ],
          "order": [[ 1, "asc" ]],
        
        "aoColumnDefs": [
                          {
                              "aTargets":[0],  
                              "mRender": function ( data, type, row ) {
                            	//  console.log("mrender Called -",data);
                            	  if(data==""){
                            		  return "<img width=150 height=150 src='images/mockThumbnail.png'>";
	                        	  }else{
	                        		  return "<img width=150 height=150 src='images/jltfacility/fitness/"+data+"'>";
	                              }
                              }
                          },
                          {
	                          "aTargets":[5],  
	                          "mRender": function ( data, type, row ) {
	                        	//  console.log("mrender Called -",data);
	                        	  if(data==""){
	                        		  return "<span>N.A</span>";
	                        	  }else{
	                        		  return "<a href="+data+" target='_blank'>Map</a>";
	                              }
	                          }
                          },
                          {
	                          "aTargets":[6],  
	                          "mRender": function ( data, type, row ) {
	                        	 // console.log("mrender Called -",data);
	                        	  if(data==""){
	                        		  return "<span>N.A</span>";
	                        	  }else{
	                        		  return "<a href="+data+" target='_blank'>"+data+"</a>";
	                              }
	                          }
                          }
             ]

    } );
} );