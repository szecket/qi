<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">
  <?= css('assets/css/foundation.min.css') ?>
  <?= css('assets/css/app.css') ?>
  <?php echo css('@auto') ?>

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
        <a onclick='scrollToTop()'>
        <?php if( $logo1 = file($site -> logo1()) ): ?>
          <?php echo reset($logo1) ?>
        <?php endif ?>
        </a>
      </div>
      <div class='logo-text'>
      <?php if( $logo2 = file($site -> logo2()) ): ?>
        <?php echo reset($logo2) ?>
      <?php endif ?>
      </div>
      <div class='page-title show-for-large top-bar-title-static'><?= $page->title()->html() ?></div>
      <div class='page-title hide-for-large top-bar-title'><?= $page->title()->html() ?></div>
      </div>
    </div>
    <div class="top-bar-right">
      <ul class="dropdown menu" data-magellan >
        <?php foreach($page->children()->visible() AS $p): ?>
          <li class='show-for-large'><a href="#<?php echo $p->title() ?>"><?php echo html($p->title()) ?></a></li>
        <?php endforeach ?>
          <li class='hide-for-large'>
            <div class='hamburger'>
              <a onclick='toggleHamburger()'>
                <div>
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
              </a>
                <div class='hamburger-menu'>
                <ul class="menu vertical hamburger-bg">
                  <?php foreach($page->children()->visible() AS $p): ?>
                    <li><a href="#<?php echo $p->title() ?>"><?php echo html($p->title()) ?></a></li>
                  <?php endforeach ?>
              </ul>
            </div>
            </div>

          </li>
        </ul>
      </div>
    </div>
