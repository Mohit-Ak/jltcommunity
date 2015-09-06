    var dataSet = [
			
		["","The First Studio (Dance School)","Cluster A, Lake Side Residence","04-453-9691","Training / Learning Centers","","www.thefirststudio.wix.com"],
		["","Tempo Dance Center ","Red Diamond Center JLT","04-420-2393","Training / Learning Centers","","http://www.tempodubai.com/"],
		["","Crystal Dance Center (Ballroon Dancing)","Cluster N, Dome Tower, 15th Floor","052-285-8304","Training / Learning Centers","","http://www.crystaldancecenter.com/"],
		["","Arthur Murray Ballroom Dance","Reef Tower, No 201","04-448-6458","Training / Learning Centers","","www.arthurmurray.com"],
		["","Musical Express Institute","Cluster N, JBC 4","04-553-0757","Training / Learning Centers","",""],
		["","The Coffee Training Institute (Coffee Brewing Tech)","Dubai Arch center","04-451-6363","Training / Learning Centers","","http://www.tctiudc.com/"],
		["","Scafa (Culinary School)","Cluster I, Promenage Level,No:6","04-379-4044","Training / Learning Centers","","http://www.scafa.ae/"],
		["","Golden Falcon Karate","Fortune Executive Tower","04-450-8538","Training / Learning Centers","","www.goldenfalconkarate.com"],
		["","Berlitz language center","Indigo Icon 11th Floor","04-457-2263","Training / Learning Centers","","www.rainbowvalleynursery.com"],
		["","Golden Age Institute (Learn Arabic)","Swiss Tower","04-453-3046","Training / Learning Centers","","http://www.berlitz.ae/"],
		["","Marjan Training Centre (hair,nail, skincare)","Saba 1, 7th Floor","04-423-3700","Training / Learning Centers","","http://www.marjanbeauty.ae/"],
		["","Benton ","JBC5, 29th Floor:2902","050-871-6205","Training / Learning Centers","","http://www.makeuptrainingcenter.com/"],
		["","Speak - English Language institute","Cluster S","04-431-1232","Training / Learning Centers","","http://www.speak.ae/"]

		];


 
$(document).ready(function() {
    $('#trainingcentresData').DataTable( {
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