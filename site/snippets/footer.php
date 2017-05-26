  <footer class="footer cf" role="contentinfo">

    <div class="row">
      <p class="footer-copyright"><?php
        // Parse Kirbytext to support dynamic year,
        // but remove all HTML like paragraph tags:
        echo html::decode($site->copyright()->kirbytext())
      ?></p>

    </div>
  </footer>

    <?= js('bower_components/jquery/dist/jquery.js') ?>
<!--    <?= js('assets/js/vendor/jquery.fullPage.min.js') ?>-->    
    <?= js('assets/js/vendor/velocity.min.js') ?>
    <?= js('bower_components/what-input/dist/what-input.js') ?>
    <?= js('assets/js/vendor/foundation_ds.js') ?>
    <?= js('assets/js/vendor/parallax.min.js') ?>
    <?= js('assets/js/app.js') ?>

</body>
</html>