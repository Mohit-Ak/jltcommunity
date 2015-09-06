var dataSet = [
	["","The Champiob Club (Martial Arts)","Cluster L","04-447-4980","Fitness Center","","http://thechampionclub.com/index.php"],
	["","Smart Fitness","Cluster M","04-438-5055","Fitness Center","",""],
	["","Target Gym","Cluster Q","04-421-0372","Fitness Center","","www.targetgym.ae"],
	["","Fitness Zone ","Cluster R","04-451-0522","Fitness Center","",""],
	["","Fit My Way","Cluster X2, ShopNo:S 14","04-420-3677","Fitness Center","","www.fitmyway.net"],
	["","Rails Billiards & Snooker ","Red Diamond, JLT","04-432-7742","Fitness Center","","www.rails.ae"],
	["","Finesse (him & her - JLT)","Cluster S3","04-447-1815","Fitness Center","","www.finessdubai.com"],
	["","Cool Look Aesthetic & Fitness Ceter","Cluster E, Lake View No:7-11","04-368-8736","Fitness Center","","http://www.jeaniqueyogaandpilates.com/"],
	["","Jeanique Yoga And Pilates JLT","Cluster I, Platinum Tower, Shop:510","055-788-5977","Fitness Center","",""],
	["","Soul Fitness Club","Cluster A","04-438-0000","Fitness Center","",""],
	["","Lifespark Reebok","Cluster H, Concorde Tower, Shop:G10","04-450-8234","Fitness Center","","http://www.reebokcrossfitlifespark.com/"]  
];


 
$(document).ready(function() {
    $('#fitnessData').DataTable( {
        data: dataSet,
        columns: [
            { title: "Logo" },
            { title: "Name" },
            { title: "Address" },
            { title: "Contact No." },
            { title: "Type" },
            { title: "Map" },
            { title: "Website" }
        ],
        "aoColumnDefs": [
                          {
                              "aTargets":[0],  
                              "mRender": function ( data, type, row ) {
                            	//  console.log("mrender Called -",data);
                                  return "<img width=150 height=150 src='images/mockThumbnail.png'>";
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