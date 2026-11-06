// Matches youtu.be/ID, watch?v=ID, shorts/ID and embed/ID
const YT_ID_PATTERN = /(?:youtu\.be\/|[?&]v=|shorts\/|embed\/)([A-Za-z0-9_-]{11})/;

/** Returns the 11-character video ID, or null if the input isn't valid. */
export function getYouTubeId(input = "") {
  const match = input.match(YT_ID_PATTERN);
  if (match) return match[1];

  const trimmed = input.trim();
  return /^[A-Za-z0-9_-]{11}$/.test(trimmed) ? trimmed : null;
}

export const getWatchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

export const getEmbedUrl = (id) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;

// hqdefault exists for every video (maxresdefault doesn't)
export const getAutoThumbnail = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;