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

if(isset($limit)) $projects = $projects->limit($limit);

?>

<ul class="showcase grid gutter-1">

  <?php foreach($sections as $section): ?>

    <li >
        <a href="<?= $section->title() ?>">
        dot
        </a>
    </li>

  <?php endforeach ?>

</ul>