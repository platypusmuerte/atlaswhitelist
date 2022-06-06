class PlatyAtlasWhiteList {
	constructor({wl = []} = {}) {
		let urlSearchParams = new URLSearchParams(window.location.search);
		this.sp = Object.fromEntries(urlSearchParams.entries());
		this.wl = wl;

		if(this.sp.steam_id) {
			this.checksid();
		}
	}

	checksid() {
		// https://steamcommunity.com/sharedfiles/filedetails/?id=1628872141
		// atlas mod expects response of {"steam_id":"PLAYERS-STEAM-ID","allowed":"0"} format
		// 
		const player = this.wl.filter(p => p.steam_id == this.sp.steam_id);
		
		if(player[0] && player[0].steam_id == this.sp.steam_id) {
			document.body.innerHTML = "";
			document.write(JSON.stringify(player));
		} else {
			document.body.innerHTML = "";
			document.write('{"steam_id":"' + this.sp.steam_id*1 + '","allowed":"0"}');
		}
		
		
	}
}

new PlatyAtlasWhiteList({wl: whitelist});