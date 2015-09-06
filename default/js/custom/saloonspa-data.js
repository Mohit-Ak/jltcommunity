var dataSet = [
    
["","Zen Asia Spa in JLT","JBC 5 Basement","04-457-2374/75/76","Spa","","www.zenasiaspa.com"],
["","Natural Spa JLT","Cluster D","04-374-1686","Spa","","http://www.naturalspajlt.com/"],
["","Lotus Spa & retreat JLT","Cluster J","800 56887","Spas","","http://www.lotusmrc.com/"],
["","Body & Mind Relaxation Centre","Cluster O","04-447-8855","Spa","",""],
["","Oasis Spa Center JLT","Cluster R, MAG214","04-277-5874","Spas","","http://www.mazkara.com/dubai/oasis-spa-center-jumeirah-lakes-towers-jlt"],
["","Top Art Nail Spa","Cluster R","056-254-3755","Spas","","https://www.facebook.com/topartnail.spa"],
["","Body Sky JLT","Cluster U2","04-441-8034","Spas","","www.bodyskyjlt.com"],
["","The White Room","Cluster U","04-422-8997","Spas","","www.whiteroomdubai.com"],
["","Naturo Pathy CTpuch","Cluster X","04-360-4443","Spas","","http://www.nptouch.com/"],
["","Prima Donna","","04-554-7853","Spas","","www.primadonna.ae"],
["","Ice Queen (Wellness Spa Center)","Cluster Q1, Saba 3","04-430-7954","Spas","","http://www.icequeen.ae/"],
["","Naturopathy Touch","Cluster D & Cluster X2","04-452.6969","Spas","","www.nptouch.com; "],
["","The White Room (Beauty & Spa)","Cluster U; Shop No 2","04-422-8997","Spas","","www.whiteroomdubai.com; https://www.facebook.com/whiteroomdubai"],
["","Finesse (him & her - JLT)","Cluster S3","04-447-1815","Spas","","www.finessdubai.com"],
["","Marjan (hair,nail, skincare)","Saba 1, ShopNo:6","04-423-3700","Beauty Salon","","http://www.marjanbeauty.ae/"],
["","Ladies Salon","","04-450-8607","Beauty Salon","",""],
["","Avant Garde Beauty Centre","Cluster C","04-450-8608","Beauty Salon","","www.agbeautycenter.com"],
["","Diana Beauty Castle ","Cluster C","04-368-6635","Beauty Salon","",""],
["","Beauty Story Salon","Cluster A","04-362-1412","Beauty Salon","",""],
["","Amore Hair & Beauty Salon","Cluster B","04-435-6474","Beauty Salon","",""],
["","Holiday Nails & Ladies Heauty Salon","Cluste B","04-458-7861","Beauty Salon","",""],
["","Avant Beauty Carde Center","Cluster C","04-437-0288","Beauty Salon","",""],
["","Ava Beauty Salon","HDS Tower, UnitNo:207","04-422-8076","Beauty Salon","",""],
["","Tip Top Beauty Lounge","Cluster C","04-454-1146","Beauty Salon","",""],
["","Pompered Poochies SPA DMCC","Cluster C","04-276-7160","Beauty Salon","",""],
["","Bright Beauty Salon","Cluster C, Gold Crest Tower","04-551-6915","Beauty Salon","",""],
["","Budur beauty Salon","Cluster D","04-277-6347","Beauty Salon","",""],
["","Wax Works Ladies Salon","Cluster D","04-447-3541","Beauty Salon","",""],
["","I Glow Ladies Salon","Cluster D","04-420-9667","Beauty Salon","",""],
["","Amro Style Salon","Cluster G","04-426-9966","Beauty Salon","",""],
["","Le Michael salon ","Bonnigton Hotel","04-356-0544","Beauty Salon","",""],
["","Essa Beauty","Cluster G","04-374-4288","Beauty Salon","",""],
["","Jameela Beauty Salon","Cluster H","04-425-9683","Beauty Salon","",""],
["","Mera Salon","Cluster I","04-448-3071","Beauty Salon","",""],
["","Le Salon","Cluster I","04-452-1117","Beauty Salon","",""],
["","Le Michel Salon","Bonnigton Hotel","04-356-0544","Beauty Salon","","http://www.lemichelsalon.com"],
["","Aleph Salon","Cluster J","04-369-5420","Beauty Salon","",""],
["","La Femme Beauty Salon","Cluster J","04-430-3125","Beauty Salon","",""],
["","Malikah Beauty Salon","Cluster J","04-454-2902","Beauty Salon","",""],
["","Look Salon S'n'S Esthetics","Cluster N","04-276-7544","Beauty Salon","",""],
["","Cavallo Nera Gents Salon","Cluster P","04-458-6835","Beauty Salon","",""],
["","La Beautique Beauty Salon","Cluster Q","04-450-8468","Beauty Salon","",""],
["","Zana Salon","Cluster Q","04-422-8471","Beauty Salon","",""],
["","Rousha Salon","Cluster Q","04-421-7931","Beauty Salon","",""],
["","Sharp Gents Salao ","Cluster R","04-369-7457","Beauty Salon","",""],
["","Sun Face beauty Salon","Cluster R, MAG214,Shop:6","04-453-9784","Beauty Salon","","www.sunfacebeauty.com"],
["","W Gents Salon","Cluster T, Lake Plaza Shop:GF17","04-450-8810","Beauty Salon","","www.wgentssalon.com"],
["","Mary Beauty Salon","Cluster T","04-447-1860","Beauty Salon","",""],
["","Adres Beauty Salon","Cluster U, Al Seef 2","04-431-3043","Beauty Salon","","www.address-beauty.com"],
["","Scentsations Ladies Salon JLT","Cluster X","04-364-9276","Beauty Salon","","www.scentsationSalon.com"],
["","Real Beauty","cluster Y","04-421-4267","Beauty Salon","",""],
["","Nail Pavillion","Cluster Y","04-422-9791","Beauty Salon","",""],
["","Natalie Beauty Salon","Cluster V","04-435-8077","Beauty Salon","",""],
["","O & O Beauty Centre","Cluster T","04-276-5998","Beauty Salon","",""],
["","The White Room","Cluster U","04-422-8997","Beauty Salon","",""],
["","Lemichelsalon","Cluster J, Bonnington Tower 11th flr","04-352-5431","Beauty Salon","","http://www.lemichelsalon.com/"],
["","Crystal Beauty Lounge JLT (Spa,Salon)","Red Diamond JLT","04-368-8664","Beauty Salon","","http://www.mazkara.com/dubai/crystal-beauty-lounge-jumeirah-lakes-towers-jlt"],
["","Persona (Ladies & Gents Salon)","Cluster O, Madina Tower","04-422-8205","Beauty Salon","","http://www.personabeautysalon.com/"],
["","Juan Salon ","Indigo Tower, 3rd Floor","04-438-9570","Beauty Salon","","www.juansalon.com"],
["","Mankind (spa JLT)","Almas Tower","04-429-8668","Beauty Salon","",""],
["","Senses Salon JLT","Cluster W,Tiffany Tower","04-457-2290","Beauty Salon","","www.sensessalonjlt.com"],
["","Alessia Spa & Salon","Cluster F, HDS Tower,15thFloor","04-447-1599","Beauty Salon","","http://www.beautycenterdubai.com/"],
["","Close cut Barbder Shop","Cluster D","050-457-1546","Hair Salon","",""],
["","In the Hair","Cluster F","056-143-6709","Hair Salon","",""],
["","GQ Men Hair Salon","Cluster T","04-434-0518","Hair Salon","",""],
["","Luca Stoppony","Cluster T, Lake Plaza","055-889-2136","Hair Salon","","www.lucastoppony.com"],
["","Smart Hairways Gents Salon","Cluster U<.Al Seef 3, Chop:506","04-425-3536","Hair Salon","","www.smarthairways.com"],
["","Tang & Mora (Hair design & Spa)","","","Hair Salon","",""],
["","Jamalich","Arch Tower","04-447-7303","Hair Salon","",""],
["","Essa beauty","","04-374-4288","Hair Salon","","www.essa.beauty.com"],
["","Amro Style Salon","UB shop No:6","050-472-5400","Hair Salon","",""],
["","Mike Beauty Salon","Armada Tower 1, HC-34th","04-395-8888","Hair Salon","",""],
["","Armada Spa","Armada Tower 1, HealthClub Floor","04-395-8888","Hair Salon","","www.armadaspa.com"]

];

 
$(document).ready(function() {
    $('#saloonspaData').DataTable( {
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