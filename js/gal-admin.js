
jQuery(document).ready(function() {
	
	function galSetActionToTab(id) {
		var frm = jQuery('#gal_form');
		frm.attr('action', frm.attr('action').replace(/(#.+)?$/, '#'+id) );
	}

	jQuery('#gal-tabs').find('a').click(function() {
			jQuery('#gal-tabs').find('a').removeClass('nav-tab-active');
			jQuery('.galtab').removeClass('active');
			var id = jQuery(this).attr('id').replace('-tab','');
			jQuery('#' + id + '-section').addClass('active');
			jQuery(this).addClass('nav-tab-active');
			
			// Set submit URL to this tab
			galSetActionToTab(id);
	});
	
	// Did page load with a tab active?
	var active_tab = window.location.hash.replace('#','');
	if ( active_tab != '') {
		var activeSection = jQuery('#' + active_tab + '-section');
		var activeTab = jQuery('#' + active_tab + '-tab');
	
		if (activeSection && activeTab) {
			jQuery('#gal-tabs').find('a').removeClass('nav-tab-active');
			jQuery('.galtab').removeClass('active');
	
			activeSection.addClass('active');
			activeTab.addClass('nav-tab-active');
			galSetActionToTab(active_tab);
		}
	}
	
	// Dependent fields in premium
	clickfn = function() {
		jQuery('#ga_defaultrole').prop('disabled',  !jQuery('#input_ga_autocreate').is(':checked'));
	};
	jQuery('#input_ga_autocreate').on('click', clickfn);
	clickfn();
	
	clickfn2 = function() {
		jQuery('#input_ga_hidewplogin').prop('disabled',  !jQuery('#input_ga_disablewplogin').is(':checked'));
	};
	jQuery('#input_ga_disablewplogin').on('click', clickfn2);
	clickfn2();
	
	// Show service account button
	jQuery('#gal-show-admin-serviceacct').on('click', function(e) {
		jQuery('#gal-hide-admin-serviceacct').show();
		jQuery('#gal-show-admin-serviceacct').hide();
		e.preventDefault();
	});
	
	// Copy and paste click
	function selectText(element) {
	    var range, selection;
	    
	    if (document.body.createTextRange) { //ms
	        range = document.body.createTextRange();
	        range.moveToElementText(element);
	        range.select();
	    } else if (window.getSelection) { //all others
	        selection = window.getSelection();        
	        range = document.createRange();
	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);
	    }
	}
	jQuery('.gal-admin-scopes-list').on('click', function(e) {
		selectText(e.target);
	});
}); 
