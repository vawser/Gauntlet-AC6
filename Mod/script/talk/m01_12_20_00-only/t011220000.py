# -*- coding: utf-8 -*-

#-------------------------------
# Menu
#-------------------------------
def t011220000_0():
    # Player Death
    if IsPlayerDead() == 1:
        # Wait 5 seconds
        assert GetCurrentStateElapsedTime() > 5
        
        EndMission(0, 0, 0)
        
        c1_119(10)
        Quit()
    # End Menu
    elif GetEventFlag(4591) == 1:
        SetEventFlag(4591, 0)
        EndMission(0, 0, 0)
        
        c1_119(10)
        Quit()
        
