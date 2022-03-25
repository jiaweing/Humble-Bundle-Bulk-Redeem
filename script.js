var allRedeemLinks = document.links;

var redeemed = 0;
for (var i = 0; i < allRedeemLinks.length; i++) {
	if (allRedeemLinks[i].getAttribute("href").startsWith("https://store.steampowered.com/account/registerkey?key=")) {
		window.open(allRedeemLinks[i].getAttribute("href"), '_blank');
		console.log("Redeeming Steam key #" + redeemed + "..");
	}
}