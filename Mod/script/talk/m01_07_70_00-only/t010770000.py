# -*- coding: utf-8 -*-

#-------------------------------
# Start
#-------------------------------
def t010770000_0():
    # Player is dead
    if IsPlayerDead() == 1:
        # Wait 5 seconds
        assert GetCurrentStateElapsedTime() > 5
        
        EndMission(0, 0, 0)
        
        c1_119(10)
        Quit()
    # Termine Program menu option
    elif GetEventFlag(4591) == 1:
        SetEventFlag(4591, 0)
        EndMission(0, 0, 0)
        
        c1_119(10)
        Quit()
        
