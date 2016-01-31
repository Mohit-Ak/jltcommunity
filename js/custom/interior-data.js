 var dataSet = [
			["zeninterior.png","Zen Interiors JLT","O2 tower","04-340-5050","Interior Designer","","http://zeninteriors.net/jumeirah-lake-towers-o2-tower-dubai-uae"],
			["","Lake Side Interior","Cluster D2, Lake Terrace Tower","04-435-6067","Interior Designer","","http://go.2gis.com/2xh7"],
			["","Office Fitouts","","04-457-9339","Interior Designer","","http://www.dubaiclassified.com/detail.php?id=244066"],
			["pallado.png","Palladio Interiors","Cluster, Indigo Icon Tower","04-427-9610","Interior Designer","","http://www.palladiointeriors.ae/"],
			["levant.png","Levant (Mark of Luxury)","Cluster I, Silver Tower, Suite 19D&E","04-447-7940","Interior Designer","","http://levant.com/"],
			["palldiointeriors.png","Palldiointeriors","Jumeirah Lakes Towers Jewellery & Gemplex 3","+971 55-754-1324","Interior Designer","","http://www.palladiointeriors.ae/"]
		];

$(document).ready(function() {
    $('#interiorData').DataTable( {
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
	                        		  return "<img width=150 height=150 src='images/jltfacility/ointerior/"+data+"'>";
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