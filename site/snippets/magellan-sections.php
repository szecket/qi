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
    <?php if ($section->redirect()!='true'): ?>
    <section id="<?= $section->title()->html() ?>" data-magellan-target="<?= $section->title()->html() ?>">
      <main class='main' role='main'>
        <div class='grid-container'>
        	<div class=" grid-x grid-padding-x ">
        		<div class='large-16 cell'>

        <div class='<?= $section->row()?> '
          <?php if($section->background()): ?>
            style='background-color: <?= $section->background() ?>'
          <?php endif ?>
        >

          <div><?php snippet('section-title',array('data' => $section)); ?></div>
          <?php if($section->snippet() != '') snippet($section->snippet(),array('data' => $section)); ?>
        </div>
        </div>
        </div>
        </div>

      </main>
    </section>
  <?php endif ?>
  <?php endforeach ?>
  </div>
