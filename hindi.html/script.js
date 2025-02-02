// Array of songs with titles and file paths
const songs = [
    { title: "Song 1", file: "audio1.mp3" },
    { title: "Song 2", file: "songs/song2.mp3" },
    { title: "Song 3", file: "songs/song3.mp3" }
  ];
  
  // Elements
  const playlist = document.getElementById('playlist');
  const songTitle = document.getElementById('song-title');
  const audioPlayer = document.getElementById('audio-player');
  
  // Populate the playlist
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.dataset.index = index; // Store the song index
    playlist.appendChild(li);
  });
  
  // Play selected song
  playlist.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const index = e.target.dataset.index;
      const song = songs[index];
      songTitle.textContent = song.title;
      audioPlayer.src = song.file;
      audioPlayer.play();
    }
  });
  