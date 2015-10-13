var dataSet = [
    ["astermedicalcentrecom.png","Aster Medical Center","Red Diamond Building","04-420-4029","Clinics","https://google.ae/maps/dir/''/Red+Diamond+Building,+Near+Carrefour+Express+-+Jumeirah+Lake+Towers+-+Dubai/data=!4m5!4m4!1m0!1m2!1m1!1s0x3e5f6ca14d3c4213:0x23aef2f66cb81ede?sa=X&ved=0CCUQiBMwAGoVChMI3O7CguelxwIVRbwUCh0c0wDj","http://astermedicalcentre.com/"],
    ["astermedicalcentrecom.png","Aster Medical Center","Icon Tower, Ground Floor","055-700-9328","Clinics","","http://astermedicalcentre.com/"],
    ["amaldoctorcom.png","Dr. Amal Alias Clinic JLT (Obstetrician-Gynaecologist)","Cluster C, Fortune Tower","04-447-3976","Clinics","","http://amal-doctor.com/en/"],
    ["veincurecliniccom.png","VeinCure Clinic","Cluster E","04-375-6484","Clinics","https://google.ae/maps/dir/''/E11+-+Dubai/@25.0723298,55.1414618,11z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3e5f6cac136c1e33:0xda81a6a6335a5bfb!2m2!1d55.1414618!2d25.0723298","http://laclinique-me.com/"],
    ["lacliniquemecom.png","La Clinique ME","Cluster E, Saba 1, Unit 901","04-443-7895","Clinics","https://google.ae/maps/dir/''/Saba+1,+Suite+901,+Cluster+E+-+Jumeirah+Lakes+Tower+-+Dubai/@25.0719901,55.1071631,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3e5f6cac6bb1a06d:0x798350a457811cdc!2m2!1d55.141496!2d25.071994","http://laclinique-me.com/"],
    ["bodybalancerscom.png","Body Balancers JLT","HDS Tower","04-450-8487","Clinics","http://ae.nusalist.com/location/25.072451/55.142593/hds-tower-dubai-united-arab-emirates","http://bodybalancers.com/#sthash.d9Y6IWof.dpuf"],
    ["","Dr K Medical Center JLT","Cluster F, Indigo Icon Tower Unit:3205","04-447-7020","Clinics","","http://drbinitashah.com/"],
    ["totalhealthae.png","Total Health Chiropractic Clinic","Almas Tower, First Floor","055-133-2957","Clinics","","http://totalhealth.ae"],
    ["conceiveivfcom.png","Conceive Gynaecology & Fertility Hospital JLT","Red Diamond Building, Next to Careofour","04-554-5820","Clinics","","http://conceiveivf.com/"],
    ["","Royalcare Medical Center","1 Lake Plaza, 19th Floor","04-449-5335","Clinics","","http://conceiveivf.com/"],
    ["lacliniquemecom.png","La Clinique ME (Polyclinic)","Cluster E Saba 1","04-443-7895","Clinics","","http://laclinique-me.com/"],
    ["healthbaycliniccom.png","Health Bay Polyclinic","Cluster X2, Office No:409","04-456-5778","Clinics","","http://healthbayclinic.com"],
    ["","The Lakes Clinic JLT (dental) ","The Lakes Clinic JLT (dental) ","04-453-4848","Dental Clinics","https://google.ae/maps/dir/''/HDS+Tower+-+Dubai/@25.0722231,55.1083651,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3e5f6cac18c69841:0x299d3dae49f20df5!2m2!1d55.142698!2d25.072227",""],
    ["laperladentalcom.png","La Perla Dental Clinic JLT","Cluster V, JBC 2, Unit 904","04-432-1732","Dental Clinics","https://google.ae/maps/dir/''/Fortune+Tower+-+Dubai/data=!4m5!4m4!1m0!1m2!1m1!1s0x3e5f6cad161bfa07:0xb0539d0695a27234?sa=X&ved=0CA0QiBMoATADahUKEwjAst7M8aXHAhVDbxQKHSSzCHQ","http://laperladental.com/"],
    ["infinitydentalcliniccom.png","Infinity Dental Center","Fortune Tower Unit:1510","04-448-9270","Dental Clinics","https://google.ae/maps/dir/''/1510+Fortune+Tower+-+Jumeirah+Lake+Towers+-+Dubai/data=!4m5!4m4!1m0!1m2!1m1!1s0x3e5f6cad3e0b6e8d:0xbf699efc00e8d301?sa=X&ved=0CA8QiBMoATADahUKEwjSk7ic8qXHAhUB2RQKHR9lAFo","http://infinitydentalclinic.com/"],
    ["","German Dental Center","Cluster M, HDS Business Center, Unit 106","04-449-5335","Dental Clinics","https://google.ae/maps/dir/''/106,1st+floor,HDS+Business+Centre,Cluster+M,JLT+-+%D8%AF%D8%A8%D9%8A%E2%80%AD/data=!4m5!4m4!1m0!1m2!1m1!1s0x3e5f6cacebf92a71:0xbbbcb17a4aafaeb?sa=X&ved=0CA4QiBMoADADahUKEwjSl5yu8qXHAhULtBQKHR_ICDM",""],
    ["heydccom.png","HEY Dental Clinic DMCC","Goldcrest Executive Business Tower 105/106","04-450-8717","Dental Clinics","https://google.ae/maps/dir/''/Jumeirah+Lake+Towers+(JLT)+-+Goldcrest+Executive+Business+Tower+105%2F106+-+Dubai/@25.0687641,55.1052111,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3e5f6cad12c3d935:0xc539ad96766c62cf!2m2!1d55.139544!2d25.068768","http://hey-dc.com/"],
    ["dubaiskycliniccom.png","Sky Clinic (Dental)","Cluster Y, Swiss Tower","04-355-8808","Dental Clinics","","http://dubaiskyclinic.com/"],
    ["lifemecom.png","Life Medical Center JLT","Cluster V, JBC, Unit 1204 & 1205","04-453-9633","Hospitals","https://google.ae/maps/dir/''/Red+Diamond+Building,+Near+Carrefour+Express+-+Jumeirah+Lake+Towers+-+Dubai/data=!4m5!4m4!1m0!1m2!1m1!1s0x3e5f6ca14d3c4213:0x23aef2f66cb81ede?sa=X&ved=0CBIQiBMwAGoVChMIzp3-9eelxwIVy14UCh3k5AOq","http://lifemedicalcenterjlt.com/"],
    ["armadahospitalcom.png","Armada Medical Center","Cluster P, Armada Tower 2 Unit: 19th floor","04-399-0022","Hospitals","","http://armadahospital.com/"],
    ["","Dr. 'K' Medical Center","Indigo Icon Tower No:3205","04-447-7020","Hospitals","","http://drkmedicalcentre.com/"],
    ["ydlmecom.png","YDL York Diagnostic Laboratories JLT","Cluster D, Indigo Tower, Office 509-510","800-YDL(935)","Hospitals","","http://ydl-me.com"]

];
 
$(document).ready(function() {
    $('#hospitalsData').DataTable( {
        data: dataSet,
        columns: [
            { title: "",bSortable: false},
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
	                        		  return "<img width=150 height=150 src='images/jltfacility/hospitals/"+data+"'>";
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