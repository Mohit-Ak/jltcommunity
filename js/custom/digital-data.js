var dataSet = [
			
			["descoonline.png","Desco (copy & print center)","HDS Tower","04-433-7507/7508","Digital Services","","http://descoonline.com/"],
			["descoonline.png","Desco (copy & print center)","HDS Business Centre","055-302-6162","Digital Services","","http://descoonline.com/"],
			["descoonline.png","Desco (copy & print center)","Al Mas Tower","04-375-2059","Digital Services","","http://descoonline.com/"],
			["descoonline.png","Desco (copy & print center)","Tiffany Tower","04-362-2055","Digital Services","","http://descoonline.com/"],
			["descoonline.png","Desco (copy & print center)","Palladium","055-302-6214","Digital Services","","http://descoonline.com/"],
			["descoonline.png","Desco (copy & print center)","JBC 1","04-434-5663/2","Digital Services","","http://descoonline.com/"],
			["descoonline.png","Desco (copy & print center)","1 Lake Plaza","04-554-7678","Digital Services","","http://descoonline.com/"],
			["","V Print ","Cluster F","04-276-7571","Digital Services","","http://trinityitsupplies.com/"],
			["printstation.jpg","Print Station ","Cluster X3","050-394-5638","Digital Services","","http://printstation.ae/"],
			["theimprintstudio.jpg","IM Print Studio","Cluster T, Lake Plaza","04-423-2654","Digital Services","","http://theimprintstudio.com"],
			["stardigitalprints.jpg","Star Digital Prints ","Cluster Y, Lake Shore Tower","04-551-6440","Digital Services","","http://stardigitalprints.com/online/"],
			["jiffyprintz.jpg","Jiffy Printz","Cluster Y, JBC 5","04-422.4231","Digital Services","","http://jiffyprintz.com"],
			["trinityitsupplies.png","Trinity IT Supplies JLT","HDS Tower, Shop NO G16","04-422-9808","Digital Services","","http://trinityitsupplies.com/"],
			["","Commscope","JBC 5","04-390-0980","OtherServices","","http://stardigitalprints.com/online/"],
			["","Cad Repro Graphics LLC","Cluster B ","04-361-4445","Digital / Graphics Services","",""],
			["","Techno Graphics","Cluster T","04-361-8759","Digital / Graphics","",""],
			["","New Phones Land JLT","Cluster B, Shop#15","04-434-1477","Digital Services","",""],
			["","Pro Service - Smart Plus (Typing Service)","Cluster J","04-431-2715","Typing Services","",""],
			["","Taqat Tech","Cluster J","04-553-1460","OtherServices","","http://hridubai.com/"],
			["","City Stationery JLT","Cluster J","04-423-2087","Stationery Shop","",""],
			["techfield.png","Techfield DMCC","Jumeirah Lakes Towers, Dubai","04-427-2483 / 0502548667 ","Digital Services","https://goo.gl/maps/im8q9frDXdT2",""],
			["stepbystep.png","Step By Step","Clust T, One Lake Plaza","04-420-1743","Digital Services","","http://stepbystepjlt.com"],
			["fixit.png","Fixit Express","Almas -Tower, Shop No:01-26","04-427-6606","Digital Services","","http://fixituae.com"]
				
		];

$(document).ready(function() {
    $('#digitalData').DataTable( {
        data: dataSet,
        columns: [
            { title: "",bSortable: false},
            { title: "Name", "sClass": "datatables_action"},
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
                            		  return "<img width=150 height=150 src='images/mockThumbnail.png' class='mockThumbnail'>";
	                        	  }else{
	                        		  return "<img width=150 height=150 src='images/jltfacility/digital/"+data+"'>";
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