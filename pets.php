<!doctype html>


<html lang="en" class="no-js">
<head>
	<title>JLTCommunity | Pets</title>

	<meta charset="utf-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="description" content="A list of Pet care services present at Jumeirah Lakes Towers (JLT) , Sheikh Zayed Road, Dubai, United Arab Emirates (UAE)">
	<meta name="keywords" content="Jumeirah Lakes Towers JLTCommunity JLTCommunity.com pets petcare pet Dubai UAE Building Community Society Infrastructure freezone development lakefront business live work play sponsor">
		<!-- Begin commoncsstoinclude.php Include -->
			<?php
   				require('commoncsstoinclude.php');
			?>
		<!-- End commoncsstoinclude.php Include -->
		<link rel="stylesheet" type="text/css" href="css/jquery.dataTables.min.css" media="screen">
</head>
<body id="petsWrap">

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
							<img src="upload/slide/petsinthecity-banner.png"  alt="slidebg1" data-lazyload="upload/slide/petsinthecity-banner.png" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat">
							<!-- LAYERS -->

							<!-- LAYER NR. 1 -->
							<div class="tp-caption finewide_medium_white lfl tp-resizeme rs-parallaxlevel-0"
								data-x="0"
								data-y="280" 
								data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
								data-speed="500"
								data-start="1200"
								data-easing="Power3.easeInOut"
								data-splitin="none"
								data-splitout="none"
								data-elementdelay="0.1"
								data-endelementdelay="0.1"
								style="z-index: 8; max-width: auto; max-height: auto; white-space: nowrap;">PETS IN THE CITY<br><span>Pet Grooming</span> <br>
							</div>
							<!-- LAYER NR. 1 -->

						</li>

						<!-- SLIDE  -->
						<li data-transition="fade" data-slotamount="7" data-masterspeed="2000" data-saveperformance="on"  data-title="Ken Burns Slide">
							<!-- MAIN IMAGE -->
							<img src="images/dummy.png"  alt="2" data-lazyload="upload/slide/petsinthecity-banner.png" data-bgposition="right top" data-kenburns="on" data-duration="12000" data-ease="Power0.easeInOut" data-bgfit="115" data-bgfitend="100" data-bgpositionend="center bottom">
							<!-- LAYERS -->

							<!-- LAYER NR. 1 -->
							<div class="tp-caption finewide_medium_white lfl tp-resizeme rs-parallaxlevel-0"
								data-x="0"
								data-y="280" 
								data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
								data-speed="500"
								data-start="1200"
								data-easing="Power3.easeInOut"
								data-splitin="none"
								data-splitout="none"
								data-elementdelay="0.1"
								data-endelementdelay="0.1"
								style="z-index: 8; max-width: auto; max-height: auto; white-space: nowrap;">PETS IN THE CITY <br><span>Pet Grooming</span> <br>
							</div>
							<!-- LAYER NR. 1 -->
							
						</li>
						</li>
					</ul>
					<div class="tp-bannertimer"></div>
				</div>
			</div>
		</section>
		<!-- End sponsor slider section -->
		<!-- Begin pets-page section -->
		<section class="projects-page-section">
				<table id="petsData" class="display" width="100%"></table>
		</section>
		<!-- End pets-page section -->
		
		
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
	<script type="text/javascript" src="js/custom/pets-data.js"></script>
	
	 <script type="text/javascript" src="js/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="js/jquery.themepunch.revolution.min.js"></script>
<script type="text/javascript">

		jQuery(document).ready(function() {
			JLTTools.init();
			jQuery('.tp-banner').show().revolution(
			{
				dottedOverlay:"none",
				delay:10000,
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
				startWithSlide:0,
				fullScreenOffsetContainer: ".header"	
			});
							
		});	//ready
		
	</script>	
</body>
</html>