<!doctype html>


<html lang="en" class="no-js">
<head>
	<title>JLTCommunity | searchresults</title>

	<meta charset="utf-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="description" content="Search results for the services at Jumeirah Lakes Towers (JLT) , Sheikh Zayed Road, Dubai, United Arab Emirates (UAE)">
	<meta name="keywords" content="JLT Jumeirah Lakes Towers JLTCommunity JLTCommunity.com search searchresults Dubai UAE Building Community Society Infrastructure freezone development lakefront business live work play sponsor">
		<!-- Begin commoncsstoinclude.php Include -->
			<?php
   				require('commoncsstoinclude.php');
			?>
		<!-- End commoncsstoinclude.php Include -->
		<link rel="stylesheet" type="text/css" href="css/jquery.dataTables.min.css" media="screen">
</head>
<body id="searchresultsWrap">

	<!-- Container -->
	<div id="container">
		<!-- Begin Header Include -->
			<?php
   				require('header.php');
			?>
		<!-- End Header Include -->
		
		<!-- Begin searchresults-page section -->
		<section class="projects-page-section search-page-section">
				<table id="searchresultsData" class="display" width="100%"></table>
		</section>
		<!-- End searchresults-page section -->
		
		
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
	<script type="text/javascript" src="js/custom/searchresults-data.js"></script>
	<script type="text/javascript">
		jQuery(document).ready(function() {
			JLTTools.init();	
		});	
	</script>	
</body>
</html>