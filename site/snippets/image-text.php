  <div class='grid-x grid-padding-x'>
<?php if($image = $data->images()->sortBy('sort', 'asc')->first()): $first = $image; ?>
    <div class='medium-16 small-centered large-8 cell'>
      <img src="<?= $first->url() ?>" alt="Thumbnail for <?= $data->title()->html() ?>" class="full-width" />
    </div>
    <?php endif ?>
    <div class='medium-16 small-centered large-8 cell'>
      <p> <?= $data->text()->kirbytext() ?></p>
    </div>
  </div>
