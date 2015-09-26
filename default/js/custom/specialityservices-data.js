    var dataSet = [
			["mytailor.png","My Tailor & Little  Things","Cluster B. Lake View Tower","04-451-9090","Tailors","","http://mytailor.ae/"],
			["","Tailor Made ","Cluster I,  Platinum Tower","04-453-3324","Tailors","","http://tailormade.ae/"],
			["musicianssupplydubai.gif","Musicians Supply JLT","Cluster B, Lake View, Shop No:20","04-423-1132","Musicians","","http://musicianssupplydubai.com/"],
			["comiccentraldubai.jpg","Comic Central JLT","Cluster D","050-457-1546","Comedy Central","","http://comiccentraldubai.com/"],
			["royalfashion.gif","Royal Fashion ","Cluster C, Al Mas Tower","04-443-8766","OtherServices","","http://royalfashion.biz/"],
			["uaeflowers.png","Dew Drop Florist ","Cluster H, Concorde Tower, Shop:G01","04-422-7036","Florist","","http://uaeflowers.com"],
			["rosecharmsjlt.png","Rose Charms DMCC (Flower shop)","Cluster T, Lake Plaza, ShopNo: 18","04-458-8328","Florist","","http://rosecharmsjlt.com/"]

		];
 
$(document).ready(function() {
    $('#specialityservicesData').DataTable( {
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
                            	  if(data==""){
                            		  return "<img width=150 height=150 src='images/mockThumbnail.png'>";
	                        	  }else{
	                        		  return "<img width=150 height=150 src='images/jltfacility/ospeciality/"+data+"'>";
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