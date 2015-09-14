    var dataSet = [
			["","Sherwoods Property","Cluster O, Madina Tower","04-432-8221","Real Estate Services","","http://sherwoodsproperty.com"],
			["","Core Savills (Real Estate Property Services)","Almas Tower","04-423-9933","Real Estate Services","","http://core-me.com"],
			["","PropSpace Real Estate CRM ","Mazaya Business Avenue","04-420-1044","Real Estate Services","","http://propspace.com"],
			["","Almasah International ","Reef Tower","04-422-4200","Real Estate Services","","http://almasahint.com"],
			["","Sapphire & Co. JLT","Goldcrest Executive","04-447-1778","Real Estate Services","","http://sapphiredubai.com"],
			["","Orient Desert Real Estate","Armada P3","04-435-6856","Real Estate Services","","http://orientdesertrealestate.com"],
			["","Atomic Properties","1 Lake Plaza","04-434-2678","Real Estate Services","","http://atomicproperties.org"],
			["","BetterHomes","Cluster D","04-306-8722","Rent & Sales","",""],
			["","Zen Indigo Properties LLC","Indigo Tower","","Rent & Sales","",""]
		];
 
$(document).ready(function() {
    $('#realestateservicesData').DataTable( {
        data: dataSet,
        columns: [
            { title: "Logo",bSortable: false },
            { title: "Name" },
            { title: "Address" },
            { title: "Contact No." },
            { title: "Type" },
            { title: "Map",bSortable: false },
            { title: "Website" ,"width" : "10%"}
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