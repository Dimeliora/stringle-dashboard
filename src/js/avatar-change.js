import { avatarElms } from './dom-elements';

const imageFileTypes = {
    'image/jpeg': true,
    'image/webp': true,
    'image/png': true,
};

avatarElms.avatarButtonElm.addEventListener('click', () => {
    avatarElms.avatarFileElm.click();
});

avatarElms.avatarFileElm.addEventListener('change', (e) => {
    const [file] = e.target.files;

    if (!file) {
        return;
    }

    if (!imageFileTypes[file.type]) {
        alert('Please, choose an image file!');
        return;
    }

    avatarElms.avatarImageElm.src = URL.createObjectURL(file);
    avatarElms.avatarImageElm.onload = (e) => {
        URL.revokeObjectURL(e.target.src);
    };
});
