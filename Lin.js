; ==============================
; Configuração Inicial
; ==============================
#Persistent
#SingleInstance Force
CoordMode, Mouse, Screen
SetTitleMatchMode, 2

; ==============================
; Atalhos de Controle
; ==============================
+q::ExitApp          ; SHIFT + Q para encerrar
+w::Goto, IniciarScript ; SHIFT + W para iniciar

; ==============================
; Início do Script
; ==============================
IniciarScript:
    Gosub, AbrirRoblox
    Gosub, IniciarJogo
    Gosub, JogarLoop
    Gosub, AbrirBaus
    Gosub, Finalizar
Goto, IniciarScript  ; Reinicia o ciclo

; ==============================
; Subrotinas
; ==============================

AbrirRoblox:
    Run, %ComSpec% /c start roblox-player:,, Hide
    WinWaitActive, ahk_exe RobloxPlayerBeta.exe
    Send, {F11}
Return

IniciarJogo:
    passo = 1
    Loop
    {
        passoConcluido = 0

        if (passo = 1)
        {
            ; --- Primeira busca - Lupa
            ImageSearch, xlupa, ylupa, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\ED7 Hardware\Desktop\Imagens\Lupa_tela_inicial.png
            erroLupa := ErrorLevel

            if (erroLupa = 0)
            {
                Sleep, 3000
                Click, 646, 11
                passoConcluido = 1
            }
        }
        else if (passo = 2)
        {
            ; --- Segunda busca - Visitas
            ImageSearch, xvisita, yvisita, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\ED7 Hardware\Desktop\Imagens\visitas.png
            erroVisita := ErrorLevel

            if (erroVisita = 0)
            {
                Click, 409, 239
                passoConcluido = 1
            }
        }
       else if (passo = 3)
{
    PixelSearch, xservidor, yservidor, 0, 0, A_ScreenWidth, A_ScreenHeight, 0xFEE123, 0, Fast RGB
    if (ErrorLevel = 0)
    {
        Click, 730, 243
        passoConcluido = 1
          }
       }

        else if (passo = 4)
        {
            ImageSearch, xjuntarse, yjuntarse, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\ED7 Hardware\Desktop\Imagens\Juntar-se.png
            if (ErrorLevel = 0)
            {
                Click, %xjuntarse%, %yjuntarse%
                passoConcluido = 1
            }
        }
        else if (passo = 5)
        {
            ImageSearch, xatualizar, yatualizar, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\ED7 Hardware\Desktop\Imagens\Atualizar.png
            if (ErrorLevel = 0)
            {
                Click, 1141, 71
                passoConcluido = 1
            }
        }
        else if (passo = 6)
        {
		Sleep, 1000
                Click, 358, 432
                Click, 358, 432
                passoConcluido = 1
            
        }
        else if (passo = 7)
        {
            ImageSearch, xmega, ymega, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\ED7 Hardware\Desktop\Imagens\Mega.png
            if (ErrorLevel = 0)
            {
                Click, %xmega%, %ymega%
                Sleep, 7000
                Click, 686, 570 ; Clica em entrar no mega mapa
                passoConcluido = 1
            }
        }
         else if (passo = 8)
        {
            PixelSearch, xtraços, ytraços, 0, 0, A_ScreenWidth, A_ScreenHeight, 0x585D64, 0, Fast RGB
    if (ErrorLevel = 0)
            {
                Sleep, 10000
                Click, 30, 736 ; Clica nos traços 
                Sleep, 4000
                Click, 681, 519 ; Clica em Pular
                Sleep, 2000
                passoConcluido = 1
                Break  ; Finaliza aqui no passo 9
            }
        }

        if (passoConcluido = 1)
        {
            Sleep, 2000
            passo += 1
        }
        Sleep, 100
    }

    Gosub, PularMapa
    Gosub, Regenerar
Return


JogarLoop:
    MaxRepeticoes = 18
    Repeticoes = 0

    Loop
    {
        if (Repeticoes >= MaxRepeticoes)
            Break

        Repeticoes += 1

        ; Comer até a barra ficar cheia (cor verde)
        Loop
        {
            PixelGetColor, corAtual, 1227, 721, RGB
            if (corAtual = 0x53C234)
                Break
            Click, 500, 399  ; Comer
            Sleep, 10
        }
        Gosub, Vender
        Click, 28, 737 ; Clica nos traços 
        Sleep, 2000
        Click, 684, 520 ; Clica em Pular
        Sleep, 2000
        Gosub, PularMapa
        Gosub, Regenerar
        Sleep, 8000
    }
Return

Vender:
    Loop, 7
    {
        Click, 680, 716
        Sleep, 1000
    }
Return

PularMapa:
    Loop, 5
    {
        ; 1. Tenta achar Mega Grid
        ImageSearch, xMega_Grid, yMega_Grid, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\ED7 Hardware\Desktop\Imagens\Mega_Grid.png
        if (ErrorLevel = 0)
        {
            Click, %xMega_Grid%, %yMega_Grid%
            Sleep, 1000
            Continue
        }

        ; 2. Tenta achar Cidade de Robloxia
        ImageSearch, xCidade_de_Robloxia, yCidade_de_Robloxia, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\ED7 Hardware\Desktop\Imagens\Cidade_de_Robloxia.png
        if (ErrorLevel = 0)
        {
            Click, %xCidade_de_Robloxia%, %yCidade_de_Robloxia%
            Sleep, 1000
            Continue
        }

        ; 3. Tenta achar Mega Placa de Base
        ImageSearch, xMega_Placa_de_Base, yMega_Placa_de_Base, 0, 0, A_ScreenWidth, A_ScreenHeight, C:\Users\ED7 Hardware\Desktop\Imagens\Mega_Placa_de_Base.png
        if (ErrorLevel = 0)
        {
            Click, %xMega_Placa_de_Base%, %yMega_Placa_de_Base%
            Sleep, 1000
            Continue
        }

        ; 4. Se nenhuma imagem for encontrada, pula o mapa
        Sleep, 10000
        Click, 30, 736   ; Abre menu
        Sleep, 4000
        Click, 681, 519  ; Pula
        Sleep, 2000
    }
    Sleep, 10000
Return

Regenerar:
    Click, 37, 33
    Sleep, 2000
    Click, 692, 667
    Sleep, 2000
    Click, 567, 367
Return

AbrirBaus:
    Click, 33, 412
    Sleep, 3000
    Click, 771, 267
    Sleep, 5000
    Click, 918, 276
    Sleep, 5000
    Click, 1043, 287
    Sleep, 5000
    Click, 764, 410
    Sleep, 5000
    Click, 914, 410
    Sleep, 5000
    Click, 1043, 405
    Sleep, 5000
    Click, 763, 544
    Sleep, 5000
    Click, 911, 542
    Sleep, 5000
    Click, 1036, 532
    Sleep, 5000
Return

Finalizar:
    Click, 485, 655   ; SPIN
    Sleep, 10000
    Send, {F11}
    Sleep, 2000
    Click, 1340, 8   ; Fechar Roblox
    Sleep, 5000
Return
