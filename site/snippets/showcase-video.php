<div class='ghost-box'></div>
<?php foreach($data->videos()->sortBy('sort', 'asc') as $video): ?>
  <div class="show-for-medium cf grid-x grid-padding-x">
    <div class='large-8 cell'>
      <video width="100%" height="auto" controls>
        <div class='showcase-caption'><?= $video->caption()->html() ?></div>
        <source class='showcase-image' src="<?= $video->url() ?>" alt="<?= $data->title()->html() ?>"></source>
      </video>
    </div>
    <div class='large-8 cell'>
      <div class='showcase-text'><?= $video->text()->html() ?></div>
    </div>
  </div>
  <div class="hide-for-medium cf grid-x ">
    <div class='auto small-centered cell'>
      <div class='showcase-text'><?= $video->text()->html() ?></div>
    </div>
    <div class='auto small-centered cell'>
      <video width="100%" height="auto" controls>
        <div class='showcase-caption'><?= $video->caption()->html() ?></div>
        <source class='showcase-image' src="<?= $video->url() ?>" alt="<?= $data->title()->html() ?>" ></source>
      </video>
    </div>
  </div>
<?php endforeach ?>
