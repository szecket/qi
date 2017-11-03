<div class='float-center'>
  <div class='social-media'><a href="https://twitter.com/qi_tissue"><img src="/assets/images/logos/twitter-icon.png"></a></div>
  <div class='social-media'><a href="https://facebook.com/qitissue/"><img src="/assets/images/logos/facebook-icon.png"></a></div>
  <div class='social-media'><a href="https://www.linkedin.com/company/18322543/"><img src="/assets/images/logos/linkedin-icon.png"></a></div>
</div>
<p class='brightlink'><?= $data->text()->kirbytext() ?></p>
<div class='small-14 medium-6 large-4 small-centered'>
  <!-- <div id="contact-form"> -->
  <form class='submit-form'  method="post" action='action="https://formspree.io/<?php echo $data->youremail()?>' id='contact-form'>
  <!-- <form class='submit-form' method="POST"  action="https://formspree.io/<?php echo $data->youremail()?>"> -->
      <label for="inputName"><?php echo $data->namelabel() ?>  *<input id="inputName" type="text" placeholder="<?php echo $data->nameplaceholder() ?>" required></label>
      <label for="inputEmail"><?php echo $data->emaillabel() ?> *<input id="inputEmail" type="email" placeholder="<?php echo $data->emailplaceholder() ?>" required></label>
      <label for="inputMessage"><?php echo $data->messagelabel() ?> *<textarea id="inputMessage" type="text" rows="3" placeholder="<?php echo $data->messageplaceholder() ?>" required></textarea></label>
      <input class="is-hidden" type="text" name="_gotcha">
      <input type="hidden" name="_subject" value="Subject">
      <input type="hidden" name="_cc" value="email@cc.com">

    <div class="text-center">
      <button class="button" type="submit" value="Send"><?php echo $data->submitlabel() ?></button>
    </div>
  </form>
      <div class="text-center alert alert-danger center-block submit-fail display-none"><p>Please fill in all form fields</p><br><a href="#"><i class="fa fa-long-arrow-left fa-4x"></i></a></div>
      <div class="text-center alert alert-success center-block submit-success display-none"><p>Thank You!</p><br><a href="#"><i class="fa fa-long-arrow-left fa-4x"></i></a></div>
</div>
