    var dataSet = [
		["kidskingdom.png","Kid Kare Nursery","Cluster E","04-441-7673","Nursery / Kids Care","","http://kidskingdom.ae/"],
		["rainbowvalleynursery.png","Rainbow Valley Nursery","Cluster G","04-423-2540","Nursery / Kids Care","","http://rainbowvalleynursery.com/"],
		["four2fourcare.png","Four 2 Four Nursery ","Cluster J1, Gold Crest Views","04-451-7450","Nursery / Kids Care","","http://four2fourcare.com/"],
		["kidskingdom.png","Kids Kingdom","Cluster L","04-552-1585","Nursery / Kids Care","","http://kidskingdom.ae/"],
		["","Baby Home Nursery","Cluster N","055-973-1097","Nursery / Kids Care","","http://babyhomenursery.com/"],
		["tinytownnursery.jpg","Tiny Town - Play Lounge","cluster Q","04-883-0175","Nursery / Kids Care","","http://tinytownnursery.ae/"],
		["learningladdernursery.png","Ladder Nursery","Cluster Q","056-728-3801","Nursery / Kids Care","","http://learningladdernursery.com/"],
		["learningladdernursery.png","Ladder Nursery","Cluster V","04-277-5720","Nursery / Kids Care","","http://learningladdernursery.com/"],
		["dewdropsnursery.jpg","Dew Drop Nursery","Cluster X,1, Jumeirah Bay X1","04-422-9397","Nursery / Kids Care","","http://dewdropsnursery.com/"],
		["dewdropsnursery.jpg","Dew Drop Nursery","Cluster Y, JBC-2","04-368-6399","Nursery / Kids Care","","http://dewdropsnursery.com/"],
		["mosaicnursery.png","Mosaic Nursery","Cluster F Fortune Tower","04-425-6670","Nursery / Kids Care","","http://mosaicnursery.com"],
		["metamindz.png","Meta Mindz Learning Center","Red Diamond Center JLT","04-368-5604","Nursery / Kids Care","","http://metamindz.com/"],
		["vernuselc.png","Vernus Nursery Learning Center","Cluster U","055-437-4282","Nursery / Kids Care","","http://vernuselc.ae/"],
		["kiddiescafe.png","Kiddies Café","Cluster Y","04-360-8571","Nursery / Kids Care","","http://kiddiescafe.com"]
		];
 
$(document).ready(function() {
    $('#nurseryData').DataTable( {
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
	                        		  return "<img width=150 height=150 src='images/jltfacility/onursery/"+data+"'>";
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