'use client'
import { useEffect } from 'react'

const VIDEO_IDS = ['7gt5d3', 'p2noey', '6ymkln']

export default function VideoModals() {
  useEffect(() => {
    VIDEO_IDS.forEach(function(videoId) {
      var modalId = 'videoModal_' + videoId
      if (document.getElementById(modalId)) return

      var modal = document.createElement('div')
      modal.className = 'video-modal-overlay'
      modal.id = modalId
      modal.innerHTML =
        '<div class="video-modal-box">'
        + '<button class="video-modal-close">&#x2715;</button>'
        + '<div class="video-modal-content"></div>'
        + '</div>'
      document.body.appendChild(modal)

      modal.querySelector('.video-modal-close').addEventListener('click', function() {
        modal.classList.remove('active')
        modal.querySelector('.video-modal-content').innerHTML = ''
      })

      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.classList.remove('active')
          modal.querySelector('.video-modal-content').innerHTML = ''
        }
      })
    })

    // Wire up click handlers on all video links with data-video-id
    document.querySelectorAll('[data-video-id]').forEach(function(link) {
      var videoId = link.getAttribute('data-video-id')
      link.addEventListener('click', function(e) {
        e.preventDefault()
        var modal = document.getElementById('videoModal_' + videoId)
        if (!modal) return
        var content = modal.querySelector('.video-modal-content')
        content.innerHTML =
          '<iframe'
          + ' src="https://streamable.com/e/' + videoId + '?autoplay=1&loop=0"'
          + ' allow="fullscreen;autoplay"'
          + ' allowfullscreen'
          + ' style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;">'
          + '</iframe>'
        modal.classList.add('active')
      })
    })
  }, [])

  return null
}
