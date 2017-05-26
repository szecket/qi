<?php snippet('header') ?>
<div class='row'>
	<div class='medium-8 medium-centered main-logo'>
	<?php if( $logo1 = file($site -> logo1()) ): ?>
	  <?php echo reset($logo1) ?>
	<?php endif ?>
	</div>
</div>

<div class="wrap wide">    
  <?php snippet('magellan-sections') ?>
</div>


<?php snippet('footer') ?>