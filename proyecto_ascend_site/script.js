const previewImage = document.getElementById('previewImage');
const previewVideo = document.getElementById('previewVideo');
const soundHint = document.getElementById('soundHint');
const thumbs = document.querySelectorAll('.thumb');

function showImage(src){
  previewVideo.pause();
  previewVideo.style.display = 'none';
  previewImage.src = src;
  previewImage.style.display = 'block';
  soundHint.style.display = 'none';
}

function showVideo(src){
  previewImage.style.display = 'none';
  previewVideo.src = src;
  previewVideo.style.display = 'block';
  previewVideo.muted = true;
  previewVideo.currentTime = 0;
  previewVideo.play().catch(()=>{});
  soundHint.style.display = 'block';
}

thumbs.forEach(btn => {
  btn.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const type = btn.dataset.type;
    const src = btn.dataset.src;
    type === 'video' ? showVideo(src) : showImage(src);
  });
});

soundHint.addEventListener('click', () => {
  previewVideo.muted = !previewVideo.muted;
  soundHint.textContent = previewVideo.muted ? 'activar sonido' : 'silenciar';
  previewVideo.play().catch(()=>{});
});

document.querySelector('.download-btn').addEventListener('click', (e) => {
  // El archivo real debe colocarse en downloads/ProyectoAscend.zip antes de publicar.
});
