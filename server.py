is_builded=False
try:
    from flask import Flask
    from flask import render_template as render
    from flask import url_for
    from flask import redirect
    from flask import request
    from flask_cors import CORS as cors_for_flask
    from os import startfile as run_prog
    from os import system as cmd_run
    from os import access as check_exists
    from os import F_OK as check_exists_param
    from os import remove as del_file
    from os import environ as env
    from subprocess import Popen as alter_run
    from tkinter import messagebox as msgbox
    #from tkinter import filedialog
    #from tkinter import Tk
    from easygui import fileopenbox as askopenfilename
    from os import listdir as scan_dir
    from shutil import rmtree as remove_folder
    cur_vm_before_start=''
    
    def clear_temp():
        for i in scan_dir(env['TEMP']):
            if i[:4]=='_MEI':
                print('Trying to del temp folder '+i)
                try:
                    remove_folder(env['TEMP']+'\\'+i)
                    print('Removed!')
                except:
                    print('Error!')    
    vm_mas=[]
    try:
        if check_exists('vm_list.txt',check_exists_param)==True:
            f=open('vm_list.txt','r')
            vm_mas=f.read().split('\n')
            f.close()
        else:
            vm_mas=[]
    except:
        vm_mas=[]

    app = Flask(__name__, template_folder='src', static_folder='static')

    cors_for_flask(app)

    @app.route('/spisok')
    def index():
        return render('spisok.html', vm_mass=vm_mas)

    @app.route('/i_am_here')
    def i_am_here():
        return render('redirect.html',redirect_url="http://localhost:5000/spisok")

    @app.route('/add_vm_to_spisok/<string:vm_name>')
    def add_vm_to_spisok(vm_name):
        vm_mas.append(vm_name)
        return render('redirect.html',redirect_url="http://localhost:5000/spisok")

    @app.route('/remove_vm_from_spisok/<string:vm_name>')
    def remove_vm_from_spisok(vm_name):
        try:
            vm_mas.remove(vm_name)
            try: del_file(vm_name+'.qemulator')
            except: pass
            try: del_file(vm_name+'.cd')
            except: pass
            try: del_file(vm_name+'.fda')
            except: pass
            try: del_file(vm_name+'.fdb')
            except: pass
            try: del_file(vm_name+'.hda')
            except: pass
            try: del_file(vm_name+'.hdb')
            except: pass
            try: del_file(vm_name+'.hdc')
            except: pass
            try: del_file(vm_name+'.hdd')
            except: pass
            try: del_file(vm_name+'.order')
            except: pass
        except:
            pass
        return render('redirect.html',redirect_url="http://localhost:5000/spisok")

    @app.route('/setup_disks/<string:cur_vm>')
    def setup_disks(cur_vm):
        fda=''
        fdb=''
        hda=''
        hdb=''
        hdc=''
        hdd=''
        cd=''
        order=''
        try:
            tempff=open(cur_vm+'.fda','r')
            fda=tempff.read()
            tempff.close()
        except: pass
        try:
            tempff=open(cur_vm+'.fdb','r')
            fdb=tempff.read()
            tempff.close()
        except: pass
        try:
            tempff=open(cur_vm+'.hda','r')
            hda=tempff.read()
            tempff.close()
        except: pass
        try:
            tempff=open(cur_vm+'.hdb','r')
            hdb=tempff.read()
            tempff.close()
        except: pass
        try:
            tempff=open(cur_vm+'.hdc','r')
            hdc=tempff.read()
            tempff.close()
        except: pass
        try:
            tempff=open(cur_vm+'.hdd','r')
            hdd=tempff.read()
            tempff.close()
        except: pass
        try:
            tempff=open(cur_vm+'.cd','r')
            cd=tempff.read()
            tempff.close()
        except: pass
        try:
            tempff=open(cur_vm+'.order','r')
            order=tempff.read()
            tempff.close()
        except: pass
        return render('drives.html', cur_vm=cur_vm, fda=fda, order=order, fdb=fdb, hda=hda, hdb=hdb, hdc=hdc, hdd=hdd, cd=cd)

    @app.route('/setup_disks/<string:cur_vm>/order/<string:order>')
    def set_order(cur_vm, order):
        try:
            ftemp=open(cur_vm+'.order','w')
            ftemp.write(order)
            fpemp.close()
        except:
            pass
        return render('redirect.html',redirect_url="http://localhost:5000/setup_disks/"+cur_vm)

    @app.route('/setup_disks/<string:cur_vm>/save/<string:drive>')
    def save_disk(cur_vm, drive):
        result=''
        if drive=='fda' or drive=='fdb':
            filetypes = [["*.img", "*.vfd", "*.flp", "*.floppy", "*.ima", "Floppy Files"]]
            file_name=askopenfilename(
                title='Open Floppy',
                filetypes=filetypes,
                multiple = False,
                default='*.img;*.vfd;*.flp;*.floppy;*.ima'
            )
            if file_name==None:
                result=''
            else:
                result=file_name.replace('/','\\').replace('\"','').replace('\'','')
            try:
                ftemp=open(cur_vm+'.'+drive,'w')
                ftemp.write(result)
                fpemp.close()
            except:
                pass
        elif drive=='cd':
            filetypes = [["*.iso", "*.cdrom", "CDROM Files"]]
            file_name=askopenfilename(
                title='Open CDROM',
                filetypes=filetypes,
                multiple = False,
                default='*.iso;*.cdrom'
            )
            if file_name==None:
                result=''
            else:
                result=file_name.replace('/','\\').replace('\"','').replace('\'','')
            try:
                ftemp=open(cur_vm+'.'+drive,'w')
                ftemp.write(result)
                fpemp.close()
            except:
                pass

        else:
            filetypes = [["*.img", "*.vhd", "*.vmdk", "*.qcow", "*.qcow2", "Hard Disk Files"]]
            file_name=askopenfilename(
                title='Open Hard Disk',
                filetypes=filetypes,
                multiple = False,
                default='*.img;*.vhd;*.vmdk;*.qcow;*.qcow2'
            )
            if file_name==None:
                result=''
            else:
                result=file_name.replace('/','\\').replace('\"','').replace('\'','')
            try:
                ftemp=open(cur_vm+'.'+drive,'w')
                ftemp.write(result)
                fpemp.close()
            except:
                pass

        return render('redirect.html',redirect_url="http://localhost:5000/setup_disks/"+cur_vm)

    @app.route('/remove_vm_from_spisok/')
    def remove_vm_from_spisok_empty():
        vm_mas.remove('')
        return render('redirect.html',redirect_url="http://localhost:5000/spisok")

#    @app.route('/sel_drive/<string:type>')
#    def sel_drive(type):
#        if type=='fd':
#            filetypes = [["*.img", "*.vfd", "*.flp", "*.floppy", "*.ima", "Floppy Files"]]
#            file_name=askopenfilename(
#                title='Open Floppy',
#                filetypes=filetypes,
#                multiple = False,
#                default='*.img;*.vfd;*.flp;*.floppy;*.ima'
#            )
#            if file_name==None:
#                return ''
#            else:
#                return file_name.replace('/','\\')
#        elif type=='hd':
#            filetypess = [["*.img", "*.vhd", "*.vmdk", "*.qcow", "*.qcow2", "Hard Disk Files"]]
#            file_names=askopenfilename(
#                title='Open Hard Disk',
#                filetypes=filetypess,
#                multiple = False,
#                default='*.img;*.vhd;*.vmdk;*.qcow;*.qcow2'
#            )
#            if file_names==None:
#                return ''
#            else:
#                return file_names.replace('/','\\')
#        elif type=='cd':
#            filetypeses = [["*.iso", "*.cd", "*.cdrom", "CDROM Files"]]
#            file_namees=askopenfilename(
#                title='Open CDROM',
#                filetypes=filetypeses,
#                multiple = False,
#                default='*.iso;*.cd;*.cdrom'
#            )
#            if file_namees==None:
#                return ''
#            else:
#                return file_namees.replace('/','\\')
#        else:
#            print(type)

    @app.route('/sets/<string:vm_name>')
    def setup(vm_name):
        params_s=''
        if check_exists(vm_name+'.qemulator',check_exists_param)==True:
            tempf=open(vm_name+'.qemulator','r')
            params_s='?'+tempf.read()
            print(params_s)
            print("http://localhost:5000/sets_full/"+vm_name+params_s)
            tempf.close()
        return render('redirect.html',redirect_url="http://localhost:5000/sets_full/"+vm_name+params_s)

    @app.route('/sets_full/<string:vm_name>')
    def setup_full(vm_name):
        return render('sets.html',vm=vm_name)

    @app.route('/save_sets/<string:cur_vm>/<string:params>')
    def save_sets(cur_vm, params):
        if not params=='dont_del_this_needs_fix':
            if check_exists(cur_vm+'.qemulator',check_exists_param)==True:
                del_file(cur_vm+'.qemulator')

            file=open(cur_vm+'.qemulator','w')
            file.writelines(params)
            file.close()
            return render('redirect.html',redirect_url="http://localhost:5000/spisok")
        else:
            return render('sets.html',fix_location="true",vm=cur_vm)

    @app.route('/run_vm/<string:vm_name>')
    def run_vm(vm_name):
        global cur_vm_before_start
        cur_vm_before_start=vm_name
        return render('run.html', name_vm=vm_name)

    @app.route('/start_up/<string:boot_device>')
    def startup(boot_device):
        global cur_vm_before_start
        cur_vm=cur_vm_before_start
        params_str=''
        params={}
        if check_exists(cur_vm+'.qemulator',check_exists_param)==True:
            tempf=open(cur_vm+'.qemulator','r')
            params_str=tempf.read()
            tempf.close()
        for i in params_str.split('&'):
            temp_two=i.split('=')
            try:
                params[temp_two[0]]=temp_two[1]
            except:
                params[temp_two[0]]=''
        args='qemu-system-'
        try:
            if params['arc']=='x64':
                args+='x86_64'
            else:
                args+='i386'
        except:
            args+='i386'
        try:
            if params['console_on']=='on':
                args+=''
        except: args+='w'
        try:
            if params['nodefaults']=='on':
                args+=' -nodefaults'
        except: pass
        try:
            if params['nographic']=='on':
                args+=' -nographic -display gtk'
        except: pass
        try:
            if params['vnc']=='on':
                args+=' -display vnc='+params['vnc_ip']
        except: pass
        try:
            if params['sdl']=='on':
                args+=' -sdl'
        except: pass
        try:
            if params['stdio']=='on':
                args+=' -monitor stdio'
        except: pass
        try:
            if params['vc']=='on':
                args+=' -monitor vc'
        except: pass
        try:
            if params['sb16']=='on':
                args+=' -soundhw sb16'
        except: pass
        try:
            if params['noac']=='on':
                args+=' -no-kvm'
        except: pass
        try:
            if params['2k']=='on':
                args+=' -win2k-hack'
        except: pass
        try:
            if params['noquit']=='on':
                args+=' noquit'
        except: pass
        try:
            if params['speaker']=='on':
                args+=' -soundhw pcspk'
        except: pass
        try:
            if params['ac97']=='on':
                args+=' -soundhw ac97'
        except: pass
        try:
            if params['ihda']=='on':
                args+=' -soundhw hda'
        except: pass
        try:
            if params['adlib']=='on':
                args+=' -soundhw adlib'
        except: pass
        try:
            if params['gus']=='on':
                args+=' -soundhw gus'
        except: pass
        try:
            if params['fullscreen']=='on':
                args+=' -full-screen'
        except: pass
        try:
            if not params['acpi']=='on':
                args+=' -no-acpi'
        except:
            args+=' -no-acpi'
        try:
            if not params['hpet']=='on':
                args+=' -no-hpet'
        except:
            args+=' -no-hpet'
        try:
            if not params['cpu']=='def':
                args+=' -cpu '+params['cpu']
        except: pass
        try:
            if not params['memsize']=='':
                args+=' -m '+params['memsize']
        except: pass
        try:
            if params['tablet']=='on':
                args+=' -usbdevice tablet'
        except: pass
        try:
            if params['vmport']=='on':
                args+=' -machine vmport=on'
        except: pass
        try:
            if params['hax']=='on':
                args+=' -accel hax'
        except: pass
        try:
            if params['tcg']=='on':
                args+=' -accel tcg,thread=single'
        except: pass
        try:
            if params['whpx']=='on':
                args+=' -accel whpx'
        except: pass
        try:
            if params['kvm']=='on':
                args+=' -accel kvm'
        except: pass
        if check_exists(cur_vm+'.fda',check_exists_param)==True:
            tempff=open(cur_vm+'.fda','r')
            temp_text=tempff.read()
            tempff.close()
            if not temp_text=='':
                args+=' -fda \"'+temp_text.replace('\"','').replace('\'','')+'\"'
        if check_exists(cur_vm+'.fdb',check_exists_param)==True:
            tempff=open(cur_vm+'.fdb','r')
            temp_text=tempff.read()
            tempff.close()
            if not temp_text=='':
                args+=' -fdb \"'+temp_text.replace('\"','').replace('\'','')+'\"'
        if check_exists(cur_vm+'.hda',check_exists_param)==True:
            tempff=open(cur_vm+'.hda','r')
            temp_text=tempff.read()
            tempff.close()
            if not temp_text=='':
                args+=' -hda \"'+temp_text.replace('\"','').replace('\'','')+'\"'
        if check_exists(cur_vm+'.hdb',check_exists_param)==True:
            tempff=open(cur_vm+'.hdb','r')
            temp_text=tempff.read()
            tempff.close()
            if not temp_text=='':
                args+=' -hdb \"'+temp_text.replace('\"','').replace('\'','')+'\"'
        if check_exists(cur_vm+'.hdc',check_exists_param)==True:
            tempff=open(cur_vm+'.hdc','r')
            temp_text=tempff.read()
            tempff.close()
            if not temp_text=='':
                args+=' -hdc \"'+temp_text.replace('\"','').replace('\'','')+'\"'
        if check_exists(cur_vm+'.hdd',check_exists_param)==True:
            tempff=open(cur_vm+'.hdd','r')
            temp_text=tempff.read()
            tempff.close()
            if not temp_text=='':
                args+=' -hdd \"'+temp_text.replace('\"','').replace('\'','')+'\"'
        if check_exists(cur_vm+'.cd',check_exists_param)==True:
            tempff=open(cur_vm+'.cd','r')
            temp_text=tempff.read()
            tempff.close()
            if not temp_text=='':
                args+=' -cdrom \"'+temp_text.replace('\"','').replace('\'','')+'\"'
        if check_exists(cur_vm+'.order',check_exists_param)==True:
            tempff=open(cur_vm+'.order','r')
            temp_text=tempff.read()
            tempff.close()
            if not temp_text=='':
                args+=' -boot order='+temp_text.replace('\"','').replace('\'','')
            else:
                args+=' -boot order=dc'
        else:
            args+=' -boot order=dc'
        try:
            if params['vga']=='std_vga':
                args+=' -vga std'
            elif params['vga']=='cirrus_vga':
                args+=' -vga cirrus'
            elif params['vga']=='virtio_svga':
                args+=' -vga virtio'
            else:
                args+=' -vga vmware'
        except:
            pass
        try:
            if params['ctrl_grab']=='on' and params['sdl']=='on':
                args+=' -ctrl-grab'
        except: pass
        try:
            if not params['other_params']=='':
                args+=' '+params['other_params'].replace('+', ' ')
        except: pass
        try:
            if params['bios']=='' or params['bios']=='qemu' or params['bios']=='def':
                args+=' -bios qemulator_bios.bin'
            elif params['bios']=='qemu_old':
                args+=' -bios qemulator_old_bios.bin'
            elif params['bios']=='efi':
                if params['arc']=='x64':
                    args+=' -bios efi64.bin'
                else:
                    args+=' -bios efi32.bin'
        except:
            args+=' -bios qemulator_bios.bin'
        args+=' -L . -name \"'+cur_vm+'\" -no-reboot'
        if not boot_device=='default':
            args+=' -boot ' + boot_device
        print(args)
        cmd_run('start '+args)

        return render('redirect.html',redirect_url="http://localhost:5000/spisok")

    @app.errorhandler(404)
    def page_not_found(e):
        return render('404.html'), 404

    @app.route('/exit')
    def close():
        if check_exists('vm_list.txt',check_exists_param)==True:
            del_file('vm_list.txt')

        file_save=open('vm_list.txt','w')
        vm_mas_str=''
        for i in range(len(vm_mas)):
            if not i==0:
                vm_mas_str+='\n'
            vm_mas_str+=vm_mas[i]
        file_save.write(vm_mas_str)
        file_save.close()

        if is_builded==False:
            alter_run(['taskkill','/f','/im','Qemulator.exe'])
            alter_run(['taskkill','/f','/im','Python.exe'])
        else:
            alter_run(['taskkill','/f','/im','Client.exe'])
            clear_temp()
            alter_run(['taskkill','/f','/im','Qemulator.exe'])
        return render('loading.html')


    if check_exists('use_7_style.txt',check_exists_param)==True:
        env['__COMPAT_LAYER']='WinXPSp3'   #Set windows 7 theme. Yes, you found it!!!

    if is_builded==False:
        run_prog('Qemulator.exe')
    else:
        run_prog('Client.exe')

    if __name__=='__main__':
        try:
            app.run(debug=False)
        except:
            msgbox.showerror('Error with start server!','Maybe your computer\'s name has non English symbols?\nFor example, Russian symbols.')
except KeyboardInterrupt:
    print('Ctrl+C Pressed, quiting...')
except:
    print('Error, quiting...')
