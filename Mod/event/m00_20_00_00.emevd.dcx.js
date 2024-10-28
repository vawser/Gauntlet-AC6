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
    InitializeEvent(0, 2572, 0);
});

Event(2000, Default, function() {
    ForceAnimationPlayback(10000, 81300, true, false, false, Equal, 1);
    EndUnconditionally(EventEndType.Restart);
});

Event(2571, Default, function() {
    PlayCutsceneToAll(2020, 19);
});


