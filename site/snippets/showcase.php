<div class='ghost-box'></div>
<?php foreach($data->files()->sortBy('sort', 'asc') as $image): ?>
  <div class="show-for-large cf grid-x grid-padding-x">
    <div class='large-8  cell'>
      <img class='showcase-image' src="<?= $image->url() ?>" alt="<?= $data->title()->html() ?>" />
      <div class='showcase-caption'><?= $image->caption()->html() ?></div>
    </div>
    <div class='large-8 columns'>
      <div class='showcase-text'><?= $image->text()->kirbytext() ?></div>
    </div>
  </div>
  <div class="hide-for-large cf grid-x">
    <div class='medium-14 small-centered cell'>
      <div class='showcase-text'><?= $image->text()->kirbytext() ?></div>
    </div>
    <div class='medium-14 small-centered cell'>
      <img class='showcase-image' src="<?= $image->url() ?>" alt="<?= $data->title()->html() ?>" />
      <div class='showcase-caption'><?= $image->caption()->html() ?></div>
    </div>
</div>
<?php endforeach ?>
