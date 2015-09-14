 var dataSet = [
			["","Zen Interiors JLT","O2 tower","04-340-5050","Interior Designer","","http://zeninteriors.net/jumeirah-lake-towers-o2-tower-dubai-uae"],
			["","Lake Side Interior","Cluster D2, Lake Terrace Tower","04-435-6067","Interior Designer","","http://tempodubai.com/contact-us"],
			["","Office Fitouts","","04-457-9339","Interior Designer","",""],
			["","Palladio Interiors","Cluster, Indigo Icon Tower","04-427-9610","Interior Designer","","http://palladiointeriors.ae"],
			["","Levant (Mark of Luxury)","Cluster I, Silver Tower, Suite 19D&E","04-447-7940","Interior Designer","","http://levant.com/"]
		];

$(document).ready(function() {
    $('#interiorData').DataTable( {
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