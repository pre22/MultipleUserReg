$(function () {
	$("nav#desktopNav .main-menu .menu-item.has-dropdown").hover(
		function () {
			const dropdownHeaderText = $(this).children("a").text();
			$(this)
				.find(".menu-dropdown .dropdown-menu-header .text")
				.text(dropdownHeaderText);

			$(this).children(".menu-dropdown").css("display", "block");
		},
		function () {
			$(this).children(".menu-dropdown").css("display", "none");
		}
	);
});
