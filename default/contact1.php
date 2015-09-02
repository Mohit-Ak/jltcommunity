<!doctype html>


<html lang="en" class="no-js">
<head>
	<title>JLTCommunity | Contact</title>

	<meta charset="utf-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- Begin commoncsstoinclude.php Include -->
			<?php
   				require('commoncsstoinclude.php');
			?>
	<!-- End commoncsstoinclude.php Include -->
	

</head>
<body id="contact1Wrap">

	<!-- Container -->
	<div id="container">
		<!-- Begin Header Include -->
		<?php
   			require('header.php');
		?>
		<!-- End Header Include -->

		<!-- map 
			================================================== -->
		<div id="map"></div>
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
							<li><i class="fa fa-map-marker"></i><span>Jumeirah Lake Towers, Sheikh Zayed Road, Dubai, United Arab Emirates</span></li>
							<li><i class="fa fa-phone"></i><span>+971 503 786 757</span></li>
							<li><i class="fa fa-envelope-o"></i><a href="#">geetha9999@aol.com</a></li>
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