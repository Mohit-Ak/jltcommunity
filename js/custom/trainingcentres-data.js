    var dataSet = [
			
		["","The First Studio (Dance School)","Cluster A, Lake Side Residence","04-453-9691","Training / Learning Centers","","http://thefirststudio.wix.com"],
		["tempodubai.png","Tempo Dance Center ","Red Diamond Center JLT","04-420-2393","Training / Learning Centers","","http://tempodubai.com/"],
		["crystaldancecenter.png","Crystal Dance Center (Ballroon Dancing)","Cluster N, Dome Tower, 15th Floor","052-285-8304","Training / Learning Centers","","http://crystaldancecenter.com/"],
		["arthurmurray.png","Arthur Murray Ballroom Dance","Reef Tower, No 201","04-448-6458","Training / Learning Centers","","http://arthurmurray.com"],
		["","Musical Express Institute","Cluster N, JBC 4","04-553-0757","Training / Learning Centers","",""],
		["tctiudc.jpg","The Coffee Training Institute (Coffee Brewing Tech)","Dubai Arch center","04-451-6363","Training / Learning Centers","","http://tctiudc.com/"],
		["scafa.png","Scafa (Culinary School)","Cluster I, Promenage Level,No:6","04-379-4044","Training / Learning Centers","","http://scafa.ae/"],
		["goldenfalconkarate.gif","Golden Falcon Karate","Fortune Executive Tower","04-450-8538","Training / Learning Centers","","http://goldenfalconkarate.com"],
		["berlitz.png","Berlitz language center","Indigo Icon 11th Floor","04-457-2263","Training / Learning Centers","","http://berlitz.ae/"],
		["","Golden Age Institute (Learn Arabic)","Swiss Tower","04-453-3046","Training / Learning Centers","","http://berlitz.ae/"],
		["marjanbeauty.jpg","Marjan Training Centre (hair,nail, skincare)","Saba 1, 7th Floor","04-423-3700","Training / Learning Centers","","http://marjanbeauty.ae/"],
		["","Benton ","JBC5, 29th Floor:2902","050-871-6205","Training / Learning Centers","","http://makeuptrainingcenter.com/"],
		["speak.png","Speak - English Language institute","Cluster S","04-431-1232","Training / Learning Centers","","http://speak.ae/"]

		];


 
$(document).ready(function() {
    $('#trainingcentresData').DataTable( {
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
	                        		  return "<img width=150 height=150 src='images/jltfacility/otraining/"+data+"'>";
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