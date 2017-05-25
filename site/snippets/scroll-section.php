<?php

$sections = page('sections')->children()->visible();

/*

The $limit parameter can be passed to this snippet to
display only a specified amount of projects:

```
<?php snippet('showcase', ['limit' => 3]) ?>
```

Learn more about snippets and parameters at:
https://getkirby.com/docs/templates/snippets

*/

if(isset($limit)) $sections = $sections->limit($limit);

?>

<div id='fullpage'>

  <?php foreach($sections as $section): ?>

    <div class="section">
    <div class="callout light">
     <?php if($image = $section->images()->sortBy('sort', 'asc')->first()): $thumb = $image->crop(600, 600); ?>
     <img src="<?= $thumb->url() ?>" alt="Thumbnail for <?= $section->title()->html() ?>" class="" />
     <?php endif ?>
      <div class="showcase-caption">
        <h3 class="showcase-title"><?= $section->title()->html() ?></h3>
      </div>
    </div>
    </div>


  <?php endforeach ?>
  </div>
