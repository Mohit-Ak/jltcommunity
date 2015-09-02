var dataSet = [
    [ "", "Allons-y JLT", "HDS Tower JLT","04-431-7242","Fast Food / Quick bites", "Map", "" ],
    [ "", "Charley's Grilled Subs", "Cluster E","04-438-5009", "Fast Food / Quick bites", "Map", "http://www.charleysme.com/" ],
    [ "", "Salt & pepper Village JLT", "Cluster D, Lake Terrace Tower, Ground Level","04-421-4501", "Fast Food / Quick bites", "Map", "http://www.saltpepperme.com/" ],
    [ "", "Hardees", "Cluster I","055-219-6337", "Fast Food / Quick bites", "Map", "http://www.hardees.com/" ],
    [ "", "KFC", "Cluster I","055-219-6337", "Fast Food / Quick bites", "Map", "http://kfc-arabia.com/english/home" ],
    [ "", "Grab N' Go", "Cluster I","04-425-1930", "Fast Food / Quick bites", "Map", "http://www.grabngouae.com/" ],
    [ "", "Chesters", "Cluster U","04-432-9029", "Fast Food / Quick bites", "Map", "" ]
  
];
 
$(document).ready(function() {
    $('#hotelsData').DataTable( {
        data: dataSet,
        columns: [
            { title: "Logo" },
            { title: "Name" },
            { title: "Address" },
            { title: "Contact No." },
            { title: "Type" },
            { title: "Map" },
            { title: "Website" ,"width" : "10%"}
        ],
        "aoColumnDefs": [
                          {
                              "aTargets":[0],  
                              "mRender": function ( data, type, row ) {
                            	//  console.log("mrender Called -",data);
                                  return "<img width=150 height=150 src='images/mockThumbnail.png'>"
                              }
                          },
                          {
	                          "aTargets":[5],  
	                          "mRender": function ( data, type, row ) {
	                        	//  console.log("mrender Called -",data);
	                              return "<a href="+data+" target='_blank'>Map</a>"
	                          }
                          },
                          {
	                          "aTargets":[6],  
	                          "mRender": function ( data, type, row ) {
	                        	 // console.log("mrender Called -",data);
	                              return "<a href="+data+" target='_blank'>"+data+"</a>"
	                          }
                          }
             ]

    } );
} );