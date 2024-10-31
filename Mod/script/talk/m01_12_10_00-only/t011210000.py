# -*- coding: utf-8 -*-
def t011210000_0():
    """State 0,1"""
    t011210000_x12(z1=0, z2=0, z3=0, z4=0, val1=3)
    Quit()

def t011210000_7001():
    """State 0,2"""
    ScheduleEmevdEvent(0, 2001)
    ScheduleEmevdEvent(0, 2044)
    """State 1"""
    c1_119(0)
    Quit()

def t011210000_7002():
    """State 0,6,7,2"""
    RunMachine(7300)
    ScheduleEmevdEvent(0, 2200)
    ScheduleEmevdEvent(0, 2201)
    ScheduleEmevdEvent(0, 2202)
    ScheduleEmevdEvent(0, 2203)
    ScheduleEmevdEvent(0, 2050)
    ScheduleEmevdEvent(0, 2051)
    ScheduleEmevdEvent(0, 2052)
    ScheduleEmevdEvent(0, 2053)
    ScheduleEmevdEvent(0, 2003)
    ScheduleEmevdEvent(0, 2000)
    ScheduleEmevdEvent(0, 2204)
    ScheduleEmevdEvent(0, 2205)
    """State 12"""
    call = t011210000_x19()
    if call.Done():
        """State 11"""
        assert GetCurrentStateElapsedFrames() > 2
        """State 13"""
        call = t011210000_x20()
        if call.Done():
            """State 8"""
            ScheduleEmevdEvent(0, 2090)
        elif IsPlayerDead() == 1:
            """State 5"""
            Label('L0')
            ScheduleEmevdEvent(0, 2091)
    elif IsPlayerDead() == 1:
        Goto('L0')
    """State 3"""
    if DoesPlayerHaveSpEffect(9999) == 1:
        """State 9,1"""
        c1_119(10)
        Quit()
    elif DoesPlayerHaveSpEffect(9998) == 1:
        """State 10,4"""
        c1_119(11)
        Quit()

def t011210000_7003():
    """State 0,2,1"""
    c1_119(0)
    Quit()

def t011210000_7005():
    """State 0,1,2"""
    c1_119(0)
    Quit()

def t011210000_7015():
    """State 0,1,2"""
    c1_119(0)
    Quit()

def t011210000_7020():
    """State 0"""
    assert GetCurrentStateElapsedTime() > 3
    """State 1"""
    c1_119(0)
    ScheduleEmevdEvent(0, 2650)
    Quit()

def t011210000_7021():
    """State 0,1"""
    assert GetCurrentStateElapsedTime() > 5
    """State 2"""
    c1_119(0)
    ScheduleEmevdEvent(0, 2650)
    Quit()

def t011210000_7200():
    """State 0,1"""
    FadeBGM(40300)
    """State 2"""
    KillMachine(7200)
    Quit()

def t011210000_7300():
    """State 0"""
    assert GetRelativeEventFlag(2500 + 0) == 1
    """State 1"""
    ScheduleEmevdEvent(0, 2020)
    assert GetRelativeEventFlag(2501 + 0) == 1
    """State 2"""
    ScheduleEmevdEvent(0, 2021)
    assert GetRelativeEventFlag(2502 + 0) == 1
    """State 3"""
    ScheduleEmevdEvent(0, 2022)
    """State 4"""
    Quit()

def t011210000_x0(z5=_, mode1=0, val2=_, val3=_, mode2=0):
    """State 0,4"""
    if DoesMachineExist(z5) == 1:
        """State 2"""
        assert GetCurrentStateElapsedFrames() > 1
        """State 1"""
        def WhilePaused():
            c1_118(z5)
        assert (UnknownCondition_202() == mode1 or UnknownCondition_202() == val2 or UnknownCondition_202()
                == mode1 or UnknownCondition_202() == val3 or UnknownCondition_202() == mode2)
        """State 5"""
        return 0
    else:
        """State 3,6"""
        return 1

def t011210000_x1():
    """State 0,4"""
    ScheduleCommonEmevdEvent(0, 5820)
    if UnknownCondition_328() == 1:
        """State 5"""
        ScheduleCommonEmevdEvent(0, 5300)
        ScheduleCommonEmevdEvent(0, 5305)
        RunMachine(7200)
        ScheduleCommonEmevdEvent(0, 5307)
        ScheduleCommonEmevdEvent(0, 5308)
    else:
        """State 1"""
        ScheduleCommonEmevdEvent(0, 5300)
        ScheduleCommonEmevdEvent(0, 5305)
        RunMachine(7200)
        ScheduleCommonEmevdEvent(0, 5306)
        ScheduleCommonEmevdEvent(0, 5308)
    """State 6"""
    Label('L0')
    return 0
    """Unused"""
    """State 2"""
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 2)
    assert GetCurrentStateElapsedTime() > 1
    """State 3"""
    ShowGrandioseTextPresentation(10000032)
    Goto('L0')

def t011210000_x2():
    """State 0,4,6"""
    call = t011210000_x3()
    if call.Get() == 1:
        """State 1,3"""
        ScheduleCommonEmevdEvent(0, 5402)
        """State 8"""
        return 1
    elif call.Get() == 0:
        """State 2,5"""
        ScheduleCommonEmevdEvent(0, 5402)
        """State 7"""
        return 0

def t011210000_x3():
    """State 0,1,2"""
    call = t011210000_x0(z5=7002, mode1=0, val2=10, val3=11, mode2=0)
    if call.Done() and UnknownCondition_202() == 10:
        """State 3"""
        Label('L0')
        return 0
    elif call.Done() and UnknownCondition_202() == 11:
        """State 4"""
        Label('L1')
        return 1
    elif (IsPlayerDead() == 1 or IsStateInfoPresentOnPlayer(116) == 1) and not GetEventFlag(8019):
        Goto('L1')
    elif GetEventFlag(5051) == 1:
        Goto('L0')

def t011210000_x4(z1=0, z3=0, val1=3):
    """State 0,1,35"""
    call = t011210000_x0(z5=7005, mode1=0, val2=0, val3=0, mode2=0)
    if call.Done() and (GetRelativeEventFlag(5360 + 1) == 1 and UnknownCondition_333() == 1):
        pass
    elif call.Done() and (GetRelativeEventFlag(5360 + 0) == 1 and UnknownCondition_333() == 1):
        Goto('L0')
    elif call.Done() and GetRelativeEventFlag(5360 + 0) == 1:
        Goto('L1')
    elif call.Done() and GetRelativeEventFlag(5370 + 0) == 1:
        Goto('L2')
    elif call.Done():
        Goto('L3')
    """State 22"""
    ScheduleCommonEmevdEvent(2, 5350)
    ScheduleCommonEmevdEvent(1, 5355)
    ScheduleCommonEmevdEvent(0, 5405)
    SetMissionState(-1, 1, 1)
    StopEventAnimWithoutForcingConversationEnd(0)
    ClearTalkProgressData()
    assert GetRelativeEventFlag(5350 + 2) == 1 or GetRelativeEventFlag(5355 + 1) == 1
    """State 30"""
    if GetRelativeEventFlag(5800 + 0) == 1:
        """State 31"""
        EndMission(0, z1, z3)
        FadeBGM(0)
    elif GetRelativeEventFlag(5810 + 0) == 1:
        """State 34"""
        EndMission(0, z1, z3)
    else:
        """State 24"""
        EndMission(0, z1, z3)
        FadeBGM(40030)
    """State 25"""
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2)
    """State 23"""
    UnknownCommand_219()
    """State 39"""
    return 3
    """State 18"""
    Label('L0')
    ScheduleCommonEmevdEvent(1, 5350)
    ScheduleCommonEmevdEvent(0, 5359)
    ScheduleCommonEmevdEvent(0, 5405)
    SetMissionState(-1, 1, 1)
    StopEventAnimWithoutForcingConversationEnd(0)
    ClearTalkProgressData()
    assert (GetRelativeEventFlag(5350 + 1) == 1 or GetRelativeEventFlag(5355 + 0) == 1 or GetRelativeEventFlag(5359
            + 0) == 1)
    """State 28"""
    if GetRelativeEventFlag(5800 + 0) == 1:
        """State 29"""
        EndMission(0, z1, z3)
        FadeBGM(0)
    elif GetRelativeEventFlag(5810 + 0) == 1:
        """State 33"""
        EndMission(0, z1, z3)
    else:
        """State 20"""
        EndMission(0, z1, z3)
        FadeBGM(40030)
    """State 21"""
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2)
    """State 19"""
    UnknownCommand_219()
    """State 38"""
    return 2
    """State 7"""
    Label('L1')
    ScheduleCommonEmevdEvent(0, 5350)
    ScheduleCommonEmevdEvent(0, 5405)
    SetMissionState(-1, 1, 1)
    StopEventAnimWithoutForcingConversationEnd(0)
    ClearTalkProgressData()
    assert GetRelativeEventFlag(5350 + 0) == 1
    """State 26"""
    if GetRelativeEventFlag(5800 + 0) == 1:
        """State 27"""
        EndMission(0, z1, z3)
        FadeBGM(0)
    elif GetRelativeEventFlag(5810 + 0) == 1:
        """State 32"""
        EndMission(0, z1, z3)
    else:
        """State 9"""
        EndMission(0, z1, z3)
        FadeBGM(40030)
    """State 11"""
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2)
    """State 8"""
    UnknownCommand_219()
    """State 37"""
    return 1
    """State 17"""
    Label('L2')
    ScheduleCommonEmevdEvent(0, 5424)
    assert GetCurrentStateElapsedTime() > val1
    """State 14"""
    StopEventAnimWithoutForcingConversationEnd(0)
    ClearTalkProgressData()
    assert GetRelativeEventFlag(5424 + 0) == 1
    """State 12"""
    ScheduleCommonEmevdEvent(0, 5405)
    SetMissionState(-1, 1, 1)
    EndMission(0, z1, z3)
    assert GetRelativeEventFlag(5424 + 0) == 1 and GetCurrentStateElapsedFrames() > 1
    """State 15"""
    ScheduleCommonEmevdEvent(0, 5470)
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2)
    assert GetRelativeEventFlag(5470 + 0) == 1 and GetCurrentStateElapsedFrames() > 1
    """State 13"""
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2)
    """State 16"""
    UnknownCommand_219()
    Quit()
    """State 10"""
    Label('L3')
    ScheduleCommonEmevdEvent(0, 5424)
    assert GetCurrentStateElapsedTime() > 3
    """State 4"""
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 2, val1, 2)
    StopEventAnimWithoutForcingConversationEnd(0)
    ClearTalkProgressData()
    assert GetCurrentStateElapsedTime() > val1 and GetRelativeEventFlag(5424 + 0) == 1
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5405)
    SetMissionState(-1, 1, 1)
    EndMission(0, z1, z3)
    assert GetRelativeEventFlag(5424 + 0) == 1 and GetCurrentStateElapsedFrames() > 1
    """State 5"""
    ScheduleCommonEmevdEvent(0, 5470)
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2)
    assert GetRelativeEventFlag(5470 + 0) == 1 and GetCurrentStateElapsedFrames() > 1
    """State 3"""
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2)
    """State 6"""
    UnknownCommand_219()
    """State 36"""
    return 0

def t011210000_x5():
    """State 0,6,5"""
    ScheduleCommonEmevdEvent(0, 5481)
    assert GetCurrentStateElapsedFrames() > 2
    """State 1,3,7"""
    if GetEventFlag(8010) == 1:
        """State 8"""
        FadeBGM(40030)
        SetEventFlag(8010, 0)
    elif GetEventFlag(5074) == 1 or GetRelativeEventFlag(5360 + 0) == 1:
        """State 9"""
        pass
    elif GetRelativeEventFlag(5800 + 0) == 1:
        """State 10"""
        FadeBGM(0)
    elif GetRelativeEventFlag(5810 + 0) == 1:
        """State 11"""
        pass
    else:
        """State 4"""
        FadeBGM(40030)
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5403)
    SetEventFlag(5074, 1)
    """State 12"""
    return 0

def t011210000_x6():
    """State 0,1,3,4"""
    FadeBGM(0)
    """State 2,5"""
    return 0

def t011210000_x7():
    """State 0,1,3"""
    assert t011210000_x0(z5=7014, mode1=0, val2=0, val3=0, mode2=0)
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5414)
    """State 4"""
    return 0

def t011210000_x8(z2=0, z4=0):
    """State 0,1,19"""
    call = t011210000_x0(z5=7015, mode1=0, val2=0, val3=0, mode2=0)
    if call.Done() and GetRelativeEventFlag(5380 + 0) == 1:
        """State 9"""
        ScheduleCommonEmevdEvent(0, 5427)
        assert GetRelativeEventFlag(5427 + 0) == 1 and GetCurrentStateElapsedFrames() > 3
        """State 8"""
        c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2)
        StopEventAnimWithoutForcingConversationEnd(0)
        ClearTalkProgressData()
        assert GetCurrentStateElapsedTime() > 2
        """State 6"""
        ScheduleCommonEmevdEvent(0, 5415)
        SetMissionState(-1, 0, 1)
        assert GetRelativeEventFlag(5427 + 0) == 1
        """State 7"""
        EndMission(1, z2, z4)
    elif call.Done() and (GetRelativeEventFlag(5385 + 0) == 1 and not UnknownCondition_328()):
        """State 13"""
        ScheduleCommonEmevdEvent(0, 5425)
        assert GetRelativeEventFlag(5425 + 0) == 1 and GetCurrentStateElapsedFrames() > 3
        """State 15"""
        if True:
            """State 14"""
            PlayTutorial(2106000)
        elif True:
            """State 17"""
            PlayTutorial(2106000)
        else:
            """State 18"""
            PlayTutorial(2106000)
        """State 16"""
        assert GetRelativeEventFlag(5425 + 0) == 1
        """State 12"""
        c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2)
        StopEventAnimWithoutForcingConversationEnd(0)
        ClearTalkProgressData()
        assert GetCurrentStateElapsedTime() > 2
        """State 10"""
        ScheduleCommonEmevdEvent(0, 5415)
        SetMissionState(-1, 0, 1)
        assert GetRelativeEventFlag(5425 + 0) == 1
        """State 11"""
        EndMission(1, z2, z4)
    elif call.Done():
        """State 5"""
        ScheduleCommonEmevdEvent(0, 5425)
        assert GetRelativeEventFlag(5425 + 0) == 1 and GetCurrentStateElapsedFrames() > 3
        """State 4"""
        c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2)
        StopEventAnimWithoutForcingConversationEnd(0)
        ClearTalkProgressData()
        assert GetCurrentStateElapsedTime() > 2
        """State 2"""
        ScheduleCommonEmevdEvent(0, 5415)
        SetMissionState(-1, 0, 1)
        assert GetRelativeEventFlag(5425 + 0) == 1
        """State 3"""
        EndMission(1, z2, z4)
    """State 20"""
    return 0

def t011210000_x9():
    """State 0,1,3"""
    assert t011210000_x0(z5=7004, mode1=0, val2=0, val3=0, mode2=0)
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5404)
    """State 4"""
    return 0

def t011210000_x10():
    """State 0,3"""
    ScheduleCommonEmevdEvent(0, 5490)
    """State 1"""
    if IsStateInfoPresentOnPlayer(116) == 1:
        """State 5"""
        assert t011210000_x0(z5=7022, mode1=0, val2=0, val3=0, mode2=0)
    else:
        """State 4"""
        assert t011210000_x0(z5=7020, mode1=0, val2=0, val3=0, mode2=0)
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5416)
    """State 6"""
    return 0

def t011210000_x11():
    """State 0,1,3"""
    assert t011210000_x0(z5=7021, mode1=0, val2=0, val3=0, mode2=0)
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5406)
    """State 4"""
    return 0

def t011210000_x12(z1=0, z2=0, z3=0, z4=0, val1=3):
    """State 0,10"""
    assert t011210000_x13()
    """State 11"""
    UnknownCommand_218()
    UnknownCommand_240(0)
    UnknownCommand_256(1)
    call = t011210000_x14()
    def ExitPause():
        KillMachine(7101)
    if call.Get() == 0:
        """State 13"""
        assert t011210000_x18()
        """State 14"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        UnknownCommand_256(1)
        def WhilePaused():
            ClearTalkProgressData()
            StopEventAnimWithoutForcingConversationEnd(0)
            UnknownCommand_256(1)
        def ExitPause():
            ClearTalkProgressData()
            StopEventAnimWithoutForcingConversationEnd(0)
            UnknownCommand_256(1)
        assert t011210000_x15(z1=z1, z3=z3, val1=val1)
    elif call.Get() == 1:
        """State 12"""
        assert t011210000_x17()
        """State 15"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        UnknownCommand_256(1)
        def WhilePaused():
            ClearTalkProgressData()
            StopEventAnimWithoutForcingConversationEnd(0)
            UnknownCommand_256(1)
        def ExitPause():
            ClearTalkProgressData()
            StopEventAnimWithoutForcingConversationEnd(0)
            UnknownCommand_256(1)
        assert t011210000_x16(z2=z2, z4=z4)
    """State 16"""
    return 0
    """Unused"""
    """State 1"""
    UnknownCommand_218()
    GiveSpEffectToPlayer(500000005)
    call = t011210000_x2()
    if call.Get() == 0:
        Goto('L5')
    elif call.Get() == 1:
        Goto('L4')
    """State 2"""
    Label('L0')
    t011210000_x4(z1=z1, z3=z3, val1=val1)
    Quit()
    """State 3"""
    Label('L1')
    assert t011210000_x5()
    Goto('L3')
    """State 4"""
    Label('L2')
    assert t011210000_x6()
    """State 5"""
    assert t011210000_x7()
    """State 6"""
    t011210000_x8(z2=z2, z4=z4)
    Quit()
    """State 7"""
    Label('L3')
    assert t011210000_x9()
    Goto('L0')
    """State 8"""
    Label('L4')
    assert t011210000_x10()
    Goto('L2')
    """State 9"""
    Label('L5')
    assert t011210000_x11()
    Goto('L1')

def t011210000_x13():
    """State 0,1"""
    FadeBGM(40300)
    if not GetRelativeEventFlag(5401 + 0):
        """State 4"""
        assert t011210000_x1()
        """State 5"""
        call = t011210000_x0(z5=7001, mode1=0, val2=0, val3=0, mode2=0)
        if call.Get() == 1:
            """State 3"""
            Quit()
        elif (call.Done() and ((GetRelativeEventFlag(5300 + 0) == 1 or GetRelativeEventFlag(5305 + 0)
              == 1 or GetRelativeEventFlag(5306 + 0) == 1 or GetRelativeEventFlag(5307 + 0) == 1 or GetRelativeEventFlag(5308
              + 0) == 1) and GetCurrentStateElapsedFrames() > 1)):
            pass
    else:
        pass
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5401)
    """State 6"""
    return 0

def t011210000_x14():
    """State 0,4,6"""
    call = t011210000_x3()
    if call.Get() == 1:
        """State 1,3"""
        ScheduleCommonEmevdEvent(0, 5402)
        """State 8"""
        return 1
    elif call.Get() == 0:
        """State 2,5"""
        ScheduleCommonEmevdEvent(0, 5402)
        """State 7"""
        return 0

def t011210000_x15(z1=0, z3=0, val1=3):
    """State 0,1,8"""
    assert t011210000_x0(z5=7005, mode1=0, val2=0, val3=0, mode2=0) and GetCurrentStateElapsedFrames() > 1
    """State 4"""
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 1, val1, 2)
    StopEventAnimWithoutForcingConversationEnd(0)
    ClearTalkProgressData()
    EndTextEffect(0)
    EndTextEffect(1)
    EndTextEffect(2)
    EndTextEffect(3)
    EndTextEffect(4)
    assert GetCurrentStateElapsedFrames() > 1
    """State 7"""
    ShowGrandioseTextPresentation(21)
    assert GetCurrentStateElapsedTime() > val1
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5405)
    SetMissionState(-1, 1, 1)
    assert GetCurrentStateElapsedFrames() > 1
    """State 5"""
    FadeBGM(0)
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2)
    assert GetCurrentStateElapsedFrames() > 1
    """State 3"""
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2)
    ScheduleCommonEmevdEvent(0, 5610)
    """State 6,9"""
    return 0

def t011210000_x16(z2=0, z4=0):
    """State 0,1,6"""
    assert t011210000_x0(z5=7015, mode1=0, val2=0, val3=0, mode2=0) and GetCurrentStateElapsedFrames() > 1
    """State 4"""
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2)
    StopEventAnimWithoutForcingConversationEnd(0)
    ClearTalkProgressData()
    EndTextEffect(0)
    EndTextEffect(1)
    EndTextEffect(2)
    EndTextEffect(3)
    EndTextEffect(4)
    assert GetCurrentStateElapsedFrames() > 1
    """State 5"""
    ShowGrandioseTextPresentation(22)
    assert GetCurrentStateElapsedTime() > 3
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5415)
    SetMissionState(-1, 0, 1)
    assert GetCurrentStateElapsedFrames() > 1
    """State 3"""
    EndMission(1, z2, z4)
    """State 7"""
    return 0

def t011210000_x17():
    """State 0,3"""
    StopEventAnimWithoutForcingConversationEnd(0)
    ClearTalkProgressData()
    EndTextEffect(0)
    EndTextEffect(1)
    EndTextEffect(2)
    EndTextEffect(3)
    ScheduleCommonEmevdEvent(0, 5490)
    """State 1"""
    if IsStateInfoPresentOnPlayer(116) == 1:
        """State 5"""
        assert t011210000_x0(z5=7022, mode1=0, val2=0, val3=0, mode2=0)
    else:
        """State 4"""
        assert t011210000_x0(z5=7020, mode1=0, val2=0, val3=0, mode2=0)
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5416)
    """State 6"""
    return 0

def t011210000_x18():
    """State 0,1,5"""
    assert t011210000_x0(z5=7021, mode1=0, val2=0, val3=0, mode2=0)
    """State 2"""
    ScheduleCommonEmevdEvent(0, 5406)
    """State 6"""
    return 0
    """Unused"""
    """State 3"""
    Label('L0')
    c1_117(0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2)
    Quit()
    """State 4"""
    ShowGrandioseTextPresentation(10000033)
    Goto('L0')

def t011210000_x19():
    """State 0,1"""
    PlayTutorial(1505000)
    ScheduleEmevdEvent(0, 2060)
    assert GetCurrentStateElapsedFrames() > 5
    """State 8"""
    ShowGrandioseTextPresentation(20)
    GiveSpEffectToPlayer(500000005)
    assert GetCurrentStateElapsedTime() > 0.9
    """State 2"""
    PlayTutorial(1505011)
    ScheduleEmevdEvent(0, 2030)
    if GetRelativeEventFlag(2200 + 0) == 1:
        """State 5"""
        assert GetCurrentStateElapsedFrames() > 1 and GetCurrentStateElapsedTime() > 1
        """State 6"""
        assert GetRelativeEventFlag(2050 + 0) == 1
    elif GetRelativeEventFlag(2050 + 0) == 1:
        pass
    """State 3"""
    EndTutorial(1505000, 1)
    EndTutorial(1505011, 1)
    ScheduleEmevdEvent(0, 2046)
    PlayTutorial(1505002)
    assert GetCurrentStateElapsedTime() > 1 and GetCurrentStateElapsedFrames() > 1
    """State 4"""
    ScheduleEmevdEvent(0, 2500)
    EndTutorial(1505002, 1)
    assert GetCurrentStateElapsedFrames() > 1 and GetCurrentStateElapsedTime() > 1
    """State 7"""
    PlayTutorial(1505001)
    """State 9"""
    return 0

def t011210000_x20():
    """State 0,2"""
    ScheduleEmevdEvent(0, 2031)
    ScheduleEmevdEvent(0, 2310)
    assert GetRelativeEventFlag(2051 + 0) == 1
    """State 1"""
    EndTutorial(1505002, 1)
    EndTutorial(1505001, 1)
    ScheduleEmevdEvent(0, 2501)
    """State 3"""
    return 0

