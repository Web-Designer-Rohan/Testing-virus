document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'xxx.apk';
  link.download = 'xxx.apk';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
