	<div class='large-6 large-centered'
	<div id="contact-form">
	  <form method="POST"  action="https://formspree.io/<?php echo $data->youremail()?>">      
	    <label><?php echo $data->namelabel() ?>  *<input type="text" name="name" placeholder="<?php echo $data->nameplaceholder() ?>" required></label>
	    <label><?php echo $data->emaillabel() ?> *<input type="email" name="_replyto" placeholder="<?php echo $data->emailplaceholder() ?>" required></label>
	    <label><?php echo $data->messagelabel() ?> *<textarea type="text" rows="3" name="message" placeholder="<?php echo $data->messageplaceholder() ?>" required></textarea></label>
    	<input type="hidden" name="_next" value="<?php echo page($data->successpage()) ?>" />
	    <input type="submit" class="button" value="<?php echo $data->submitlabel() ?>">  
	  </form>
	</div>
</div>