<!doctype html>


<html lang="en" class="no-js">
<head>
	<title>Housebuild</title>

	<meta charset="utf-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' type='text/css'>
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/animate.css" media="screen">
	<link rel="stylesheet" type="text/css" href="css/style.css" media="screen">

</head>
<body id="contact2Wrap">

	<!-- Container -->
	<div id="container">
		<!-- Begin Header Include -->
		<?php
   			require('header.php');
		?>
		<!-- End Header Include -->

		<!-- map 
			================================================== -->
		<div id="map2"></div>
		<!-- map -->

		<!-- contact section 
			================================================== -->
		<section class="contact-section">
			<div class="container">
				<div class="col-md-4">
					<div class="contact-info">
						<h2>Contact Info</h2>
						<p>You can contact or visit us in our office from Monday to Friday from 8:00 - 17:00</p>
						<ul class="information-list">
							<li><i class="fa fa-map-marker"></i><span>907 N Randolph street, Arlington County, Virginia, United States</span></li>
							<li><i class="fa fa-phone"></i><span>+1 703-697-1776</span><span>+1 605-315-8544</span></li>
							<li><i class="fa fa-envelope-o"></i><a href="#">nunforest@gmail.com</a></li>
						</ul>						
					</div>
				</div>
				<div class="col-md-8">
					<form id="contact-form">
						<h2>Send us a message</h2>
						<div class="row">
							<div class="col-md-6">
								<input name="name" id="name" type="text" placeholder="Name">
							</div>
							<div class="col-md-6">
								<input name="mail" id="mail" type="text" placeholder="Email">
							</div>
						</div>
						<textarea name="comment" id="comment" placeholder="Message"></textarea>
						<input type="submit" id="submit_contact" value="Send Message">
						<div id="msg" class="message"></div>
					</form>
				</div>
			</div>
		</section>
		<!-- End contact section -->

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
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>
	<script type="text/javascript" src="js/gmap3.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript">
	jQuery(document).ready(function() {
		JLTTools.init();
	});
	</script>
	
</body>
</html>