JLTTools={
		selectHeaderLabel : function(){
			var pageId=$("body")[0].id;
			
			if(pageId=="homeWrap"){
				$(".drop a#homeAnchor").addClass("active");
			}else if(pageId=="hotelsWrap" || pageId=="restaurantsWrap"){
				$(".drop a#hotelsAnchor").addClass("active");
			}else if(pageId=="fitnessWrap" || pageId=="saloonspaWrap" || pageId=="hospitalsWrap"|| pageId=="pharmacyWrap"){
				$(".drop a#wellnessAnchor").addClass("active");
			}else if(pageId=="supermarketWrap" || pageId=="digitalWrap"){
				$(".drop a#supermarketsAnchor").addClass("active");
			}else if(pageId=="banksWrap" || pageId=="businessesWrap" || pageId=="interiorWrap"|| pageId=="laundryWrap" || pageId=="nurseryWrap" || pageId=="petsWrap" || pageId=="specialityservicesWrap" || pageId=="trainingcentresWrap" || pageId=="realestateservicesWrap"){
				$(".drop a#otherServicesAnchor").addClass("active");
			}else if(pageId=="contact1Wrap" || pageId=="contact2Wrap"){
				$(".drop a#contactAnchor").addClass("active");
			}
		},
		mainSearchInit : function(){
			$("#mainSearchSubmit").on('click',function(){
				var mainSearch=$("#mainSearch");
				if(mainSearch!=undefined && mainSearch.val().trim()!=""){
					var mainSearchVal=mainSearch.val().trim();
					window.location.href="searchresults.php?searchParam="+mainSearchVal;
				}});
			$("#form-search").submit(function(e){
				e.preventDefault();
				var mainSearch=$("#mainSearch");
				if(mainSearch!=undefined && mainSearch.val().trim()!=""){
					var mainSearchVal=mainSearch.val().trim();
					window.location.href="searchresults.php?searchParam="+mainSearchVal;
				}});
		},
		
		getParameterByName : function(name){
		    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		        results = regex.exec(location.search);
		    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		},
		
	
		init : function(){
			JLTTools.selectHeaderLabel(),
			JLTTools.mainSearchInit()
		}
		
}