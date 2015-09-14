var dataSet = [
			
		["","Pest in the City","Cluster D, Lake Terrace, Shop:3","04-458-0091","Pet(s) Care","","http://petsinthecity.me/"],
		["","Petholicks - One stop Pet Shop","Cluster B, Lake View Tower","04-363-9635","Pet(s) Care","","http://petholicksdubai.com/"],
		["","Europets","Cluster D. Lake Terrace Tower, Shop:7","04-421-4885","Pet(s) Care","","http://europets.net/"],
		["","Pets Plus","Cluster Q, Gate Tower","04-440-5199","Pet(s) Care","","ttps://http://petsplus.ae/"],
		["","Pet House","Cluster T, 1 Lake Plaza,Shop:11","04-552-0526","Pet(s) Care","","http://petshousedubai.com/"],
		["","Pet Sky","Cluster Y","04-456-2202","Pet(s) Care","","http://petskygroup.com/"]
];
 
$(document).ready(function() {
    $('#petsData').DataTable( {
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