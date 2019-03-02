<?php if(! $page->redirect()): ?>

    <main class="main" role="main">

      <header class="wrap">
        <h3><?= $page->title()->html() ?></h3>
        <div class='yo'>FFS projects</div>
        <div class="">
          <p><?= $page->text()->kirbytext() ?></p>
        </div>
        <hr />
      </header>


      <?php if($page->hasChildren()): ?>
      <? $children = $page->children(); ?>
      <?php foreach ($children as $key => $value): ?>
        <?php $value->title() ?>
      <?php endforeach ?>
      <?php endif ?>


    </main>

<?php endif ?>
