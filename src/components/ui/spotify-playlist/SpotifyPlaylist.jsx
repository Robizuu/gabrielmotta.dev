const SpotifyPlaylist = () => {
  return (
    <div className="m-5 flex justify-center h-90">
      <iframe
        title="Minha Trilha Sonora"
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/01KjuKqlrK3aTF1rzwcfrC?utm_source=generator&theme=0"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
