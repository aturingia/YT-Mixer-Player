// Video IDs de ejemplo
        const videoId1 = "PLcyCHPWtSs9n7FN7XShfPwXDuV97s4bwb";
        const videoId2 = "r0wJzqDMDCM";

        // Carga el reproductor de YouTube API
        function onYouTubeIframeAPIReady() {
            player1 = new YT.Player('video1', {
                height: '270',
                width: '360',
                videoId: videoId1,
                playerVars : {
                listType:'playlist',
                list: 'PLcyCHPWtSs9n7FN7XShfPwXDuV97s4bwb',
                loop: true,
                autoplay: false,
            },
                events: {
                    'onReady': onPlayerReady
                }
            });

            player2 = new YT.Player('video2', {
                height: '270',
                width: '360',
                videoId: videoId2,
                playerVars : {
                listType:'playlist',
                list: 'PLcyCHPWtSs9n7FN7XShfPwXDuV97s4bwb',
                loop: true,
                autoplay: false,
            },
                events: {
                    'onReady': onPlayerReady
                }
            });
        }

        // Función llamada cuando el reproductor está listo
        function onPlayerReady(event) {
            event.target.playVideo();
        }

        // Control de volumen
        document.getElementById('volumeSlider').addEventListener('input', function() {
            var volume = this.value / 100;
            var leftVolume = Math.cos(volume * 0.5 * Math.PI);
            var rightVolume = Math.sin(volume * 0.5 * Math.PI);
            player1.setVolume(leftVolume * 100);
            player2.setVolume(rightVolume * 100);
        });

        // Carga el script de YouTube Player API
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//================ Dark - Mode ======================
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}