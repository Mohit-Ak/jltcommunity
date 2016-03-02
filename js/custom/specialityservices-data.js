    var dataSet = [
			["mytailor.png","My Tailor & Little  Things","Cluster B. Lake View Tower","04-451-9090","Tailors","","http://mytailor.ae/"],
			["","Tailor Made ","Cluster I,  Platinum Tower","04-453-3324","Tailors","","http://tailormade.ae/"],
			["musicianssupplydubai.gif","Musicians Supply JLT","Cluster B, Lake View, Shop No:20","04-423-1132","Musicians","","http://musicianssupplydubai.com/"],
			["comiccentraldubai.jpg","Comic Central JLT","Cluster D","050-457-1546","Comedy Central","","http://comiccentraldubai.com/"],
			["royalfashion.gif","Royal Fashion ","Cluster C Goldcrest Executive ,Near Almas Tower ,Jumeirah Lake Towers","04-443-8766","Bespoke Tailors","","http://royalfashion.biz/"],
			["uaeflowers.png","Dew Drop Florist ","Cluster H, Concorde Tower, Shop:G01","04-422-7036","Florist","","http://uaeflowers.com"],
			["rosecharmsjlt.png","Rose Charms DMCC (Flower shop)","Cluster T, Lake Plaza, ShopNo: 18","04-458-8328","Florist","","http://rosecharmsjlt.com/"],
			["MoveSouq.png","MoveSouq.com","Swiss Tower, Cluster Y, JLT","+971-44229639","Home Service Provider","https://goo.gl/maps/RjeU5tuUkkN2","https://movesouq.com"],
			["","No Limit Fashion ","Cluster X","+971 056-558-4728","Fashion Services","","http://localsearch.ae/en/profile/NoLimit-&-Fashion-JLT/772645"]

		];
 
$(document).ready(function() {
    $('#specialityservicesData').DataTable( {
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