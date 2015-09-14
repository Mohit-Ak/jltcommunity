    var dataSet = [
			["","ADIB ","Cluster O, O2 Residence, ShopNo:2","04-701-8880","Banks & ATMs","","http://adib.ae/"],
			["","Emirates Islamic Bank","Al Mas Tower","06-059-9995","Banks & ATMs","","http://emiratesislamic.ae"],
			["","Bank of Baroda","Al Mas Tower","04-395-0944","Banks & ATMs","","http://bankofbarodauae.ae/"],
			["","RAK Bank (ATM)","Cluster B","NA","Banks & ATMs","",""],
			["","Dubai Bank ","","800-555","Banks & ATMs","",""],
			["","NBD Bank","Al Mas Tower, Ground Floor","600 54 0000","Banks & ATMs","","http://emiratesnbd.com/en/"],
			["","United Arab Bank","Almas Tower","800-474","Banks & ATMs","","http://uab.ae"],
			["","United Arab Bank (ATM)","Cluster A","800-474","Banks & ATMs","","http://uab.ae"],
			["","Mashreq Bank plus ATM (24 hr)","Reef Tower","04-424-4444","Banks & ATMs","","http://mashreqbank.com/"],
			["","Noor Bank ATM","Almas Tower","800 6667","Banks & ATMs","","http://noorbank.com/"],
			["","Union National Bank (ATM)","Green Lakes Tower, S1","NA","Banks & ATMs","","http://unb.com/english/index.aspx"]
		];

 
$(document).ready(function() {
    $('#banksData').DataTable( {
        data: dataSet,
        columns: [
            { title: "Logo",bSortable: false},
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