/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	var pageContainer = document.querySelector('.page'),
		openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.querySelector('.search'),
		searchModalContainer = document.querySelector('.search-demo5')
		// inputSearch = searchContainer.querySelector('.search__input');

	function init() {
		initEvents();	
	}

	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}
		});
	}

	function openSearch() {
		pageContainer.classList.add('page--move');
		searchContainer.classList.add('search--open');
		setTimeout(function() {
			inputSearch.focus();
		}, 1200);
	}

	function closeSearch() {
		// pageContainer.classList.remove('page--move');
		searchModalContainer.classList.remove('search5--open');
		// inputSearch.blur();
		// inputSearch.value = '';
	}

	init();

})(window);