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

        <div>
          <div><?php snippet('section-title',array('data' => $section)); ?></div>
          <div class='yo'>BEFORE SNIPPET</div>
          <?php if($section->snippet() != '') snippet($section->snippet(),array('data' => $section)); ?>
          <?php if($section->hasChildren()):?>
          <?php foreach($section->children() as $subPage): ?>
              <?php if($subPage->snippet() != '') snippet($subPage->snippet(),array('data' => $subPage)); ?>
            <?php endforeach ?>
          <?php endif ?>

          <div class='yo'>AFTER SNIPPET</div>
        </div>
        </div>
        </div>
        </div>

      </main>
    </section>
  <?php endif ?>
  <?php endforeach ?>
  </div>
