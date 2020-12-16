# Qemulator
Remake of [old version](https://github.com/Pixelsuft/Qemulator-old)
# Requirements
Internet Explorer >= 10 <br />
(Maybe Windows 10 only)
# Install Python Libs
```
pip install flask
pip install flask_cors
pip install tkinter
pip install easygui
pip install pyinstaller
```
# Build For Windows
Edit first string of file ```server.py```: is_builded=True <br />
Then: 
```
pyinstaller server.py -w -i icon.ico --add-data "src;src" --add-data "static;static"
copy Qemulator.exe dist\server\Client.exe
copy *.bin dist\server\*.bin
copy *.txt dist\server\*.txt
cd dist
cd server
move server.exe Qemulator.exe
explorer .
```
# Screenshots
![Screenshot](https://github.com/Pixelsuft/Qemulator/blob/main/screenshots/screenshot1.png?raw=true)<br />
![Screenshot](https://github.com/Pixelsuft/Qemulator/blob/main/screenshots/screenshot2.png?raw=true)
