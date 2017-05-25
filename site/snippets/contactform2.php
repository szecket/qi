<h1><?= $data->title()->html() ?></h1>
<div class='row'>
  <div class='large-6 large-centered'>
  <div id="contact-form">
  <?php if(param('contact')) :?>
    <p><?php echo $data->contactmessage() ?></p>
  <?php else: ?>
  <form method="POST"  action="https://formspree.io/<?php echo $data->youremail()?>">      
    <label><?php echo $data->namelabel() ?>  *<input type="text" name="name" placeholder="<?php echo $data->nameplaceholder() ?>" required></label>
    <label><?php echo $data->emaillabel() ?> *<input type="email" name="_replyto" placeholder="<?php echo $data->emailplaceholder() ?>" required></label>
    <label><?php echo $data->messagelabel() ?> *<textarea type="text" rows="3" name="message" placeholder="<?php echo $data->messageplaceholder() ?>" required></textarea></label>
    <!-- <input type="text" name="_gotcha"/> -->
    <input type="hidden" name="_next" value="<?php echo url(page() . '/' . url::paramsToString(['contact' => 'true'])) ?>" />
      <input type="submit" class="button" value="<?php echo $data->submitlabel() ?>">  
  </form>
  <?php endif ?>
</div>
</div>
</div>