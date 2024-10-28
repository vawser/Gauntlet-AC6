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
    InitializeEvent(0, 2010, 0);
    InitializeEventEsd(0, 2200, 0);
    InitializeEventEsd(0, 2210, 0);
    InitializeEventEsd(0, 2220, 0);
    InitializeEventEsd(0, 2300, 0);
    InitializeEventEsd(0, 2310, 0);
    InitializeEventEsd(0, 2320, 0);
    InitializeEventEsd(0, 2330, 0);
    InitializeEventEsd(0, 2400, 0);
    InitializeEventEsd(0, 2410, 0);
    InitializeEventEsd(0, 2420, 0);
    InitializeEventEsd(0, 2430, 0);
    InitializeEventEsd(0, 2440, 0);
    InitializeEventEsd(0, 2450, 0);
    InitializeEventEsd(0, 2460, 0);
    InitializeEventEsd(0, 2461, 0);
    InitializeEventEsd(0, 2470, 0);
    InitializeEventEsd(0, 2411, 0);
    InitializeEventEsd(0, 2421, 0);
    InitializeEventEsd(0, 2431, 0);
    InitializeEventEsd(0, 2441, 0);
    InitializeEventEsd(0, 2451, 0);
    InitializeEventEsd(0, 2471, 0);
    InitializeEventEsd(0, 2480, 0);
    InitializeEventEsd(0, 2481, 0);
    InitializeEventEsd(0, 2499, 0);
    InitializeEventEsd(0, 2510, 0);
    InitializeEventEsd(0, 2511, 0);
    InitializeEventEsd(0, 2512, 0);
    InitializeEventEsd(0, 2513, 0);
    InitializeEventEsd(0, 2514, 0);
    InitializeEventEsd(0, 2515, 0);
    InitializeEventEsd(0, 2520, 0);
    InitializeEventEsd(0, 2521, 0);
    InitializeEventEsd(0, 2522, 0);
    InitializeEventEsd(0, 2523, 0);
    InitializeEventEsd(0, 2524, 0);
    InitializeEventEsd(0, 2525, 0);
    InitializeEventEsd(0, 2530, 0);
    InitializeEventEsd(0, 2531, 0);
    InitializeEventEsd(0, 2532, 0);
    InitializeEventEsd(0, 2533, 0);
    InitializeEventEsd(0, 2534, 0);
    InitializeEventEsd(0, 2535, 0);
    InitializeEventEsd(0, 2540, 0);
    InitializeEventEsd(0, 2541, 0);
    InitializeEventEsd(0, 2542, 0);
    InitializeEventEsd(0, 2543, 0);
    InitializeEventEsd(0, 2544, 0);
    InitializeEventEsd(0, 2545, 0);
    InitializeEvent(0, 2550, 0);
    InitializeEvent(0, 2553, 0);
    InitializeEvent(0, 2554, 0);
    InitializeEvent(0, 2555, 0);
    InitializeEventEsd(0, 2556, 0);
    InitializeEventEsd(0, 2560, 0);
    InitializeEventEsd(0, 2561, 0);
    InitializeEventEsd(0, 2562, 0);
    InitializeEventEsd(0, 2565, 0);
    InitializeEventEsd(0, 2566, 0);
    InitializeEventEsd(0, 2570, 0);
    InitializeEventEsd(0, 2571, 0);
    InitializeEventEsd(0, 2572, 0);
    InitializeEventEsd(0, 2574, 0);
    InitializeEventEsd(0, 2575, 0);
    InitializeEventEsd(0, 2600, 0);
    InitializeEventEsd(0, 2601, 0);
    InitializeEventEsd(0, 2610, 0);
    InitializeEventEsd(0, 2611, 0);
    InitializeEventEsd(0, 2612, 0);
    InitializeEventEsd(0, 2613, 0);
    InitializeEventEsd(0, 2614, 0);
    InitializeEventEsd(0, 2615, 0);
    InitializeEventEsd(0, 3310, 0);
    InitializeEventEsd(0, 3410, 0);
    InitializeEventEsd(0, 3411, 0);
    InitializeEventEsd(0, 3412, 0);
    InitializeEventEsd(0, 3413, 0);
    InitializeEventEsd(0, 3414, 0);
    InitializeEventEsd(0, 3415, 0);
    InitializeEventEsd(0, 3460, 0);
    InitializeEventEsd(0, 3510, 0);
    InitializeEventEsd(0, 3511, 0);
    InitializeEventEsd(0, 3512, 0);
    InitializeEventEsd(0, 3513, 0);
    InitializeEventEsd(0, 3560, 0);
    InitializeEventEsd(0, 3561, 0);
    InitializeEventEsd(0, 3562, 0);
    InitializeEventEsd(0, 3563, 0);
    InitializeEventEsd(0, 3567, 0);
    InitializeEventEsd(0, 3570, 0);
    InitializeEventEsd(0, 3571, 0);
    InitializeEventEsd(0, 3572, 0);
    InitializeEventEsd(0, 3573, 0);
    InitializeEventEsd(0, 3577, 0);
    InitializeEventEsd(0, 3580, 0);
    InitializeEventEsd(0, 3581, 0);
    InitializeEventEsd(0, 3582, 0);
    InitializeEventEsd(0, 3583, 0);
    InitializeEventEsd(0, 3587, 0);
    InitializeEventEsd(0, 3600, 0);
    InitializeEvent(0, 3700, 0);
    InitializeEvent(0, 3701, 0);
    InitializeEvent(0, 3702, 0);
    InitializeEvent(0, 3703, 0);
    InitializeEvent(0, 3704, 0);
    InitializeEventEsd(0, 3705, 0);
    InitializeEventEsd(0, 3706, 0);
});

Event(2000, Default, function() {
    ForceAnimationPlayback(10000, 81310, true, false, false, Equal, 1);
    EndUnconditionally(EventEndType.Restart);
});

Event(2010, Default, function() {
    SetEventFlag(TargetEventFlagType.EventFlag, 5050, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 5051, OFF);
    Unknown20085(0);
    Unknown20041010(20000, 203, 0, 90);
});

Event(2200, Default, function() {
    ForceAnimationPlayback(10013, 1000100, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2210, Default, function() {
    ForceAnimationPlayback(10013, 1000101, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2220, Default, function() {
    ForceAnimationPlayback(10013, 1000102, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2300, Default, function() {
    ForceAnimationPlayback(200, 0, true, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2310, Default, function() {
    ForceAnimationPlayback(200, 1, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2320, Default, function() {
    ForceAnimationPlayback(200, 2, true, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2330, Default, function() {
    ForceAnimationPlayback(200, 3, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2400, Default, function() {
    ForceAnimationPlayback(201, 0, true, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2410, Default, function() {
    ForceAnimationPlayback(201, 1, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2411, Default, function() {
    ForceAnimationPlayback(201, 3000001, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2420, Default, function() {
    ForceAnimationPlayback(201, 2, true, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2421, Default, function() {
    ForceAnimationPlayback(201, 3000002, true, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2430, Default, function() {
    ForceAnimationPlayback(201, 10, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2431, Default, function() {
    ForceAnimationPlayback(201, 3000010, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2440, Default, function() {
    ForceAnimationPlayback(201, 11, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2441, Default, function() {
    ForceAnimationPlayback(201, 3000011, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2450, Default, function() {
    ForceAnimationPlayback(201, 12, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2451, Default, function() {
    ForceAnimationPlayback(201, 3000012, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2460, Default, function() {
    ForceAnimationPlayback(201, 13, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2461, Default, function() {
    ForceAnimationPlayback(201, 14, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2462, Default, function() {
    ForceAnimationPlayback(201, 10000013, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2463, Default, function() {
    ForceAnimationPlayback(201, 10000014, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2470, Default, function() {
    ForceAnimationPlayback(201, 16, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2471, Default, function() {
    ForceAnimationPlayback(201, 3000016, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2480, Default, function() {
    ForceAnimationPlayback(201, 1000010, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2481, Default, function() {
    ForceAnimationPlayback(201, 1000011, false, true, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2499, Default, function() {
    BatchSetNetworkconnectedEventFlags(2200, 2499, OFF);
});

Event(2510, Default, function() {
    ForceAnimationPlayback(10013, 900001002, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2511, Default, function() {
    ForceAnimationPlayback(10013, 900001000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900001001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2512, Default, function() {
    ForceAnimationPlayback(10013, 900001000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900002001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2513, Default, function() {
    ForceAnimationPlayback(10013, 900001000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900003001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2514, Default, function() {
    ForceAnimationPlayback(10013, 900001000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900004001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2515, Default, function() {
    ForceAnimationPlayback(10013, 900001003, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2520, Default, function() {
    ForceAnimationPlayback(10013, 900002002, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2521, Default, function() {
    ForceAnimationPlayback(10013, 900002000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900001001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2522, Default, function() {
    ForceAnimationPlayback(10013, 900002000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900002001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2523, Default, function() {
    ForceAnimationPlayback(10013, 900002000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900003001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2524, Default, function() {
    ForceAnimationPlayback(10013, 900002000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900004001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2525, Default, function() {
    ForceAnimationPlayback(10013, 900002003, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2530, Default, function() {
    ForceAnimationPlayback(10013, 900003002, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2531, Default, function() {
    ForceAnimationPlayback(10013, 900003000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900001001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2532, Default, function() {
    ForceAnimationPlayback(10013, 900003000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900002001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2533, Default, function() {
    ForceAnimationPlayback(10013, 900003000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900003001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2534, Default, function() {
    ForceAnimationPlayback(10013, 900003000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900004001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2535, Default, function() {
    ForceAnimationPlayback(10013, 900003003, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2540, Default, function() {
    ForceAnimationPlayback(10013, 900004002, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2541, Default, function() {
    ForceAnimationPlayback(10013, 900004000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900001001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2542, Default, function() {
    ForceAnimationPlayback(10013, 900004000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900002001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
    Unknown200010(0);
    Unknown200011(0);
    AwardAchievement(0);
});

Event(2543, Default, function() {
    ForceAnimationPlayback(10013, 900004000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900003001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2544, Default, function() {
    ForceAnimationPlayback(10013, 900004000, false, true, false, Equal, 1);
    ForceAnimationPlayback(10013, 900004001, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2545, Default, function() {
    ForceAnimationPlayback(10013, 900004003, false, false, false, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2550, Default, function() {
    Unknown20151(11, 1);
});

Event(2551, Default, function() {
    Unknown20151(12, 1);
});

Event(2552, Default, function() {
    Unknown20151(12, 1);
});

Event(2553, Default, function() {
    Unknown20151(14, 1);
});

Event(2554, Default, function() {
    Unknown20151(14, 1);
});

Event(2555, Default, function() {
    Unknown20151(13, 1);
});

Event(2556, Default, function() {
    Unknown20152(0);
});

Event(2560, Default, function() {
    ForceAnimationPlayback(202, 100000100, false, true, false, Equal, 1);
    ForceAnimationPlayback(202, 100000101, false, false, false, Equal, 1);
});

Event(2561, Default, function() {
    ForceAnimationPlayback(202, 100000101, false, false, false, Equal, 1);
});

Event(2562, Default, function() {
    ForceAnimationPlayback(202, 100000102, false, false, false, Equal, 1);
});

Event(2565, Default, function() {
    ForceAnimationPlayback(202, 1000100, false, false, false, Equal, 1);
});

Event(2566, Default, function() {
    ForceAnimationPlayback(202, 1000101, false, false, false, Equal, 1);
});

Event(2570, Default, function() {
    PlayCutsceneToAll(2020, 19);
});

Event(2571, Default, function() {
    PlayCutsceneToAll(2020, 19);
});

Event(2600, Default, function() {
    Unknown20085(9);
});

Event(2601, Default, function() {
    Unknown20085(4);
});

Event(2610, Default, function() {
    ForceAnimationPlayback(600, 10, false, true, false, Equal, 1);
});

Event(2611, Default, function() {
    ForceAnimationPlayback(600, 20, false, true, false, Equal, 1);
});

Event(2612, Default, function() {
    ForceAnimationPlayback(600, 30, true, false, false, Equal, 1);
});

Event(2613, Default, function() {
    ForceAnimationPlayback(600, 40, false, true, false, Equal, 1);
});

Event(2614, Default, function() {
    ChangeCharacterEnableState(600, Disabled);
    ChangeAssetEnableState(600, Disabled);
});

Event(2615, Default, function() {
    ChangeCharacterEnableState(600, Enabled);
    ChangeAssetEnableState(600, Enabled);
});

Event(2700, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    Unknown200362(X0_4, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X4_4);
    GotoIfEventFlag(Label.Label1, ON, TargetEventFlagType.EventFlag, X0_4);
    Unknown20031(10013, X8_4, 0, 1065353216);
    Unknown200362(X4_4, 0);
    SetEventState(2700, X12_4, EventEndType.Restart);
    SetEventState(2700, X16_4, EventEndType.Restart);
    SetEventState(2700, X20_4, EventEndType.Restart);
    EndUnconditionally(EventEndType.Restart);
    Label1();
    Unknown200362(X4_4, 0);
    EndUnconditionally(EventEndType.Restart);
});

Event(2750, Default, function(X0_4, X4_4, X8_4) {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    Unknown20031(10013, X4_4, 0, 1065353216);
    Unknown200362(X0_4, 0);
    Unknown200362(X8_4, 0);
    EndUnconditionally(EventEndType.Restart);
});

Event(2800, Default, function() {
    Unknown20031034(99999310);
});

Event(3310, Default, function() {
    SetSpEffect(0, 0);
});

Event(3410, Default, function() {
    SetSpEffect(0, 0);
});

Event(3411, Default, function() {
    SetSpEffect(0, 0);
});

Event(3412, Default, function() {
    SetSpEffect(0, 0);
});

Event(3413, Default, function() {
    SetSpEffect(0, 0);
});

Event(3414, Default, function() {
    SetSpEffect(0, 0);
});

Event(3415, Default, function() {
    SetSpEffect(0, 0);
});

Event(3460, Default, function() {
    SetSpEffect(0, 0);
});

Event(3510, Default, function() {
    SetSpEffect(0, 0);
});

Event(3511, Default, function() {
    SetSpEffect(0, 0);
});

Event(3512, Default, function() {
    SetSpEffect(0, 0);
});

Event(3513, Default, function() {
    SetSpEffect(0, 0);
});

Event(3560, Default, function() {
    SetSpEffect(0, 0);
});

Event(3561, Default, function() {
    SetSpEffect(0, 0);
});

Event(3562, Default, function() {
    SetSpEffect(0, 0);
});

Event(3563, Default, function() {
    SetSpEffect(0, 0);
});

Event(3567, Default, function() {
    BatchSetNetworkconnectedEventFlags(3560, 3563, OFF);
});

Event(3570, Default, function() {
    SetSpEffect(0, 0);
});

Event(3571, Default, function() {
    SetSpEffect(0, 0);
});

Event(3572, Default, function() {
    SetSpEffect(0, 0);
});

Event(3573, Default, function() {
    SetSpEffect(0, 0);
});

Event(3577, Default, function() {
    BatchSetNetworkconnectedEventFlags(3570, 3573, OFF);
});

Event(3580, Default, function() {
    SetSpEffect(0, 0);
});

Event(3581, Default, function() {
    SetSpEffect(0, 0);
});

Event(3582, Default, function() {
    SetSpEffect(0, 0);
});

Event(3583, Default, function() {
    SetSpEffect(0, 0);
});

Event(3587, Default, function() {
    BatchSetNetworkconnectedEventFlags(3580, 3583, OFF);
});

Event(3600, Default, function(X0_1) {
    IfCountEventFlags(MAIN, X0_1, 3500, 3510, GreaterOrEqual, 3);
    Unknown200362(3600, 1);
    EndUnconditionally(EventEndType.Restart);
});

Event(3700, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 3000);
    SetGarageCameraAnimation(100000100);
    FreezeTime(4, 2, 0, 0);
    ForceAnimationPlayback(1010001200, 400, false, false, false, Equal, 1);
    EndUnconditionally(EventEndType.End);
});

Event(3701, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 3002);
    SetGarageCameraAnimation(100000100);
    FreezeTime(true, 2, 0, 0);
    ForceAnimationPlayback(1010001200, 100, false, false, false, Equal, 1);
    EndUnconditionally(EventEndType.End);
});

Event(3702, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 3004);
    SetGarageCameraAnimation(100000200);
    FreezeTime(5, 2, 0, 0);
    ForceAnimationPlayback(1010001200, 500, false, false, false, Equal, 1);
    EndUnconditionally(EventEndType.End);
});

Event(3703, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 3006);
    SetGarageCameraAnimation(100000300);
    FreezeTime(2, 2, 0, 0);
    ForceAnimationPlayback(1010001200, 200, false, false, false, Equal, 1);
    EndUnconditionally(EventEndType.End);
});

Event(3704, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 3008);
    SetGarageCameraAnimation(100000400);
    FreezeTime(3, 2, 0, 0);
    ForceAnimationPlayback(1010001200, 300, false, false, false, Equal, 1);
    EndUnconditionally(EventEndType.End);
});

Event(3705, Default, function() {
    Unknown20085(9);
});

Event(3706, Default, function() {
    Unknown20085(0);
});
