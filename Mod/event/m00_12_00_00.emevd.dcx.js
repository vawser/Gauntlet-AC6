// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    "W:\\FNR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

Event(0, Default, function() {
    InitializeEvent(0, 2000, 0);
    InitializeEvent(0, 2020, 0);
});

Event(2000, Default, function() {
    GotoIfEventFlag(Label.Label0, ON, TargetEventFlagType.EventFlag, 5062);
    ForceAnimationPlayback(10000, 81300, true, false, false, Equal, 1);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    EndUnconditionally(EventEndType.End);
});

Event(2020, Default, function(X0_4) {
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 8010);
    Unknown200705(0);
    Unknown200705(1);
    Unknown200705(2);
    Unknown200705(3);
    Unknown20031031(1);
    Unknown20013(16777216, 1056964608, 0);
    Unknown20031033(120000, 0);
    IfElapsedSeconds(MAIN, 3);
    SetSpEffect(0, 0);
    PlayCutsceneToAll(302011, 3);
    IfElapsedFrames(MAIN, 1);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 5082);
    SetGarageCameraAnimation(120000);
    SetEventFlag(TargetEventFlagType.EventFlag, 8006, ON);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 8001);
    SetEventFlag(TargetEventFlagType.EventFlag, 5062, ON);
    PlayCutsceneToPlayerUnknown200209();
    SetEventFlag(TargetEventFlagType.EventFlag, 8006, OFF);
    PlayCutsceneToAll(100000, CutscenePlayMode.Unskippable);
    IfElapsedFrames(MAIN, 2);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 9999);
    Unknown20031031(0);
    Unknown20031033(10000000, X0_4);
});


