$(document).ready(function(){

  var playlist = [{
      title:"SU SAYANG",
      mp3:"su_sayang.mp3",
      poster: "aesthetic-wallpaper (1).gif"
    },{
      title:"JIWA YG BERSEDIH", 
      mp3:"jiwa yang bersedih.mp3",
      poster: "aesthetic-discord.gif"
    },{
      title:"ANAK LAYANGAN",
      mp3: "anak_layangan.mp3",
      poster: "aesthetic-wallpaper.gif"
    },{
      title:"SU LAMA SUKA DIA", 
      mp3: "sa_su_lama_suka_dia.mp3", 
      poster: "aesthetic-wallpaper (1).gif"
    },{
      title:"DM IN THE SKY", 
      mp3: "DJ Diamond In The Sky.mp3", 
      poster: "aesthetic-discord.gif"
    },{
      title:"DM IN THE SKY X ON MY", 
      mp3: "Dj Diamond Sky X Melodi On My Way X Mari Mendekat.mp3", 
      poster: "aesthetic-wallpaper (1).gif"
    },{
      title:"JANGAN SALAH PASANGAN", 
      mp3: "jangan salah pasangan.mp3", 
      poster: "aesthetic-wallpaper.gif"
    },{
      title:"KE GONDANG DIA", 
      mp3: "ke gondang dia.mp3", 
      poster: "aesthetic-discord.gif"
    },{
      title: "NOT YOU", 
      mp3: "not you.mp3", 
      poster: "aesthetic-wallpaper (1).gif"
    },{
      title:"TAK SEGAMPANG ITU", 
      mp3: "tak segampang itu.mp3", 
      poster: "aesthetic-discord.gif"
    },{
      title: "VCL MASHUB X OH SYNG", 
      mp3: "vocal mashub x oh sayang.mp3", 
      poster: "aesthetic-wallpaper (1).gif"
    },{
      title:"ANGGUR MERAH INTI SARI", 
      mp3: "anggur_merah_intisari.mp3", 
      poster: "aesthetic-wallpaper.gif"
    },{
      title:"MALAM BANTU AKU", 
      mp3: "DJ MALAM BANTU AKU TUK LULUHKAN DIA TIKTOK VIRAL REMIX FULL BASS TERBARU 2022 _ DJ SEMATA KARENA MU.mp3", 
      poster: "aesthetic-discord.gif"
    },{
      title:"CLOSE TO YOU", 
      mp3: "close to you.mp3", 
      poster: "aesthetic-wallpaper (1).gif"
    },{
      title:"KIMETSU NO YAIBA", 
      mp3: "Kimetsu no Yaiba.mp3", 
      poster: "tamioka.gif"
    },{
      title:"TENTANG AKU DAN DIA", 
      mp3: "Tentang_aku_dan_dia.mp3", 
      poster: "aesthetic-discord.gif"
    },{
  }];

  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };

  var options = {
    swfPath: "https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3",
    volumechange: function(event) {
      $( ".volume-level" ).slider("value", event.jPlayer.options.volume);
    },
    timeupdate: function(event) {
      $( ".progress" ).slider("value", event.jPlayer.status.currentPercentAbsolute);
    }
  };

  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  var PlayerData = $(cssSelector.jPlayer).data("jPlayer");


  // Create the volume slider control
  $( ".volume-level" ).slider({
     animate: "fast",
		max: 1,
		range: "min",
		step: 0.01,
		value : $.jPlayer.prototype.options.volume,
		slide: function(event, ui) {
			$(cssSelector.jPlayer).jPlayer("option", "muted", false);
			$(cssSelector.jPlayer).jPlayer("option", "volume", ui.value);
		}
  });

  // Create the progress slider control
  $( ".progress" ).slider({
		animate: "fast",
		max: 100,
		range: "min",
		step: 0.1,
		value : 0,
		slide: function(event, ui) {
			var sp = PlayerData.status.seekPercent;
			if(sp > 0) {
				// Move the play-head to the value and factor in the seek percent.
				$(cssSelector.jPlayer).jPlayer("playHead", ui.value * (100 / sp));
			} else {
				// Create a timeout to reset this slider to zero.
				setTimeout(function() {
					 $( ".progress" ).slider("value", 0);
				}, 0);
			}
		}
	});
});