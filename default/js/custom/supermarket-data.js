var dataSet = [
    [ "", "Aster Medical Center", "Red Diamond Building","04-420-4029","Clinics", "https://www.google.ae/maps/dir/''/Red+Diamond+Building,+Near+Carrefour+Express+-+Jumeirah+Lake+Towers+-+Dubai/data=!4m5!4m4!1m0!1m2!1m1!1s0x3e5f6ca14d3c4213:0x23aef2f66cb81ede?sa=X&ved=0CCUQiBMwAGoVChMI3O7CguelxwIVRbwUCh0c0wDj", "http://astermedicalcentre.com/" ],
    [ "", "Aster Medical Center", "Icon Tower, Ground Floor","055-700-9328", "Clinics", "Map", "http://astermedicalcentre.com/" ],
    [ "", "Dr. Amal Alias Clinic JLT (Obstetrician-Gynaecologist)", "Cluster C, Fortune Tower","04-447-3976", "Clinics", "Map", "http://amal-doctor.com/en/" ],
    [ "", "VeinCure Clinic", "Cluster E","04-375-6484", "Clinics", "https://www.google.ae/maps/dir/''/E11+-+Dubai/@25.0723298,55.1414618,11z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3e5f6cac136c1e33:0xda81a6a6335a5bfb!2m2!1d55.1414618!2d25.0723298", "http://www.veincureclinic.com/" ],
    [ "", "La Clinique ME", "Cluster E, Saba 1, Unit 901","04-443-7895", "Clinics", "https://www.google.ae/maps/dir/''/Saba+1,+Suite+901,+Cluster+E+-+Jumeirah+Lakes+Tower+-+Dubai/@25.0719901,55.1071631,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3e5f6cac6bb1a06d:0x798350a457811cdc!2m2!1d55.141496!2d25.071994", "http://www.laclinique-me.com/" ],
    [ "", "Body Balancers JLT", "HDS Tower","04-450-8487", "Clinics", "http://ae.nusalist.com/location/25.072451/55.142593/hds-tower-dubai-united-arab-emirates", "http://www.bodybalancers.com/#sthash.d9Y6IWof.dpuf" ],
    [ "", "Dr K Medical Center JLT", "Cluster F, Indigo Icon Tower Unit:3205","04-447-7020", "Clinics", "Map", "http://www.drbinitashah.com/" ]
  
];
 
$(document).ready(function() {
    $('#supermarketData').DataTable( {
        data: dataSet,
        columns: [
            { title: "Logo" },
            { title: "Name" },
            { title: "Address" },
            { title: "Contact No." },
            { title: "Type" },
            { title: "Map" },
            { title: "Website" }
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