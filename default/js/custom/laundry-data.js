 var dataSet = [
			
		["","Fluff N fold Laundry","Cluster B","04-369-7463","Laundry & Drycleaners","",""],
		["","Royal Touch Automatic Laundry","Cluster E, Global Lake view","04-421-4215","Laundry & Drycleaners","",""],
		["","Sparkle Line Laundry","Cluster F2, HDS Tower","04-368-8259","Laundry & Drycleaners","",""],
		["","Al Mosky Laundry","Cluster P, Almada Tower1","04-344-0253","Laundry & Drycleaners","",""],
		["","Lakes Laundry","Cluster Q","04-454-2505","Laundry & Drycleaners","",""],
		["","Evershine Drycleaners","Cluster R","04-431-7191","Laundry & Drycleaners","","http://evershinelaundry.net"],
		["","Suds R Us Laundry","Cluster T","04-363-5111","Laundry & Drycleaners","",""],
		["","April Laundry","Cluster T","04-435-6239","Laundry & Drycleaners","",""],
		["","AMS Dry cleaners & Laundry","Cluster U, Al Seef Tower","055-963-3786","Laundry & Drycleaners","",""],
		["","Tom & Jerry Laundry","Cluster J2, Shop No.20","04-443-2575","Laundry & Drycleaners","","http://tjlaundry.com/contact.html"],
		["","Veritas Dry Clean Laundry","Gold Crest View","04-447-1632","Laundry & Drycleaners","",""]
];

 
$(document).ready(function() {
    $('#laundryData').DataTable( {
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