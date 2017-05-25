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

<div class="sections">

  <?php foreach($sections as $section): ?>

    <section id="<?= $section->title()->html() ?>" data-magellan-target="<?= $section->title()->html() ?>">
    <main class='main' role='main'>
    <div>
       <?php if($section->snippet() != '') snippet($section->snippet(),array('data' => $section)); ?>
    </div>
    </main>
    </section>
  <?php endforeach ?>



  </div>
