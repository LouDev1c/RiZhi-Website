(function () {
  const config = window.RIZHI_SITE_CONFIG || {};
  const downloadLinks = document.querySelectorAll('.download-link');
  const versionText = document.querySelector('[data-version]');
  const toast = document.querySelector('.toast');
  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 3200);
  };

  if (config.downloadUrl) {
    downloadLinks.forEach((link) => {
      link.href = config.downloadUrl;
      link.target = '_blank';
      link.rel = 'noopener';
    });
    if (versionText) versionText.textContent = `当前版本 ${config.version} · 发布于 ${config.publishedAt}`;
  } else {
    downloadLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#download').scrollIntoView({ behavior: 'smooth' });
        showToast('安装包链接正在准备中，请稍后再来。');
      });
    });
  }

  document.querySelector('#year').textContent = new Date().getFullYear();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}());
