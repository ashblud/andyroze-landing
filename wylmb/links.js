/*
  Smart links for Andy Roze — Will You Leave Me Bleeding

  HTTPS links below are universal/deep links: on supported phones they open
  the installed app; otherwise they fall back to the web page.

  appUrl is used only where a stable direct app scheme is available.
*/

window.SMART_LINK_META = {
  followUrl: "https://open.spotify.com/artist/0I22ZgD2w7WwWUmAvrTj4Y"
};

window.SMART_LINKS = [
  {
    service: "spotify",
    name: "Spotify",
    action: "Play",
    url: "https://open.spotify.com/track/0YjiIb1HLqjxhGVLSo8qLH",
    appUrl: "spotify:track:0YjiIb1HLqjxhGVLSo8qLH"
  },
  {
    service: "apple",
    name: "Apple Music",
    action: "Play",
    url: "https://music.apple.com/pl/album/will-you-leave-me-bleeding/6786063729?i=6786063730",
    appUrl: ""
  },
  {
    service: "youtube-music",
    name: "YouTube Music",
    action: "Play",
    url: "https://music.youtube.com/watch?v=ivSusZVzWHU",
    appUrl: ""
  },
  {
    service: "youtube",
    name: "YouTube",
    action: "Watch",
    url: "https://www.youtube.com/watch?v=TBajhdhbxzE",
    appUrl: "youtube://watch?v=TBajhdhbxzE"
  },
  {
    service: "amazon",
    name: "Amazon Music",
    action: "Play",
    url: "https://music.amazon.com/albums/B0H7378P2K",
    appUrl: ""
  },
  {
    service: "deezer",
    name: "Deezer",
    action: "Play",
    url: "https://link.deezer.com/s/33TEhiwrIQgGSC8z0QfMj",
    appUrl: ""
  },
  {
    service: "tidal",
    name: "TIDAL",
    action: "Play",
    url: "https://tidal.com/track/538866853/u",
    appUrl: ""
  },
  {
    service: "soundcloud",
    name: "SoundCloud",
    action: "Play",
    url: "https://soundcloud.com/andyroze/will-you-leave-me-bleeding",
    appUrl: ""
  },
  {
    service: "bandcamp",
    name: "Bandcamp",
    action: "Get",
    url: "https://andyroze.bandcamp.com/album/will-you-leave-me-bleeding",
    appUrl: ""
  }
];
