jQuery( document ).on( 'click', '.notifyme-button', function() {
    var post_id = jQuery(this).data('id');
    var post_action = jQuery(this).data('action');
    
    if (post_action == 'del') 
        jQuery(this).data('action', 'add');
    else 
        jQuery(this).data('action', 'del');
    
    jQuery.ajax({
        url : postnotifyme.ajax_url,
        type : 'post',
        data : {
            action : 'post_notifyme_add_notifyme',
            post_id : post_id,
            post_action : post_action
        },
        success : function( response ) {
            jQuery('#notifyme').html( response );
        }
    });

    return false;
})