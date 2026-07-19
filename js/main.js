(() => {
    const header = document.getElementById('header');
    if (!header) return;

    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
})();
