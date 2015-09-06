var dataSet = [
			["","Eagle Riders (MotorCycleRental)","Cluster H - Concorde Tower","04-430-6400","OtherServices","","http://www.eaglerider.ae/"],
			["","Bikers ","Cluster H","052-622-1888","OtherServices","",""],
			["","Dubai Link (travel & Tours)","Movenpick Hotel JLT","04-448 8111","OtherServices","","http://www.dubailinktours.com/"],
			["","Exotic Tours & Travels","Cluster W","04-441-5671","OtherServices","","www.indigojlt.com"],
			["","South Travel JLT","Cluster F, HDS Tower","04-447-3839","OtherServices","","http://www.southtravels.com/"],
			["","Acme Travel & Tours JLT","Cluster P, Armada Tower 2","04-379-4787","OtherServices","","http://acme-travels.com/"],
			["","AAA Rent A Car","Cluster D3, Lake Tower City","04-360-3337","OtherServices","","http://aaarentacarjlt.com/"],
			["","PCR-Premium Car Rentals","Cluster G, Jumeirah Business Center G","04-360-9991","OtherServices","","http://pcr.ae/"],
			["","777 Rent A Car","Cluster Q","04-363-8582","OtherServices","",""],
			["","Indigo Rent A Car","Cluster T","04-43506504/056-744-8008","OtherServices","","www.indigojlt.com"]
		];


$(document).ready(function() {
    $('#travelData').DataTable( {
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