<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">
  <?= css('assets/css/app.css') ?>
  <?= css('assets/css/kstarter.css') ?>
  <?= css('assets/css/jquery.fullpage.min.css') ?>

</head>

<body>
<div class='bg-cells'>
  <div class='i1'></div>
  <div class='i2'></div> 
  <div class='i3'></div> 
  <div class='i4'></div> 
</div>
  <div class="top-bar">
    <div class="top-bar-left">
      <div class='top-bar-logo'>
      <div class='logo-icon'>
      <?php if( $logo1 = file($site -> logo1()) ): ?>
        <?php echo reset($logo1) ?>
      <?php endif ?>
      </div>
      <div class='logo-text'>
      <?php if( $logo2 = file($site -> logo2()) ): ?>
        <?php echo reset($logo2) ?>
      <?php endif ?>
      </div>
      </div>
    </div>
    <div class="top-bar-right">
      <ul class="dropdown menu" data-magellan >
        <?php foreach(page('sections')->children()->visible() AS $p): ?>
          <li class='show-for-large'><a href="#<?php echo $p->title() ?>"  onclick="logoFade()"><?php echo html($p->title()) ?></a></li>
        <?php endforeach ?>
          <li class='hide-for-large'>
            <a>
              <div class="hamburger">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </a>
              <ul class="menu vertical">
                <?php foreach(page('sections')->children()->visible() AS $p): ?>
                  <li><a href="#<?php echo $p->title() ?>"  onclick="logoFade()"><?php echo html($p->title()) ?></a></li>
                <?php endforeach ?>
            </ul>

          </li>
        </ul>
      </div>
    </div>


