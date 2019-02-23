<?php snippet('home-header') ?>
<div class='row'>
	<div class='medium-8 medium-centered main-logo'>
	<?php if( $logo1 == file($site -> logo1()) ): ?>
	  <?php echo reset($logo1) ?>
	<?php endif ?>
	</div>
</div>

<div class="wrap wide">

	<?php if( $page->type() == 'flat'): ?>
		<?php snippet('doc-magellan-sections',array('data' => $page->children())) ?>
	<?php else: ?>
	  <?php snippet('magellan-sections',array('data' => $page->children())) ?>
	<?php endif ?>
	<br>
	<br>
	<br>
</div>
<?php $page->type() ?>

<?php snippet('footer') ?>
