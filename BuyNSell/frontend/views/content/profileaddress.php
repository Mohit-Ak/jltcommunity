<div class="bg_img">
            	<div class="bg_img_in">
                	<h1><span> <?=_l('List',$this);?> </span> <?=_l('Address',$this);?></h1>
                </div>
            </div>
            
            <div class="Extensions_bg">
           	<div class="Manage_Description">
           		<?php if($this->session->flashdata('message')){?>
            	<div class="success">Success: <?php echo $this->session->flashdata('message');?></div>
            	<?php } ?>
           		<p style="margin: 10px 5px;"><?=_l('Create a new address',$this);?> <a href="<?php echo base_url(); ?>profile/address/edit"><?=_l('here',$this);?></a>.</p>
            	<table class="list">
			    <thead>
			      <tr>
			        <td class="left"><a href=""><?=_l('Receiver Name',$this);?></a></td>
			        <td class="left"><a href=""><?=_l('address1',$this);?></a></td>
			        <td class="left"><a href=""><?=_l('address2',$this);?></a></td>
			        <td class="right" width="110"><?=_l('Action',$this);?></td>
			      </tr>
			    </thead>
			    <tbody>
			    	<?php if(count($extension_data) > 0) {?>
			        <?php foreach($extension_data as $ex) {?>
			        <tr>
			        <td class="left"><?php echo $ex['name'];?></td>
			        <td class="left"><?php echo $ex['address1'];?>, <?php echo $ex['state'];?>, <?php echo $ex['postal'];?>, <?php echo $ex['country_name'];?></td>
			        <td class="left"><?php echo $ex['address1'];?>, <?php echo $ex['state'];?>, <?php echo $ex['postal'];?>, <?php echo $ex['country_name'];?></td>
			        <td class="right">[ <a href="<?php echo base_url(); ?>profile/address/edit/<?php echo $ex['address_id']?>"><?=_l('Edit',$this);?></a> ]
			        [ <a href="<?php echo base_url(); ?>profile/address/delete/<?php echo $ex['address_id']?>"><?=_l('Delete',$this);?></a> ]</td>
			      </tr>
			      	<?php } } else { ?>
			      	 <tr><td colspan="6" style="height:40px;" align="center"><?=_l('No result',$this);?></td></tr>
			      	<?php } ?>
			      	
			   </tbody>
			  </table>
			   <div class="pagination"><div class="results"><?php echo $pagination;?></div></div>
			  <div style="margin:0px;" class="buttons">
			    <div class="right"><a href="<?php echo base_url(); ?>profile" class="button"><?=_l('Continue',$this);?></a></div>
			  </div>
            </div>
                <div class="account_right_links">
                <div><?=_l('Your Account',$this);?></div>
                	<ul>
                    	<li><a href="<?php echo base_url(); ?>profile"><?=_l('Account',$this);?></a></li>
                        <li><a  href="<?php echo base_url(); ?>profile-detail"><?=_l('Edit Details',$this);?></a></li>
                         <li><a  class="select" href="<?php echo base_url(); ?>profile/address"><?=_l('Manage Address',$this);?> </a></li>
                        <li><a href="<?php echo base_url(); ?>profile-password"><?=_l('Chang Password',$this);?> </a></li>
                        <li><a href="<?php echo base_url(); ?>profile-history"><?=_l('Order History',$this);?> </a></li>
                        <li><a href="<?php echo base_url(); ?>profile-download"><?=_l('Your Downloads',$this);?> </a></li>
                        <li><a href="<?php echo base_url(); ?>profile-extension"><?=_l('Manage Extensions',$this);?> </a></li>
                        <li><a href="<?php echo base_url(); ?>profile/sale"><?=_l('Your Sales',$this);?></a></li>
                        <li><a href="<?php echo base_url(); ?>profile/transaction"><?=_l('Transaction',$this);?></a></li>
                    </ul>
                    <!--<div class="Export">Export CSV</div>-->
                </div>
                <div class="clear"></div>
                
            </div>
 
  


