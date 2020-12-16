# Qemulator
Remake of old version
# Requirements
Internet Explorer >= 10
# Install Python Libs
```
pip install flask
pip install flask_cors
pip install tkinter
pip install easygui
pip install pyinstaller
```
# Build For Windows
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
