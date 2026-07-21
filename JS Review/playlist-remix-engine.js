const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  const flat = [];

  for (let i = 0; i < playlists.length; i++) {
    const playlist = playlists[i];

    for (let j = 0; j < playlist.length; j++) {
      const track = playlist[j];

      flat.push({
        trackId: track.trackId,
        artist: track.artist,
        title: track.title,
        votes: track.votes,
        bpm: track.bpm,
        source: [i, j],
      });
    }
  }

  return flat;
}

function scoreTracks(tracks) {
  const scored = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];

    scored.push({
      trackId: track.trackId,
      artist: track.artist,
      title: track.title,
      votes: track.votes,
      bpm: track.bpm,
      source: track.source,
      score: track.votes * 10 - Math.abs(track.bpm - 120),
    });
  }

  return scored;
}

function dedupeTracks(tracks) {
  const result = [];
  const seen = {};

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];

    if (!seen[track.trackId]) {
      seen[track.trackId] = true;
      result.push(track);
    }
  }

  return result;
}

function enforceArtistQuota(tracks, maxPerArtist) {
  const result = [];
  const counts = {};

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const artist = track.artist;

    if (!counts[artist]) {
      counts[artist] = 0;
    }

    if (counts[artist] < maxPerArtist) {
      result.push(track);
      counts[artist]++;
    }
  }

  return result;
}

function buildSchedule(tracks) {
  const schedule = [];

  for (let i = 0; i < tracks.length; i++) {
    schedule.push({
      slot: i + 1,
      trackId: tracks[i].trackId,
    });
  }

  return schedule;
}

function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaApplied = enforceArtistQuota(deduped, maxPerArtist);
  const schedule = buildSchedule(quotaApplied);

  return schedule;
}

/// Versão melhorada do código acima, utilizando métodos de array como map, reduce e filter para tornar o código mais conciso e legível.

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) return [];

  return playlists.flatMap((playlist, playlistIndex) =>
    playlist.map((track, trackIndex) => ({
      ...track,
      source: [playlistIndex, trackIndex],
    })),
  );
}

function scoreTracks(tracks) {
  return tracks.map((track) => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120),
  }));
}

function dedupeTracks(tracks) {
  const seen = new Set();

  return tracks.filter((track) => {
    if (seen.has(track.trackId)) return false;
    seen.add(track.trackId);
    return true;
  });
}

function enforceArtistQuota(tracks, maxPerArtist) {
  const artistCounts = {};

  return tracks.filter((track) => {
    const currentCount = artistCounts[track.artist] || 0;

    if (currentCount >= maxPerArtist) return false;

    artistCounts[track.artist] = currentCount + 1;
    return true;
  });
}

function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId,
  }));
}

function remixPlaylist(playlists, maxPerArtist) {
  return buildSchedule(
    enforceArtistQuota(
      dedupeTracks(scoreTracks(flattenPlaylists(playlists))),
      maxPerArtist,
    ),
  );
}
