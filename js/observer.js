function playPauseVideo() {
  let iframes = document.querySelectorAll("iframe");

  iframes.forEach((iframe) => {
    var player = new Vimeo.Player(iframe);

    iframe.muted = true;

    let playPromise = player.play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {
        let observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                entry.intersectionRatio < 0.2 &&
                player.getPaused().then(function (paused) {})
              ) {

                player.pause();
              } else {

                player.play();
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(iframe);
      });
    }
  });
}

playPauseVideo();
