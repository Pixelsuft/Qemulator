# Qemulator
Remake of [old version](https://github.com/Pixelsuft/Qemulator-old)
# Requirements
Internet Explorer >= 10 <br />
(Maybe Windows 10 only)
# Installation for Windows
Installing For Windows: <br />
1)Download [Setup](https://github.com/Pixelsuft/Qemulator/releases/download/v1.0-alpha/Qemulator_Setup.exe) or [Archive](https://github.com/Pixelsuft/Qemulator/releases/download/v1.0-alpha/Qemulator.rar)<br />
2)Install or unpack it to QEMU dir<br />
(You also can install/unpack to other dir, if QEMU Folder in PATH)
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
# Bugs
If you want to don't have bugs, you must have more than 1 virtual machine in list
