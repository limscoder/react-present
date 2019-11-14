import largeUnicornSrc from './images/unicorn-large.png';
import unicornSrc from './images/unicorn.png';
import rainbowSrc from './audio/taste-the-rainbow.m4a';

const slowAudioDelay = 900;

function loadBitmap(imgSrc) {
  return fetch(imgSrc).then(response => {
    return response.blob().then(window.createImageBitmap);
  });
}

function createAudio(blob, delay) {
  const bufferAudio = (delay) => {
    const start = Date.now();
    while (Date.now() - start < delay) {}
  } 
  bufferAudio(delay);

  return new Audio(URL.createObjectURL(blob));
}

function loadAudio(delay = 0) {
  return fetch(rainbowSrc).then(response => {
    return response.blob().then(blob => createAudio(blob, delay));
  });
}

export function initWithLargeImage() {
  return loadBitmap(largeUnicornSrc).then(bitmap => {
    return loadAudio(slowAudioDelay).then(audio => {
      return {
        audio,
        bitmap
      };
    });
  });
}

export function initWithSequentialAudio() {
  return loadBitmap(unicornSrc).then(bitmap => {
    return loadAudio(slowAudioDelay).then(audio => {
      return {
        audio,
        bitmap
      };
    });
  });
}

export function initWithLazyAudio() {
  return loadBitmap(unicornSrc).then(bitmap => {
    return {
      lazyAudio: () => loadAudio(slowAudioDelay),
      bitmap
    };
  });
}

export function initWithLongFrames() {
  return initOptimized().then(resources => {
    resources.longFrame = true;
    return resources;
  });
}

export function initOptimized() {  
  return loadBitmap(unicornSrc).then(bitmap => {
    return {
      idleAudio: loadAudio,
      bitmap
    };
  });
}