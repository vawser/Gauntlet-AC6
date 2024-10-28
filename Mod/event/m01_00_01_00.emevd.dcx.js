// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    "W:\\FNR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

Event(0, Default, function() {
    InitializeEvent(0, 9900, 0);
    InitializeEvent(0, 1002, 0);
    InitializeEvent(0, 1001, 0);
});

Event(1002, Default, function() {
    IfElapsedSeconds(MAIN, 10);
    SetNetworkconnectedEventFlag(83000020, 220, 83000021);
});

Event(1001, Default, function() {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 83000022, 1);
    SetSpEffect(83000020, 4810);
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, 83000022, 1);
    ClearSpEffect(83000020, 4810);
    EndUnconditionally(EventEndType.Restart);
});

Event(9900, Restart, function() {
    Unknown20204(1);
    Unknown20205(0, 12345);
});


