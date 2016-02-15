var dataSet = [
    ["armadaholding.png","Armada Pharmacy","Cluster P, Armada Tower","04-397-7777","Pharmacy","","http://armadaholding.com/Healthcare/ArmadaPharmacy.aspx"],
    ["lifemecom.png","Life Pharmacy","Cluster E, Sabah Tower, Ground Floor","04-439-1776","Pharmacy","","http://life-me.com/"],
    ["lifemecom.png","Life Pharmacy - Real 7","Cluster X","04-551-6435","Pharmacy","","http://life-me.com/"],
    ["supercareae.png","Super Care Pharmacy JLT","Cluster E, Al shera Tower","04-454-1157","Pharmacy","","http://super-care.ae/"],
    ["asterpharmacy.png","Aster Pharmacy JLT","Red Diamond Bldg, Shop No: G011-B","04-369-7728","Pharmacy","","http://asterpharmacy.com/pharmacy/new-aster-pharmacy-jlt/"],
    ["wecarepharmaciescom.png","We Care Pharmacy","Cluster D, Lake City Tower, Shop:6","04-368 6411","Pharmacy","","http://wecarepharmacies.com/"],
    ["","Life Aid Pharmacy","Cluster V","04-431-7400","Pharmacy","",""],
    ["","Life New Al Kanz Pharmacy","Cluster J","04-392-9669","Pharmacy","",""],
    ["","Sarai Lakes Pharmacy","Cluster Q, Saba 2","04-447-1335","Pharmacy","",""],
    ["","New Mark Pharmacy","Cluster T, Fortune Executive","04-432-7303","Pharmacy","",""],
    ["","Health First Pharmacy","Cluster U. Al Seef 2","04-552-0732","Pharmacy","",""],
    ["","Alpha Pharmacy","Cluster W, JBC , Shop No.3","04-333-5520","Pharmacy","",""],
    ["","Sai Lakes Pharmacy","Cluster A","04-447-1337/1335","Pharmacy","",""],
    ["","Estilo Optics","shop#5, Al waleed Paradise, Cluste-R, ","+971-3608530","Pharmacy","","http://estilooptics.com/"]
   
];

 
$(document).ready(function() {
    $('#pharmacyData').DataTable( {
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
	                        		  return "<img width=150 height=150 src='images/jltfacility/pharmacy/"+data+"'>";
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