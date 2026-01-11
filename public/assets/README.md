# Assets Directory

This directory should contain the assets referenced in the application.

## Required Logo Images

Add your logo images here:
- `logo1.jpg` - Karnataka emblem
- `logo2.png` - Namma 112 logo

## Gallery Images

Create a `gallery` subdirectory and add your festival photos:
- `gallery/photo1.jpg`
- `gallery/photo2.jpg`
- `gallery/photo3.jpg`
- `gallery/photo4.jpg`
- `gallery/photo5.jpg`
- `gallery/photo6.jpg`

You can add more photos by updating the `GALLERY_IMAGES` array in `src/common/constants.js`.

The gallery will be horizontally scrollable if there are multiple images.

## Notes

- The gallery will automatically show placeholder text if images are not found
- Update image URLs in `src/common/constants.js` to match your actual filenames
- Supported formats: .jpg, .jpeg, .png, .gif, .webp
