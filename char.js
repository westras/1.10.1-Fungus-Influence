  function changeImage(img, character) 
    {
    const mainImg = document.querySelector(`.character-card .left img.main-img`);
    mainImg.src = img.src;
    }

  function openLightbox(character) {
    const mainImg = document.querySelector(`.character-card .left img.main-img`);
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = mainImg.src;
    lightbox.style.display = 'flex';
  }

  function closeLightbox() 
  {
    document.getElementById('lightbox').style.display = 'none';
  }
