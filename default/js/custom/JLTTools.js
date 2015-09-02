JLTTools={
		selectHeaderLabel : function(){
			var pageId=$("body")[0].id;
			
			if(pageId=="homeWrap"){
				$(".drop a#homeAnchor").addClass("active");
			}else if(pageId=="hotelsWrap"){
				$(".drop a#hotelsAnchor").addClass("active");
			}else if(pageId=="fitnessWrap" || pageId=="saloonspaWrap"){
				$(".drop a#wellnessAnchor").addClass("active");
			}else if(pageId=="hospitalsWrap" || pageId=="pharmacyWrap"){
				$(".drop a#healthcareAnchor").addClass("active");
			}else if(pageId=="supermarketWrap"){
				$(".drop a#supermarketsAnchor").addClass("active");
			}else if(pageId=="banksWrap" || pageId=="laundryWrap" || pageId=="nurseryWrap" || pageId=="petsWrap" || pageId=="specialityservicesWrap" || pageId=="trainingcentresWrap"){
				$(".drop a#otherServicesAnchor").addClass("active");
			}else if(pageId=="buyPropertyWrap" || pageId=="sellPropertyWrap" || pageId=="realestateServicesWrap"){
				$(".drop a#realEstateAnchor").addClass("active");
			}else if(pageId=="contact1Wrap" || pageId=="contact2Wrap"){
				$(".drop a#contactAnchor").addClass("active");
			}
		},
		init : function(){
			JLTTools.selectHeaderLabel()
		}
		
}