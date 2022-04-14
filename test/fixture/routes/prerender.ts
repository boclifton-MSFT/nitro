export default defineEventHandler(() => {
  const links = [
    'https://about.google/products/',
    '/api/hello',
    '/api/hello',
    '/prerender',
    '../api/hey'
  ]
  return `
    <ul>
    ${links.map(link => `<li><a href="${link}">${link}</a></li>`).join('\n')}
  `
})
