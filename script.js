function loadFiles(jsonFile, folder, containerId) {
  fetch(`public/${jsonFile}`)
    .then(res => res.json())
    .then(files => {
      const container = document.getElementById(containerId);
      files.forEach(file => {
        const div = document.createElement('div');
        div.className = 'file-card';

        if(folder === 'images'){
          const img = document.createElement('img');
          img.src = `public/${folder}/${file}`;
          img.alt = file;
          div.appendChild(img);
        }

        const a = document.createElement('a');
        a.href = `public/${folder}/${file}`;
        a.download = file;
        a.textContent = folder === 'images' ? 'Download' : file;
        div.appendChild(a);

        container.appendChild(div);
      });
    });
}
