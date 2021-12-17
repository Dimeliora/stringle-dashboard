export const avatarChange = () => {
    const changeAvatarButton = document.querySelector("#avatar-change");
    const changeAvatarInput = document.querySelector("#avatar-file");
    const avatarImage = document.querySelector("#avatar-image");

    const imageFileTypes = {
        "image/jpeg": true,
        "image/webp": true,
        "image/png": true,
    };

    if (
        changeAvatarButton === null ||
        changeAvatarInput === null ||
        avatarImage === null
    ) {
        console.error("Avatar change elements are not available");
        return;
    }

    changeAvatarButton.addEventListener("click", () => {
        changeAvatarInput.click();
    });

    changeAvatarInput.addEventListener("change", (e) => {
        const [file] = e.target.files;

        if (!file) {
            return;
        }

        if (!imageFileTypes[file.type]) {
            alert("Please, choose an image file!");
            return;
        }

        avatarImage.src = URL.createObjectURL(file);
        avatarImage.onload = (e) => {
            URL.revokeObjectURL(e.target.src);
        };
    });
};
