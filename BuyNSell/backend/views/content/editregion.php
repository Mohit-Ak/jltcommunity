<!-- start page title -->
<div class="page-title">
     <div class="in">
         <div class="titlebar">	<h2>REGION MANAGER - <?php echo $id==""?"Add":"Edit"?> Region</h2>	<p>Region manager - <?php echo $id==""?"Add":"Edit"?> Region</p></div>
         <div class="clear"></div>
     </div>
</div>
 <!-- end page title -->

  <!-- START CONTENT -->
<div class="content">
<div class="simplebox grid740" style="z-index: 720;margin:0 auto;">
                            	<div class="titleh" style="z-index: 710;">
                                	<h3><?php echo $id==""?"Add":"Edit"?> Region</h3>
                                </div>
                                <div class="body" style="z-index: 690;">
                                <form action="<?php echo base_url(); ?>backend.php/cpanel/region_manipulate" method="post" enctype="multipart/form-data" name="edit_user_form" id="edit_user_form" autocomplete="off"  class="form-horizontal form-row-seperated">
                                  
                                  	<div class="st-form-line" style="z-index: 680;">	
                                    	<span class="st-labeltext">Region Name</span>	
                                        <input type="text" value="<?php echo isset($banners['region_name'])?$banners['region_name']:""; ?>" style="width:510px" id="region_name" class="st-forminput" name="region_name" original-title="Region name"> 
                                        <?php if($this->session->flashdata('message_error')) {?><span style="margin-left:160px;" class="st-form-error"><?php echo $this->session->flashdata('message_error'); ?></span><?php }?>
                                    
                                    	<div class="clear" style="z-index: 670;"></div>
                                    </div>
                                    
                                    <div class="st-form-line">	<span class="st-labeltext">Country</span>	
                                   	<select id="country" name="country_id">
                                   		 <?php
											foreach($country as $item)
											{
												if(isset($banners['country_id']))
												{
													$checked=" ";
													if($banners['country_id']==$item['country_id'])
													{
														$checked=" selected";
													}
													
													echo "<option value='".$item['country_id']."'".$checked.">".$item['country_name']."</option>";
												}
												else
												{
													echo "<option value='".$item['country_id']."'>".$item['country_name']."</option>";
												}
											}
										?>
                               		</select>
                                    <div class="clear"></div> 
                                    </div>
                                    
                                    <div class="st-form-line" style="z-index: 620;">	
                                    	<span class="st-labeltext">Status</span>	
                                    	<?php if (isset($banners['public']) && $banners['public']==1){?>
	                                    	<label class="margin-right10"><input checked value="1" type="radio" name="active" class="uniform"/> Enabled </label> 
	                                    	<label class="margin-right10"><input value ="0" type="radio" name="active" class="uniform"/> Disabled </label>
                                    	<?php } else {?>
	                                    	<label class="margin-right10"><input value="1" type="radio" name="active" class="uniform"/> Enabled </label> 
	                                    	<label class="margin-right10"><input checked value ="0" type="radio" name="active" class="uniform"/> Disabled </label>
                                    	<?php } ?>
                                  		<div class="clear" style="z-index: 610;"></div> 
                                    </div>
                                    
                                    <div class="button-box" style="z-index: 460;">
                                    	<input type="hidden" name="currentid" value="<?php echo $id;?>">
                                   	  <a href="<?php echo base_url(); ?>backend.php/cpanel/region" class="button-gray">&laquo; Back</a>
                                   	  <input type="submit" class="st-button" value="Submit" id="button" name="button">
                                   	 
                                    </div>
                                  </form>
                                  
                                </div>
                            </div>
</div>