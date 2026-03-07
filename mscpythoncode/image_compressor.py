from PIL import Image
import os

def smart_resize(input_path, output_path, max_kb=125, min_quality=20, reduction_step=0.9):
    """
    Resize and compress an image smartly to stay below max_kb while preserving quality.
    
    Parameters:
    - input_path: path to the original image
    - output_path: path to save resized/compressed image
    - max_kb: maximum file size in KB
    - min_quality: minimum JPEG quality
    - reduction_step: factor to reduce dimensions (e.g., 0.9 = reduce 10%)
    """
    img = Image.open(input_path)
    width, height = img.size
    quality = 95  # start high

    while True:
        # Save image with current quality
        img.save(output_path, optimize=True, quality=quality)
        size_kb = os.path.getsize(output_path) / 1024

        if size_kb <= max_kb:
            # Done
            print(f"Done: {size_kb:.2f} KB, dimensions={img.size}, quality={quality}")
            break

        if quality > min_quality:
            # Reduce quality first
            quality -= 5
        else:
            # Reduce dimensions if quality is already low
            width = int(width * reduction_step)
            height = int(height * reduction_step)
            img = img.resize((width, height), Image.ANTIALIAS)
            quality = 95  # reset quality after resizing

# Example usage
smart_resize("largehero.jpg", "hero2.jpg", max_kb=125)
