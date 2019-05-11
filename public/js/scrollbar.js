/**
 * scrollbar
 */
if (navigator.platform.match(/win32/i)) {
  var cssId = '_webkit-scrollbar';
  if (!document.getElementById(cssId)) {
      var head = document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.id = cssId;
      style.innerText = `
      ::-webkit-scrollbar { width: 6px; height: 6px; background-color: #fff; }
      ::-webkit-scrollbar-track { background-color: #fff; }
      ::-webkit-scrollbar-thumb { background-color: #ccc; border: 1px solid #ddd; }
      `;
      head.appendChild(style);
  }
}