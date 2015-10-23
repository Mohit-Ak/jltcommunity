var dataSet = [
			["eaglerider.png","Eagle Riders (MotorCycleRental)","Cluster H - Concorde Tower","04-430-6400","Travel & Rental Services","","http://eaglerider.ae/"],
			["","Bikers ","Cluster H","052-622-1888","OtherServices","",""],
			["dubailinktours.png","Dubai Link (travel & Tours)","Movenpick Hotel JLT","04-448 8111","Travel & Rental Services","","http://dubailinktours.com/"],
			["","Exotic Tours & Travels","Cluster W","04-441-5671","Travel & Rental Services","","http://exotictoursandtravels.com"],
			["southtravels.png","South Travel JLT","Cluster F, HDS Tower","04-447-3839","Travel & Rental Services","","http://southtravels.com/"],
			["acme-travels.png","Acme Travel & Tours JLT","Cluster P, Armada Tower 2","04-379-4787","Travel & Rental Services","","http://acme-travels.com/"],
			["aaarentacarjlt.jpg","AAA Rent A Car","Cluster D3, Lake Tower City","04-360-3337","Travel & Rental Services","","http://aaarentacarjlt.com/"],
			["pcr.png","PCR-Premium Car Rentals","Cluster G, Jumeirah Business Center G","04-360-9991","Travel & Rental Services","","http://pcr.ae/"],
			["","777 Rent A Car","Cluster Q","04-363-8582","Travel & Rental Services","",""],
			["indigojlt.png","Indigo Rent A Car","Cluster T","04-43506504/056-744-8008","Travel & Rental Services","","http://indigojlt.com"]
		];


$(document).ready(function() {
    $('#travelData').DataTable( {
        data: dataSet,
        columns: [
            { title: "",bSortable: false },
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
	                        		  return "<img width=150 height=150 src='images/jltfacility/otravel/"+data+"'>";
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