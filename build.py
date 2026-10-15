from pathlib import Path
import shutil

# Project folders
root = Path(__file__).resolve().parent
output = root / "_site"
pages = root / "pages"

# Remove previous build
if output.exists():
    shutil.rmtree(output)

# Copy homepage
main = pages / "main"

if not (main / "index.html").is_file():
    raise FileNotFoundError("Main index.html not found!")

shutil.copytree(main, output)

# Copy all other pages
for folder in pages.iterdir():
    if folder.is_dir() and folder.name != "main":
        shutil.copytree(folder, output / folder.name)

# Copy CSS, JS, images, fonts, etc.
for name in ["src", "assets"]:
    source = root / name
    if source.is_dir():
        shutil.copytree(source, output / name)

print("Website built successfully in _site/")
exit(0)