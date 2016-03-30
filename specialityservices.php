<!doctype html>


<html lang="en" class="no-js">
<head>
	<title>JLTCommunity | Speciality Services</title>

	<meta charset="utf-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="description" content="A list of speciality services present at Jumeirah Lakes Towers (JLT) , Sheikh Zayed Road, Dubai, United Arab Emirates (UAE)">
	<meta name="keywords" content="Jumeirah Lakes Towers JLTCommunity JLTCommunity.com speciality services Dubai UAE Building Community Society Infrastructure freezone development lakefront business live work play sponsor">
		<!-- Begin commoncsstoinclude.php Include -->
			<?php
   				require('commoncsstoinclude.php');
			?>
		<!-- End commoncsstoinclude.php Include -->
		<link rel="stylesheet" type="text/css" href="css/jquery.dataTables.min.css" media="screen">
</head>
<body id="specialityservicesWrap">

	<!-- Container -->
	<div id="container">
		<!-- Begin Header Include -->
			<?php
   				require('header.php');
			?>
		<!-- End Header Include -->

	<!--  sponsor slider section -->
		<section id="home-section" class="slider1 hotel-slider-section">
			
			<!--
			#################################
				- THEMEPUNCH BANNER -
			#################################
			-->
			<div class="tp-banner-container">
				<div class="tp-banner" >
					<ul>	<!-- SLIDE  -->
						<li data-transition="fade" data-slotamount="7" data-masterspeed="500" data-saveperformance="on"  data-title="Intro Slide">
							<!-- MAIN IMAGE -->
								<img src="upload/slide/uaeflowers-banner.png"  alt="slidebg1" data-lazyload="upload/slide/uaeflowers-banner.png" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
							<!-- LAYERS -->

					

						</li>

						<!-- SLIDE  -->
						<li class="royal-fashion-bannerwrap" data-transition="fade" data-slotamount="7" data-masterspeed="2000" data-saveperformance="on"  data-title="Ken Burns Slide" onclick="javascript: window.open('http://www.royalfashion.biz/', '_blank');">
							<!-- MAIN IMAGE -->
							<img src="" alt="2" data-lazyload="upload/slide/RoyalFashions-banner.jpg" data-bgposition="right top" data-kenburns="on" data-duration="12000" data-ease="Power0.easeInOut" data-bgfit="110" data-bgfitend="95" data-bgpositionend="center bottom">
							<!-- LAYERS -->
							
						</li>
						
					</ul>
					<div class="tp-bannertimer"></div>
				</div>
			</div>
		</section>
		<!-- End sponsor slider section -->
		<!-- Begin specialityservices-page section -->
		<section class="projects-page-section">
				<table id="specialityservicesData" class="display" width="100%"></table>
		</section>
		<!-- End specialityservices-page section -->
		
		
		<!-- Begin Footer Include -->
		<?php
   			require('footer.php');
		?>
		<!-- End Footer Include -->

	</div>
	<!-- End Container -->
	
	<!-- Begin CommonJSIncludes Include -->
			<?php
	   			require('commonjstoinclude.php');
			?>
	<!-- End CommonJSIncludes Include -->	
	<script type="text/javascript" src="js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="js/custom/specialityservices-data.js"></script>
	
	 <script type="text/javascript" src="js/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="js/jquery.themepunch.revolution.min.js"></script>
<script type="text/javascript">

		jQuery(document).ready(function() {
			JLTTools.init();		
			jQuery('.tp-banner').show().revolution(
			{
				dottedOverlay:"none",
				delay:30000,
				startwidth:1140,
				startheight:400,
				hideThumbs:200,
				
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:5,
				
				navigationType:"bullet",
				navigationArrows:"none",
				
				touchenabled:"on",
				onHoverStop:"off",
				
				swipe_velocity: 0.7,
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				drag_block_vertical: false,
										
										parallax:"mouse",
				parallaxBgFreeze:"on",
				parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
										
				keyboardNavigation:"off",
				
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:40,
						
				shadow:0,

				spinner:"spinner4",
				
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,

				shuffle:"off",
				
				autoHeight:"off",						
				forceFullWidth:"off",						
										
										
										
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,						
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:1,
				fullScreenOffsetContainer: ".header"	
			});
							
		});	//ready
		
	</script>	
</body>
</html>