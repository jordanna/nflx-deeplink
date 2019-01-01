const params = new URLSearchParams(window.location.search)
const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

document.addEventListener('DOMContentLoaded', function(event) { 
  const title = params.get('t')
  const titleEl = document.querySelector('title')
  const deeplinkTitleEl = document.querySelector('#deeplink-title')
  const deeplinkSubtitleEl = document.querySelector('#deeplink-subtitle')
  if (title && title.trim().length) {
    deeplinkTitleEl.innerText = title
    titleEl.innerText += ' - ' + title
  } else {
    deeplinkSubtitleEl.innerText = ''
  }

  let deeplink = 'https://www.netflix.com/'
  const action = params.get('a')
  const query = params.get('q')
  const numericId = Number(query) || 0
  const urlEl = document.querySelector('#deeplink-url')
  switch (action) {
    case 'title':
      deeplink += 'title/' + numericId
      break;
    case 'watch':
      deeplink += 'watch/' + numericId
      break;
    case 'genre':
      deeplink += 'browse/genre/' + numericId
      break;
    default:
      deeplink += 'browse'
      break;
  }
  urlEl.href = deeplink
});