    var dataSet = [
			["sherwoodsproperty.png","Sherwoods Property","Cluster O, Madina Tower","04-432-8221","Real Estate Services","","http://sherwoodsproperty.com"],
			["core-me.jpg","Core Savills (Real Estate Property Services)","Almas Tower","04-423-9933","Real Estate Services","","http://core-me.com"],
			["propspace.jpg","PropSpace Real Estate CRM ","Mazaya Business Avenue","04-420-1044","Real Estate Services","","http://propspace.com"],
			["almasahint.png","Almasah International ","Reef Tower","04-422-4200","Real Estate Services","","http://almasahint.com"],
			["sapphiredubai.jpg","Sapphire & Co. JLT","Goldcrest Executive","04-447-1778","Real Estate Services","","http://sapphiredubai.com"],
			["orientdesertrealestate.png","Orient Desert Real Estate","Armada P3","04-435-6856","Real Estate Services","","http://orientdesertrealestate.com"],
			["atomicproperties.jpg","Atomic Properties","1 Lake Plaza","04-434-2678","Real Estate Services","","http://atomicproperties.org"],
			["betterhomes.png","BetterHomes","Cluster D","04-306-8722","Rent & Sales","","http://bhomes.com/"],
			["","Zen Indigo Properties LLC","Indigo Tower","","Rent & Sales","","https://bayut.com/to-rent/apartments/dubai/discovery-gardens/zen/?gclid=CL24z4nuvMoCFYMIwwodgbUGDw#rd_purpose=2&cat_id=5237&property_type=4,17,12,14,16,3,10,8,13,9,5,11,15,6,7"]
		];
 
$(document).ready(function() {
    $('#realestateservicesData').DataTable( {
        data: dataSet,
        columns: [
            { title: "",bSortable: false },
            { title: "Name", "sClass": "datatables_action"},
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
                            	  if(data==""){
                            		  return "<img width=150 height=150 src='images/mockThumbnail.png' class='mockThumbnail'>";
	                        	  }else{
	                        		  return "<img width=150 height=150 src='images/jltfacility/orealestate/"+data+"'>";
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