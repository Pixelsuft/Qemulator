//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop
#include <iostream.h>
#include <cstdlib.h>
#include <mmsystem.hpp>
#include "Main.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma link "SHDocVw_OCX"
#pragma resource "*.dfm"
TMainForm *MainForm;
bool tryload=true;
bool ctrl=false;
//---------------------------------------------------------------------------
__fastcall TMainForm::TMainForm(TComponent* Owner)
        : TForm(Owner)
{
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::StartupTimer(TObject *Sender)
{
        Startup->Enabled=false;

        MainForm->ClientWidth=800;
        MainForm->ClientHeight=600;
        MainForm->Left=Screen->Width/2-MainForm->Width/2;
        MainForm->Top=Screen->Height/2-MainForm->Height/2;
        MainForm->Constraints->MinWidth=MainForm->Width;
        MainForm->Constraints->MaxWidth=MainForm->Width;
        MainForm->Constraints->MinHeight=MainForm->Height;
        MainForm->Constraints->MaxHeight=MainForm->Height;
        MainForm->Caption="Qemulator (Press \"Ctrl+C\" To Quit)";

        Browser->Left=0;
        Browser->Top=0;
        Browser->Width=MainForm->ClientWidth;
        Browser->Height=MainForm->ClientHeight;
        Browser->Navigate(WideString(GetCurrentDir()+"\\src\\loading.html"));
        CheckAddress->Enabled=true;

        MainForm->AlphaBlendValue=255;
        MainForm->AlphaBlend=false;
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::BrowserBeforeNavigate2(TObject *Sender,
      LPDISPATCH pDisp, Variant *URL, Variant *Flags,
      Variant *TargetFrameName, Variant *PostData, Variant *Headers,
      VARIANT_BOOL *Cancel)
{
        AnsiString url=*URL;
        AnsiString clear_url="";
        bool can_cycle=true;
        for(int i=1;i<=url.Length();i++)
        {
                if(can_cycle==true){
                if(url.SubString(i,5)==".html")
                {
                        can_cycle=false;
                }
                else if(url.SubString(i,1)=="/" || url.SubString(i,1)=="\\")
                {
                        clear_url="";
                }
                else
                {
                        clear_url+=url.SubString(i,1);
                }
                }
        }
        if(url=="http://localhost:5000/spisok")
        {
                CheckAddress->Enabled=false;   
                tryload=false;
                MainForm->Caption="Qemulator";
        }
        if(tryload==true)CheckAddress->Enabled=true;
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::CheckAddressTimer(TObject *Sender)
{
        CheckAddress->Enabled=false;
        if(tryload==true)
        {
                Browser->Navigate(WideString("http://localhost:5000/i_am_here"));
        }
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::FormCloseQuery(TObject *Sender, bool &CanClose)
{
        CanClose=false;
        if(tryload==true)CanClose=true;
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::FormKeyDown(TObject *Sender, WORD &Key,
      TShiftState Shift)
{
        if(tryload==true)
        {
                if(Key==67)
                {
                        if(ctrl==true)
                        {
                                ctrl=false;
                                Close();
                        }
                }
                else if(Key==VK_CONTROL)
                {
                        ctrl=true;    
                        MainForm->Caption="Qemulator (Press \"C\" To Quit)";
                }
        }
        else MainForm->Caption="Qemulator";
}
//---------------------------------------------------------------------------
void __fastcall TMainForm::FormKeyUp(TObject *Sender, WORD &Key,
      TShiftState Shift)
{                                 
        if(tryload==true)
        {
                if(Key==VK_CONTROL)
                {
                        ctrl=false;
                        MainForm->Caption="Qemulator (Press \"Ctrl+C\" To Quit)";
                }
        }         
        else MainForm->Caption="Qemulator";
}
//---------------------------------------------------------------------------
