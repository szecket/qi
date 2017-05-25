    <h1><?= $data->title()->html() ?></h1>
    <div class='row'>
       <?php if($image = $data->images()->sortBy('sort', 'asc')->first()): $thumb = $image->crop(600, 600); ?>
        <div class='large-7 columns'> 
          <img src="<?= $thumb->url() ?>" alt="Thumbnail for <?= $data->title()->html() ?>" class="" />
        </div>
       <?php endif ?>
      <div class='large-9 columns'> 
       <p> <?= $data->text()->html() ?></p>
       </div>
     </div>
      <div class='row columns'> 
       <p> <?= $data->process()?></p>
       </div>
