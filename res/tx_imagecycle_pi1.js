
<!-- ###TEMPLATE_JS### begin -->
jQuery(document).ready(function() {
	<!-- ###CONTROL### -->
	play_class = 'play';
	jQuery('####KEY###').after('<div class="imagecycle-controller" id="###KEY###_controller"><ul><li class="first"><a id="###KEY###_first"></a></li><li class="prev"><a id="###KEY###_prev"></a></li><li class="pause<!-- ###PAUSED### --> '+play_class+'<!-- ###PAUSED### -->"><a id="###KEY###_pause"></a></li><li class="next"><a id="###KEY###_next"></a></li><li class="last"><a id="###KEY###_last"></a></li></ul></div>');
	jQuery('####KEY###_pause').click(function() {
		_parent = jQuery(this).parent();
		if(_parent.hasClass(play_class)) {
			_parent.removeClass(play_class);
			jQuery('####KEY###').cycle('resume');
		} else {
			_parent.addClass(play_class);
			jQuery('####KEY###').cycle('pause');
		}
	});
	jQuery('####KEY###_first').click(function() {
		jQuery('####KEY###').cycle(0);
	});
	jQuery('####KEY###_last').click(function() {
		options = jQuery('####KEY###').data('cycle.opts');
		jQuery('####KEY###').cycle(options.elements.length - 1);
	});
	<!-- ###CONTROL### -->
	<!-- ###SLOW_CONNECTION_BEFORE### -->jQuery(window).load(function() {<!-- ###SLOW_CONNECTION_BEFORE### -->
	jQuery('####KEY###').show().cycle({
		###OPTIONS###
		<!-- ###CONTROL_OPTIONS### -->
		next: '####KEY###_next',
		prev: '####KEY###_prev'
		<!-- ###CONTROL_OPTIONS### -->
	});
	<!-- ###PAUSED_BEGIN### -->
	jQuery('####KEY###').cycle('pause');
	<!-- ###PAUSED_BEGIN### -->
	<!-- ###ONLY_ONE_IMAGE### -->
	jQuery('####KEY###').css('width', jQuery('####KEY### img').css('width'));
	jQuery('####KEY### span').show();
	<!-- ###ONLY_ONE_IMAGE### -->
	jQuery('####KEY###').parent().css('width', jQuery('####KEY###').css('width'));
	<!-- ###PAGER### -->
	jQuery('####KEY###_pager a').each(function() {
		jQuery(this).click(function() {
			jQuery('####KEY###').cycle(parseInt(jQuery(this).attr('rev')));
			return false;
		});
	});
	<!-- ###PAGER### -->
	<!-- ###SLOW_CONNECTION_AFTER### -->});<!-- ###SLOW_CONNECTION_AFTER### -->
	<!-- ###CONTROL_AFTER### -->
	jQuery('####KEY###').parent().hover(function(){
		jQuery('####KEY###_controller').stop(true,true).fadeIn('fast');
	}, function(){
		jQuery('####KEY###_controller').stop(true,true).fadeOut('fast');
	});
	<!-- ###CONTROL_AFTER### -->
});
<!-- ###TEMPLATE_JS### end -->



<!-- ###TEMPLATE_ACTIVATE_PAGER_JS### end -->
jQuery('####KEY###_pager a').removeClass('activeSlide');jQuery('####KEY###_pager a[rev='+(o.currSlide)+']').addClass('activeSlide');
<!-- ###TEMPLATE_ACTIVATE_PAGER_JS### end -->
