const token = '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';

let pic = document.querySelector('.new');
pic.addEventListener('click', addpic);

function addpic() {
  const container = document.querySelector('.imgb');
  container.innerHTML = '';

  // File input create karo
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*,video/*';
  input.multiple = true;
  container.appendChild(input);

  // Upload button create karo
  const btn = document.createElement('button');
  btn.textContent = 'Upload';
  container.appendChild(btn);

  btn.addEventListener('click', () => {
    const files = input.files;
    if (!files.length) return alert('File select karo.');

    const username = 'hajrateali';
    const repo = 'newrepo';
    const path = 'data.json';
    const api = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;

    // Step 1: Get current data.json
    fetch(api, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(res => res.json())
    .then(file => {
      const sha = file.sha;
      let oldData = { files: [] };

      try {
        oldData = JSON.parse(atob(file.content));
      } catch (e) {
        console.log('Empty or invalid JSON, using empty object.');
      }

      const newFiles = [];

      const readers = Array.from(files).map(file => {
        return new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = () => {
            newFiles.push({
              name: file.name,
              type: file.type.startsWith('video') ? 'video' : 'image',
              data: reader.result
            });
            resolve();
          };
          reader.readAsDataURL(file);
        });
      });

      // Step 2: Read files, add to JSON, upload updated JSON
      Promise.all(readers).then(() => {
        oldData.files = oldData.files.concat(newFiles);
        const newContent = btoa(JSON.stringify(oldData, null, 2));

        fetch(api, {
          method: 'PUT',
          headers: {
            Authorization: `token ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: 'Add new media files',
            content: newContent,
            sha: sha
          })
        })
        .then(() => alert('Upload successful!'))
        .catch(err => {
          console.error('Upload failed:', err);
          alert('Upload failed!');
        });
      });
    })
    .catch(err => {
      console.error('Fetch failed:', err);
      alert('GitHub JSON fetch error');
    });
  });
}