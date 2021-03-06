var dataSet = [
			
		["carrefour.png","Carrefour Market Red Diamond","Cluster C","800 7 32 32","SuperMarkets","","http://carrefourexpressuae.com/"],
		["carrefour.png","Carrefour Market","Cluster E","04-447-7699","SuperMarkets","","http://carrefourexpressuae.com/"],
		["","Park'N Shop","Cluster P","04-447-1424","SuperMarkets","",""],
		["carrefour.png","Carrefour","Cluster U","04-395-7435","SuperMarkets","","http://carrefourexpressuae.com/"],
		["blueplanetgreenpeople.png","Blue Planet (organic)","Cluster X","04-389-5209","SuperMarkets","","http://blueplanetgreenpeople.com/"],
		["","Spinneys'","Cluster X","04-395-1641","SuperMarkets","",""],
		["","Joudi Supermarket","Cluster U, Al Seef 2","04-454-9525","SuperMarkets","","http://jumeirahguide.com/917/supermarkets/joudi-mini-mart-in-jumeirah-lake-towers"],
		["blueplanetgreenpeople.png","Greenplanet (Green people Organic JLT)","Cluster Q","04-369-5209","SuperMarkets","","http://blueplanetgreenpeople.com/"],
		["geantuae.png","Geant Easy Supermarket","","04-435-7353","SuperMarkets","","http://geant-uae.com/jlt-dubai"],
		["","Twins mini Mart","Cluster B","04-447-4213","Mini Marts","",""],
		["","Green Bean Store JLT","Cluster B","04-277-6972","Mini Marts","",""],
		["","Mohed Grocery","Cluster B","04-457-2944","Mini Marts","",""],
		["","Shabab Minimart","Cluster C","04-448-4371","Mini Marts","",""],
		["","Nigt Mart","Cluster D","04-447-5383","Mini Marts","",""],
		["","Charley's Dolphin Foods JLT","Cluster E","04-438-5009","Mini Marts","",""],
		["","Q Mart","Cluster R","04-450-3849","Mini Marts","",""],
		["","Q Mart","Cluster R","04-447-2151","Mini Marts","",""],
		["","Zoom Market","Cluster A","04-431-3257","Mini Marts","","http://www.zoomcstore.com/"],
		["","Zoom Market","Cluster S","04-425-8125","Mini Marts","","http://www.zoomcstore.com/"],
		["","Zoom Market","Cluster Y","04-360-7839","Mini Marts","","http://www.zoomcstore.com/"],
		["","Zoom Market","Cluster F","04-431-3257","Mini Marts","","http://www.zoomcstore.com/"],
		["","Zoom Market","Cluster M","04-425-8125","Mini Marts","","http://www.zoomcstore.com/"],
		["","Zoom Market","Cluster T","04-425-8125","Mini Marts","","http://www.zoomcstore.com/"],
		["","Manila Mart","Fortune Executive Tower, T1, Cluster T","04-276-5705","Mini Marts","","http://2gis.ae/dubai/firm/70000001018040231?queryState=center%2F55.149275%2C25.078907%2Fzoom%2F17"],
		["","Zataar","Cluster U","04-432-8689","Mini Marts","",""],
		["","West Zone Fresh Supermarket","Cluster U","04-453-1964","Mini Marts","",""],
		["","Rouse Mini Mart","Cluster W","04-447-4688","Mini Marts","",""],
		["","Rubi Mart","Cluster W","04-432-1188","Mini Marts","",""],
		["lakesmart.png","Lakes Mart JLT","Saba 2","04-374-6788","SuperMarkets","","http://lakesmart.ae"]
];

 
$(document).ready(function() {
    $('#supermarketData').DataTable( {
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
	                        		  return "<img width=150 height=150 src='images/jltfacility/supermarkets/"+data+"'>";
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