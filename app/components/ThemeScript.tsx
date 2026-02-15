const themeInitializer = `(() => {
  try {
    const stored = window.localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = stored === 'light' || stored === 'dark' ? stored : (prefersLight ? 'light' : 'dark');
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  } catch (error) {
    console.warn('Unable to initialize theme', error);
  }
})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeInitializer }} />;
}
