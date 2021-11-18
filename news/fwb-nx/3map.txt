#Изначально код выглядел так и обращался к клавиатуре renpy.input
#и знанию игроком чит кодов
        "Ввести чит-код":
                $ password = renpy.input("Введите код")
                if password == ("ibeat0.2"):
                    "Этот чит даст 200 монет и вы проснётесь на 6 день. Он автоматически завершит руты бутика и фермы."
                    menu:
                        "Вы уверены?"
                        "Да":
                            pass
                        "Нет":
                            jump daywagonmenu
                    "Выполнено"
                    $ monies = 200
                    $ days = 6
                    $ boutiquevisits = 4
                    $ boutiquevisit1 = 1
                    $ boutiquevisit2 = 1
                    $ boutiquevisit3 = 1
                    $ farmvisits = 4
                    $ farmvisit1 = 1
                    $ farmvisit2 = 1
                    $ farmvisit3 = 1
                    jump daywagonmenu
                elif password == ("moneymoneymoney"):
                    "Этот чит даст вам 9999 монет, которых хватит на всё в игре, буквально на ВСЁ."
                    menu:
                        "Вы уверены?"
                        "Да":
                            pass
                        "Нет":
                            jump daywagonmenu
                    "Выполнено"
                    $ monies = 9999
                    jump daywagonmenu
                elif password == ("ibeat0.4"):
                    "Этот чит завершит руты Леса, Библиотеки, Бутика и Фермы. Вы получите 360 монет и проснётесь на 12 дне."
                    menu:
                        "Вы уверены?"
                        "Да":
                            $ monies = 360
                            $ days = 12
                            $ boutiquevisits = 4
                            $ boutiquevisit1 = 1
                            $ boutiquevisit2 = 1
                            $ boutiquevisit3 = 1
                            $ farmvisits = 4
                            $ farmvisit1 = 1
                            $ farmvisit2 = 1
                            $ farmvisit3 = 1
                            $ libraryvisits = 4
                            $ forestvisits = 4
                            $ forestvisit1 = 1
                            $ forestvisit2 = 1
                            $ forestvisit3 = 1
                            $ libraryvisit1 = 1
                            $ libraryvisit2 = 1
                            $ libraryvisit3 = 1
                            jump daywagonmenu
                        "Нет":
                            jump daywagonmenu
                elif password == ("ibeat0.6"):
                    "Этот чит завершит руты Селены, Бара, Леса, Библиотеки, Бутика и Фермы. Вы получите 450 монет и проснётесь на 15 день."
                    menu:
                        "Вы уверены?"
                        "Да":
                            $ monies = 450
                            $ days = 15
                            $ boutiquevisits = 4
                            $ boutiquevisit1 = 1
                            $ boutiquevisit2 = 1
                            $ boutiquevisit3 = 1
                            $ farmvisits = 4
                            $ farmvisit1 = 1
                            $ farmvisit2 = 1
                            $ farmvisit3 = 1
                            $ libraryvisits = 4
                            $ forestvisits = 4
                            $ forestvisit1 = 1
                            $ forestvisit2 = 1
                            $ forestvisit3 = 1
                            $ libraryvisit1 = 1
                            $ libraryvisit2 = 1
                            $ libraryvisit3 = 1
                            $ barvisits = 3
                            $ barvisit1 = 1
                            $ barvisit2 = 1
                            $ selenevisit1 = 1
                            $ maiddressbought = 1
                            jump daywagonmenu
                        "Нет":
                            jump daywagonmenu
                elif password == ("changemyname"):
                    python:
                        playername = renpy.input("Как Вас зовут?")
                        playername = playername.strip()
                        if not playername:
                            playername = "Аноним"
                    jump daywagonmenu
                elif password == ("ibeatallroutes"):
                    "Этот чит завершит все основные руты главного героя. Вы получите 550 монет и проснётесь на 21 день."
                    menu:
                        "Вы уверены?"
                        "Да":
                            $ monies = 550
                            $ days = 21
                            $ boutiquevisits = 4
                            $ boutiquevisit1 = 1
                            $ boutiquevisit2 = 1
                            $ boutiquevisit3 = 1
                            $ farmvisits = 4
                            $ farmvisit1 = 1
                            $ farmvisit2 = 1
                            $ farmvisit3 = 1
                            $ libraryvisits = 4
                            $ forestvisits = 4
                            $ forestvisit1 = 1
                            $ forestvisit2 = 1
                            $ forestvisit3 = 1
                            $ libraryvisit1 = 1
                            $ libraryvisit2 = 1
                            $ libraryvisit3 = 1
                            $ barvisits = 3
                            $ barvisit1 = 1
                            $ barvisit2 = 1
                            $ selenevisit1 = 1
                            $ auroravisit1 = 1
                            $ bakeryvisit1 = 1
                            $ bakeryvisit2 = 1
                            $ bakeryvisits = 2
                            $ maiddressbought = 1
                            $ auroravisitsetup = 1
                            $ cityfirstvisit = 1
                            jump daywagonmenu
                        "Нет":
                            jump daywagonmenu
                elif password == ("ibeat0.8"):
                    "Этот чит завершит все руты и пропустит вторжение Морриган. Вы получите 1500 монет и проснётесь на 22 день."
                    menu:
                        "Вы уверены?"
                        "Да":
                            $ monies = 1500
                            $ days = 22
                            $ boutiquevisits = 4
                            $ boutiquevisit1 = 1
                            $ boutiquevisit2 = 1
                            $ boutiquevisit3 = 1
                            $ farmvisits = 4
                            $ farmvisit1 = 1
                            $ farmvisit2 = 1
                            $ farmvisit3 = 1
                            $ libraryvisits = 4
                            $ forestvisits = 4
                            $ forestvisit1 = 1
                            $ forestvisit2 = 1
                            $ forestvisit3 = 1
                            $ libraryvisit1 = 1
                            $ libraryvisit2 = 1
                            $ libraryvisit3 = 1
                            $ barvisits = 3
                            $ barvisit1 = 1
                            $ barvisit2 = 1
                            $ selenevisit1 = 1
                            $ auroravisit1 = 1
                            $ bakeryvisit1 = 1
                            $ bakeryvisit2 = 1
                            $ bakeryvisits = 2
                            $ maiddressbought = 1
                            $ auroravisitsetup = 1
                            $ cityfirstvisit = 1
                            $ fr = 1
                            jump daywagonmenu
                        "Нет":
                            jump daywagonmenu

                else:
                    "Неверный код"
                jump daywagonmenu



#После адаптации код выглядит так
#и выглядит как меню выбора

       "Выберите чит":
            menu:
                "200$ и 6-ой день":
                    menu:
                        "Этот чит даст 200 монет и вы проснётесь на 6 день. Он автоматически завершит руты бутика и фермы."
                        "Вы уверены?"
                        "Да":
                            "Выполнено"
                            $ monies = 200
                            $ days = 6
                            $ boutiquevisits = 4
                            $ boutiquevisit1 = 1
                            $ boutiquevisit2 = 1
                            $ boutiquevisit3 = 1
                            $ farmvisits = 4
                            $ farmvisit1 = 1
                            $ farmvisit2 = 1
                            $ farmvisit3 = 1
                            jump daywagonmenu
                        "Нет":
                            jump daywagonmenu
                        
                
                        
                "9999$... Просто 9999$ ни больше ни меньше!":
                    menu:
                        "Этот чит даст вам 9999 монет, которых хватит на всё в игре, буквально на ВСЁ."
                        "Вы уверены?"
                        "Да":
                            "Выполнено"
                            $ monies = 9999
                            jump daywagonmenu
                        "Нет":
                            jump daywagonmenu
                        
                "360$ и 12-ый день":
                    menu:
                        "Этот чит завершит руты Леса, Библиотеки, Бутика и Фермы. Вы получите 360 монет и проснётесь на 12 дне."
                        "Вы уверены?"
                        "Да":
                            $ monies = 360
                            $ days = 12
                            $ boutiquevisits = 4
                            $ boutiquevisit1 = 1
                            $ boutiquevisit2 = 1
                            $ boutiquevisit3 = 1
                            $ farmvisits = 4
                            $ farmvisit1 = 1
                            $ farmvisit2 = 1
                            $ farmvisit3 = 1
                            $ libraryvisits = 4
                            $ forestvisits = 4
                            $ forestvisit1 = 1
                            $ forestvisit2 = 1
                            $ forestvisit3 = 1
                            $ libraryvisit1 = 1
                            $ libraryvisit2 = 1
                            $ libraryvisit3 = 1
                            jump daywagonmenu
                        "Нет":
                            jump daywagonmenu
                    
                        
                "450$ и 15-ый день":
                    menu:
                        "Этот чит завершит руты Селены, Бара, Леса, Библиотеки, Бутика и Фермы. Вы получите 450 монет и проснётесь на 15 день."
                        "Вы уверены?"
                        "Да":
                            $ monies = 450
                            $ days = 15
                            $ boutiquevisits = 4
                            $ boutiquevisit1 = 1
                            $ boutiquevisit2 = 1
                            $ boutiquevisit3 = 1
                            $ farmvisits = 4
                            $ farmvisit1 = 1
                            $ farmvisit2 = 1
                            $ farmvisit3 = 1
                            $ libraryvisits = 4
                            $ forestvisits = 4
                            $ forestvisit1 = 1
                            $ forestvisit2 = 1
                            $ forestvisit3 = 1
                            $ libraryvisit1 = 1
                            $ libraryvisit2 = 1
                            $ libraryvisit3 = 1
                            $ barvisits = 3
                            $ barvisit1 = 1
                            $ barvisit2 = 1
                            $ selenevisit1 = 1
                            $ maiddressbought = 1
                            jump daywagonmenu
                        "Нет":
                            jump daywagonmenu
                    
                        
                "Сменить имя":
                    "Как Вас зовут?"
                    python:
                        input_header = 'Введите имя:'
                    call inputter
                    python:
                        playername = input_text or "Аноним"
                        playername = playername.strip()
                    jump daywagonmenu
                "550$ и 21-ый день":
                    menu:
                        "Этот чит завершит все основные руты главного героя. Вы получите 550 монет и проснётесь на 21 день."
                        "Вы уверены?"
                        "Да":
                            $ monies = 550
                            $ days = 21
                            $ boutiquevisits = 4
                            $ boutiquevisit1 = 1
                            $ boutiquevisit2 = 1
                            $ boutiquevisit3 = 1
                            $ farmvisits = 4
                            $ farmvisit1 = 1
                            $ farmvisit2 = 1
                            $ farmvisit3 = 1
                            $ libraryvisits = 4
                            $ forestvisits = 4
                            $ forestvisit1 = 1
                            $ forestvisit2 = 1
                            $ forestvisit3 = 1
                            $ libraryvisit1 = 1
                            $ libraryvisit2 = 1
                            $ libraryvisit3 = 1
                            $ barvisits = 3
                            $ barvisit1 = 1
                            $ barvisit2 = 1
                            $ selenevisit1 = 1
                            $ auroravisit1 = 1
                            $ bakeryvisit1 = 1
                            $ bakeryvisit2 = 1
                            $ bakeryvisits = 2
                            $ maiddressbought = 1
                            $ auroravisitsetup = 1
                            $ cityfirstvisit = 1
                            jump daywagonmenu
                        "Нет":
                            jump daywagonmenu
                        
                "1500$ и 22-ой день":
                    menu:
                        "Этот чит завершит все руты и пропустит вторжение Морриган. Вы получите 1500 монет и проснётесь на 22 день."
                        "Вы уверены?"
                        "Да":
                            $ monies = 1500
                            $ days = 22
                            $ boutiquevisits = 4
                            $ boutiquevisit1 = 1
                            $ boutiquevisit2 = 1
                            $ boutiquevisit3 = 1
                            $ farmvisits = 4
                            $ farmvisit1 = 1
                            $ farmvisit2 = 1
                            $ farmvisit3 = 1
                            $ libraryvisits = 4
                            $ forestvisits = 4
                            $ forestvisit1 = 1
                            $ forestvisit2 = 1
                            $ forestvisit3 = 1
                            $ libraryvisit1 = 1
                            $ libraryvisit2 = 1
                            $ libraryvisit3 = 1
                            $ barvisits = 3
                            $ barvisit1 = 1
                            $ barvisit2 = 1
                            $ selenevisit1 = 1
                            $ auroravisit1 = 1
                            $ bakeryvisit1 = 1
                            $ bakeryvisit2 = 1
                            $ bakeryvisits = 2
                            $ maiddressbought = 1
                            $ auroravisitsetup = 1
                            $ cityfirstvisit = 1
                            $ fr = 1
                            jump daywagonmenu
                        "Нет":
                            jump daywagonmenu
                    
                        
        "Выйти":
            if fr == 1:
                jump finalworldmap
            jump worldmap