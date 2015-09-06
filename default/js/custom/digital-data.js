var dataSet = [
			
			["","Desco (copy & print center)","HDS Tower","04-433-7507/7508","Digital Services","","http://www.descoonline.com/"],
			["","Desco (copy & print center)","HDS Business Centre","055-302-6162","Digital Services","","http://www.descoonline.com/"],
			["","Desco (copy & print center)","Al Mas Tower","04-375-2059","Digital Services","","http://www.descoonline.com/"],
			["","Desco (copy & print center)","Tiffany Tower","04-362-2055","Digital Services","","http://www.descoonline.com/"],
			["","Desco (copy & print center)","Palladium","055-302-6214","Digital Services","","http://www.descoonline.com/"],
			["","Desco (copy & print center)","JBC 1","04-434-5663/2","Digital Services","","http://www.descoonline.com/"],
			["","Desco (copy & print center)","1 Lake Plaza","04-554-7678","Digital Services","","http://www.descoonline.com/"],
			["","V Print ","Cluster F","04-276-7571","Digital Services","","http://www.trinityitsupplies.com/"],
			["","Print Station ","Cluster X","04-553-8632","Digital Services","","http://www.printstation.ae/"],
			["","IM Print Studio","Cluster T, Lake Plaza","04-423-2654","Digital Services","","http://www.theimprintstudio.com/about"],
			["","Star Digital Prints ","Cluster Y, Lake Shore Tower","04-551-6440","Digital Services","","http://stardigitalprints.com/online/"],
			["","Jiffy Printz","Cluster Y, JBC 5","04-422.4231","Digital Services","","www.jiffyprintz.com"],
			["","Trinity IT Supplies JLT","HDS Tower, Shop NO G16","04-422-9808","Digital Services","","http://www.trinityitsupplies.com/"],
			["","Commscope","JBC 5","04-390-0980","OtherServices","","http://stardigitalprints.com/online/"],
			["","Cad Repro Graphics LLC","Cluster B ","04-361-4445","Digital / Graphics Services","",""],
			["","Techno Graphics","Cluster T","04-361-8759","Digital / Graphics","",""],
			["","New Phones Land JLT","Cluster B, Shop#15","04-434-1477","Digital Services","",""],
			["","Pro Service - Smart Plus (Typing Service)","Cluster J","04-431-2715","Typing Services","",""],
			["","Taqat Tech","Cluster J","04-553-1460","OtherServices","","http://www.hridubai.com/"],
			["","City Stationery JLT","Cluster J","04-423-2087","Stationery Shop","",""]
		];

$(document).ready(function() {
    $('#digitalData').DataTable( {
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