<?php

$sections = $data->visible();

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

<div class="sections">

  <?php foreach($sections as $section): ?>
    <section class="<?php if ($section->redirect()=='true'): ?>hide<?php endif ?>" id="<?= $section->title()->html() ?>" data-magellan-target="<?= $section->title()->html() ?>">
      <main class='main' role='main'>
        <div class='<?= $section->row()?> row' 
          <?php if($section->background()): ?>
            style='background-color: <?= $section->background() ?>'
          <?php endif ?>
        >
          <div><?php snippet('section-title',array('data' => $section)); ?></div>
          <?php if($section->snippet() != '') snippet($section->snippet(),array('data' => $section)); ?>
        </div>
      </main>
    </section>
  <?php endforeach ?>
  </div>
