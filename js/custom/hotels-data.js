

    var dataSet = [
           		
           		["","UBK Watch Your Speed (Drinks deal)","cluster A","04-438-0000","Hotel Apartments","",""],
           		["","Movenpick Hotel JLT","Cluster A, Building 2","04-438-0000","Hotel Apartments","",""],
           		["bonnington.jpg","Bonnington Hotel Apartments","","","Hotel Apartments","","http://bonningtontower.com/"],
           		["","Pullman Hotel Apartments","","","Hotel Apartments","",""],
           		["","Movenpick Hotel JLT","Cluster A","04-438-0000","Hotel Apartments","",""],
           		["OAKShotelsandresorts.gif","Oaks Hotels & Resorts","JBC","04-436-3434","Hotel Apartments","","http://oakshotelsresorts.com/"]
           	
];
    
  

 
$(document).ready(function() {
    $('#hotelsData').DataTable( {
        data: dataSet,
        columns: [
            { title: "", bSortable: false },
            { title: "Name", "sClass": "datatables_action"},
            { title: "Address" },
            { title: "Contact No." },
            { title: "Type" },
            { title: "Map", bSortable: false},
            { title: "Website" ,"width" : "10%"}
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
	                        		  return "<img width=150 height=150 src='images/jltfacility/hotels/"+data+"'>";
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