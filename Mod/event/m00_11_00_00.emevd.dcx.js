// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    "W:\\FNR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

Event(2000, Default, function() {
    GotoIfEventFlag(Label.Label0, ON, TargetEventFlagType.EventFlag, 5062);
    ForceAnimationPlayback(10000, 81300, true, false, false, Equal, 1);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    EndUnconditionally(EventEndType.End);
});

Event(2020, Default, function() {
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 8010);
    Unknown200705(0);
    Unknown200705(1);
    Unknown200705(2);
    Unknown200705(3);
    Unknown20031031(1);
    Unknown20013(16777216, 1056964608, 0);
    Unknown20031033(110000, 110000);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 113000, 1);
    IfElapsedSeconds(MAIN, 3);
    SetSpEffect(0, 0);
    PlayCutsceneToAll(302010, 3);
    IfElapsedFrames(MAIN, 1);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 5081);
    SetGarageCameraAnimation(110000);
    SetEventFlag(TargetEventFlagType.EventFlag, 8007, ON);
    IfEventFlag(MAIN, OFF, TargetEventFlagType.EventFlag, 8003);
    SetEventFlag(TargetEventFlagType.EventFlag, 5062, ON);
    PlayCutsceneToPlayerUnknown200209();
    SetEventFlag(TargetEventFlagType.EventFlag, 8007, OFF);
    PlayCutsceneToAll(102010, CutscenePlayMode.Unskippable);
    IfElapsedFrames(MAIN, 2);
    Unknown20031031(0);
    Unknown20031033(50000000, 2101100910);
    SetEventFlag(TargetEventFlagType.EventFlag, 8005, ON);
    Unknown200208(200000, 32, 2101100910, 2101100910, 50000000, 2101100910);
});


