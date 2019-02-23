<?php snippet('home-header') ?>
<div class='row'>
	<div class='medium-8 medium-centered main-logo'>
	<?php if( $logo1 = file($site -> logo1()) ): ?>
	  <?php echo reset($logo1) ?>
	<?php endif ?>
	</div>
</div>
	  	<?php snippet('doc-magellan-sections',array('data' => $page->children())) ?>



<?php snippet('footer') ?>
