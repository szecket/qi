       <?php if($image = $data->images()->sortBy('sort', 'asc')->first()): $thumb = $image->crop(600, 600); ?>
        <div class='medium-14 small-centered large-7 columns'> 
          <img src="<?= $thumb->url() ?>" alt="Thumbnail for <?= $data->title()->html() ?>" class="full-width" />
        </div>
       <?php endif ?>
      <div class='medium-14 small-centered large-9 columns'> 
       <p> <?= $data->text()->html() ?></p>
       </div>
     </div>
