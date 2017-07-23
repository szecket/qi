<?php foreach($data->images()->sortBy('sort', 'asc') as $image): ?>
  <div class="show-for-large cf">
    <div class='large-3 columns'>
      <img class='showcase-image' src="<?= $image->url() ?>" alt="<?= $data->title()->html() ?>" />
      <div class='showcase-caption'><?= $image->caption()->html() ?></div>
    </div>
    <div class='large-13 columns'>
      <div class='showcase-text'><?= $image->text()->html() ?></div>
    </div>
  </div>
  <div class="hide-for-large cf">
    <div class='medium-14 small-centered columns'>
      <div class='showcase-text'><?= $image->text()->html() ?></div>
    </div>
    <div class='medium-14 small-centered columns'>
      <img class='showcase-image' src="<?= $image->url() ?>" alt="<?= $data->title()->html() ?>" />
      <div class='showcase-caption'><?= $image->caption()->html() ?></div>
    </div>
  </div>
<div class='ghost-box'></div>
<?php endforeach ?>
