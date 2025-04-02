let collectionBannerItems = document.querySelectorAll('.collection-banner-item');


collectionBannerItems.forEach(collectionBannerItem => {
  let bgImage = collectionBannerItem.dataset.bgImg; // Get data-bg-img attribute
  if (bgImage) {
    collectionBannerItem.style.backgroundImage = `url(${bgImage})`;
  }
})