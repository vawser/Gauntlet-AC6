// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    "W:\\FNR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

Event(0, Default, function() {
    InitializeEventEsd(0, 2000, 0);
    InitializeEventEsd(0, 2100, 0);
    InitializeEvent(0, 2001, 0);
    InitializeEventEsd(0, 2301, 0);
    InitializeEventEsd(0, 2302, 0);
    InitializeEventEsd(0, 2303, 0);
    InitializeEventEsd(0, 2310, 0);
    InitializeEventEsd(0, 2399, 0);
    InitializeEventEsd(0, 2411, 0);
    InitializeEventEsd(0, 2412, 0);
    InitializeEventEsd(0, 2413, 0);
    InitializeEventEsd(0, 2421, 0);
    InitializeEventEsd(0, 2422, 0);
    InitializeEventEsd(0, 2423, 0);
    InitializeEventEsd(0, 2430, 0);
    InitializeEventEsd(0, 2431, 0);
    InitializeEventEsd(0, 2432, 0);
    InitializeEventEsd(0, 2433, 0);
    InitializeEventEsd(0, 2434, 0);
    InitializeEventEsd(0, 2435, 0);
    InitializeEventEsd(0, 2436, 0);
    InitializeEventEsd(0, 2437, 0);
    InitializeEventEsd(0, 2438, 0);
    InitializeEventEsd(0, 2439, 0);
    InitializeEventEsd(0, 2440, 0);
    InitializeEventEsd(0, 2441, 0);
    InitializeEventEsd(0, 2450, 0);
    InitializeEventEsd(0, 2453, 0);
    InitializeEventEsd(0, 2451, 0);
    InitializeEventEsd(0, 2452, 0);
    InitializeEvent(0, 2015, 0);
    InitializeEvent(0, 2016, 0);
    InitializeEvent(0, 2017, 0);
    InitializeEvent(0, 2018, 0);
    InitializeEvent(0, 2311, 0);
    InitializeEvent(0, 2020, 0);
    InitializeEventEsd(0, 2030, 0);
    InitializeEventEsd(0, 2031, 0);
    InitializeEvent(0, 2470, 0);
    InitializeEvent(0, 2480, 0);
    InitializeEvent(0, 2610, 0);
    InitializeEventEsd(0, 2471, 0);
    InitializeEventEsd(0, 2472, 0);
    InitializeEventEsd(0, 2473, 0);
    InitializeEventEsd(0, 2474, 0);
    InitializeEventEsd(0, 2475, 0);
    InitializeEventEsd(0, 2476, 0);
    InitializeEventEsd(0, 2477, 0);
    InitializeEventEsd(0, 2478, 0);
    EndEventEsd(0, 5320, 2100202901);
    EndEventEsd(0, 5330, 0);
    InitializeEvent(0, 2480, 0);
    InitializeEvent(0, 2490, 0);
    InitializeEvent(0, 2600, 0);
    InitializeEvent(0, 2620, 0);
    InitializeEvent(0, 2630, 0);
    InitializeEvent(0, 2500, 0);
    InitializeEventEsd(0, 2511, 0);
    InitializeEventEsd(0, 2510, 0);
    InitializeEventEsd(0, 2512, 0);
    Unknown200519(980, 981);
    InitializeEventEsd(0, 2900, 970);
    InitializeEventEsd(1, 2900, 971);
    InitializeEventEsd(2, 2900, 972);
    InitializeEventEsd(3, 2900, 973);
    InitializeEventEsd(0, 2920, 970, 963, 964, 965);
    InitializeEventEsd(1, 2920, 971, 964, 965, 966);
    InitializeEventEsd(2, 2920, 972, 965, 966, 967);
    InitializeEventEsd(3, 2920, 973, 966, 967, 968);
    InitializeEventEsd(0, 2940, 970);
    InitializeEventEsd(1, 2940, 971);
    InitializeEventEsd(2, 2940, 972);
    InitializeEventEsd(3, 2940, 973);
    InitializeEventEsd(0, 2960, 970);
    InitializeEventEsd(1, 2960, 971);
    InitializeEventEsd(2, 2960, 972);
    InitializeEventEsd(3, 2960, 973);
    InitializeEventEsd(0, 3980, 0);
    InitializeEventEsd(0, 3990, 0);
    InitializeEvent(0, 2005, 400, 1200);
    InitializeEvent(1, 2005, 401, 1201);
    InitializeEvent(2, 2005, 402, 1202);
    InitializeEvent(3, 2005, 403, 1203);
    InitializeEvent(4, 2005, 404, 1205);
    InitializeEvent(0, 2040, 0);
    InitializeEvent(0, 2110, 0);
});

Event(2000, Default, function() {
    IfCharacterHasSpEffect(MAIN, 10000, 999527107, true, Equal, 1);
    SetSpEffect(10000, 999527106);
});

Event(2001, Default, function() {
    IfCharacterHasSpEffect(MAIN, 10000, 9998, true, Equal, 1);
    Unknown20031004(10000, 100);
    IfCharacterHasSpEffect(MAIN, 10000, 9998, false, Equal, 1);
    EndUnconditionally(EventEndType.Restart);
});

Event(2005, Default, function(X0_4, X4_4) {
    Unknown20041010(X0_4, X4_4, 70, 70);
    IfCharacterHasSpEffect(OR_01, X0_4, 37009220, true, Equal, 1);
    IfCharacterHasSpEffect(OR_01, X0_4, 4500, false, Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    Unknown20041011(X0_4);
});

Event(2010, Default, function() {
    IfCharacterBackreadStatus(MAIN, 210, true, Equal, 1);
    IfCharacterHasSpEffect(MAIN, 10000, 9999, true, Equal, 1);
    ForceAnimationPlayback(210, 104000, false, true, false, Equal, 1);
    SetSpEffect(10000, 999527104);
});

Event(2011, Default, function() {
    IfCharacterBackreadStatus(MAIN, 211, true, Equal, 1);
    IfCharacterHasSpEffect(MAIN, 10000, 9999, true, Equal, 1);
    ForceAnimationPlayback(211, 104000, false, true, false, Equal, 1);
    SetSpEffect(10000, 999527104);
});

Event(2015, Default, function() {
    SetSpEffect(211, 5000);
    Unknown20041018(211, 2, 2904);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 211, 2904, 1);
    Unknown20041018(211, 0, 0);
});

Event(2016, Default, function() {
    Unknown20041018(210, 2, 2902);
});

Event(2017, Default, function() {
    Unknown20041018(210, 2, 2903);
});

Event(2018, Default, function() {
    Unknown20041018(210, 2, 2904);
});

Event(2020, Default, function() {
    Unknown200519(300, 230);
});

Event(2030, Default, function() {
    Unknown20031034(99999110);
    Unknown20031035(256);
});

Event(2031, Default, function() {
    Unknown31008(262144, 100);
    Unknown20031034(99999120);
    Unknown20031035(5121);
});

Event(2040, Default, function() {
    Unknown31000(256, 2041);
    AwardItemLot(2140091500);
    IfElapsedFrames(MAIN, 1);
    Unknown20031010(0, 2041, 0);
    IfElapsedFrames(MAIN, 10);
    SetSpEffect(0, 0);
    EndUnconditionally(EventEndType.Restart);
});

Event(2100, Default, function() {
    IfCharacterHasSpEffect(MAIN, 10000, 999527105, true, Equal, 1);
    SetSpEffect(10000, 999527104);
});

Event(2110, Default, function() {
    DisplayBossHealthBar(Disabled, 210, 0, 110);
    DisplayBossHealthBar(Disabled, 211, 1, 440);
    IfCharacterHasSpEffect(MAIN, 20000, 9990001, true, Equal, 1);
    DisplayBossHealthBar(Enabled, 210, 0, 110);
    DisplayBossHealthBar(Enabled, 211, 1, 440);
    IfCharacterHasSpEffect(MAIN, 20000, 9990002, true, Equal, 1);
    DisplayBossHealthBar(Disabled, 210, 0, 110);
    IfCharacterHasSpEffect(MAIN, 20000, 9990003, true, Equal, 1);
    ClearSpEffect(20000, 9990001);
    ClearSpEffect(20000, 9990002);
    ClearSpEffect(20000, 9990003);
    IfElapsedFrames(MAIN, 1);
    EndUnconditionally(EventEndType.Restart);
});

Event(2150, Default, function() {
    IfCharacterHasSpEffect(MAIN, 20000, 9999, true, Equal, 1);
    InitializeCommonEvent(5320, 2100202901);
});

Event(2200, Default, function() {
    Unknown20031028(3020, 900);
});

Event(2301, Default, function() {
    ChangeCharacterEnableState(200, Enabled);
    IfElapsedFrames(MAIN, 1);
    ForceAnimationPlayback(200, 5002, false, false, false, Equal, 1);
    IfCharacterHasSpEffect(MAIN, 200, 99990000, true, Equal, 1);
    ClearSpEffect(200, 99990100);
    SetSpEffect(0, 0);
});

Event(2302, Default, function() {
    ForceAnimationPlayback(200, 5003, true, false, false, Equal, 1);
    IfElapsedSeconds(MAIN, 0.5);
    Unknown20031028(9001, 0);
});

Event(2303, Default, function() {
    ForceAnimationPlayback(200, 5004, false, false, false, Equal, 1);
    IfCharacterHasSpEffect(MAIN, 200, 99990001, true, Equal, 1);
    ClearSpEffect(200, 99990101);
    SetSpEffect(0, 0);
});

Event(2310, Default, function() {
    IfActionButtonInArea(MAIN, 4600, 201);
    SetSpEffect(20000, 4750);
});

Event(2311, Default, function() {
    IfCharacterBackreadStatus(MAIN, 990, true, Equal, 1);
    SetNetworkconnectedEventFlag(990, 60, 991);
    Unknown200522(991, 990, 10);
    SetSpEffect(0, 0);
    IfCharacterHPRatio(MAIN, 990, LessOrEqual, 0, Equal, 1);
    RequestAssetDestruction(991, 0);
});

Event(2399, Default, function() {
    Unknown20031013(2300, 2399, 0);
    ClearSpEffect(200, 99990000);
    ClearSpEffect(200, 99990001);
    IfElapsedFrames(MAIN, 1);
    ChangeCharacterEnableState(200, Disabled);
});

Event(2400, Default, function() {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 2500, 1);
    Unknown20013(16777216, 1065353216, 2);
    IfElapsedSeconds(MAIN, 0.9);
    Unknown20031028(9001, 0);
});

Event(2411, Default, function() {
    IfCharacterHPRatio(MAIN, 220, LessOrEqual, 0, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2412, Default, function() {
    IfCharacterHPRatio(MAIN, 221, LessOrEqual, 0, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2413, Default, function() {
    IfCharacterHPRatio(MAIN, 222, LessOrEqual, 0, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2421, Default, function() {
    IfCharacterDeadalive(MAIN, 220, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2422, Default, function() {
    IfCharacterDeadalive(MAIN, 221, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2423, Default, function() {
    IfCharacterDeadalive(MAIN, 222, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2430, Default, function() {
    ChangeCamera(110, 110);
    Unknown20031030(220);
    EndUnconditionally(EventEndType.Restart);
});

Event(2431, Default, function() {
    ChangeCamera(111, 111);
    Unknown20031030(220);
    EndUnconditionally(EventEndType.Restart);
});

Event(2432, Default, function() {
    ChangeCamera(112, 112);
    Unknown20031030(220);
    EndUnconditionally(EventEndType.Restart);
});

Event(2433, Default, function() {
    ChangeCamera(110, 110);
    Unknown20031030(221);
    EndUnconditionally(EventEndType.Restart);
});

Event(2434, Default, function() {
    ChangeCamera(111, 111);
    Unknown20031030(221);
    EndUnconditionally(EventEndType.Restart);
});

Event(2435, Default, function() {
    ChangeCamera(112, 112);
    Unknown20031030(221);
    EndUnconditionally(EventEndType.Restart);
});

Event(2436, Default, function() {
    ChangeCamera(130, 130);
    Unknown20031030(222);
    EndUnconditionally(EventEndType.Restart);
});

Event(2437, Default, function() {
    ChangeCamera(131, 131);
    Unknown20031030(222);
    EndUnconditionally(EventEndType.Restart);
});

Event(2438, Default, function() {
    ChangeCamera(132, 132);
    Unknown20031030(222);
    EndUnconditionally(EventEndType.Restart);
});

Event(2439, Default, function() {
    ChangeCamera(110, 110);
    Unknown20031030(223);
    EndUnconditionally(EventEndType.Restart);
});

Event(2440, Default, function() {
    Unknown20031031(1);
    SetSpEffect(220, 4892);
    SetSpEffect(221, 4892);
});

Event(2441, Default, function() {
    Unknown20031031(0);
    ClearSpEffect(220, 4892);
    ClearSpEffect(221, 4892);
});

Event(2450, Default, function() {
    IfCharacterHasSpEffect(MAIN, 220, 99992910, true, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2451, Default, function() {
    IfCharacterHasSpEffect(MAIN, 220, 99992920, true, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2452, Default, function() {
    IfCharacterHasSpEffect(MAIN, 222, 99992910, true, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2453, Default, function() {
    IfCharacterHasSpEffect(MAIN, 221, 99992910, true, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2460, Default, function() {
    Unknown20031036(1045220557, 1077936128);
    IfElapsedSeconds(MAIN, 0.6);
    Unknown20031036(1056964608, 1056964608);
});

Event(2470, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 5070);
    IfCharacterHasSpEffect(MAIN, 10000, 200001601, true, Equal, 1);
    Unknown20031036(1050253722, 1028443341);
    EndUnconditionally(EventEndType.Restart);
});

Event(2471, Default, function() {
    IfCharacterHasSpEffect(MAIN, 220, 31509930, true, Equal, 1);
    Unknown20031036(1045220557, 1028443341);
    EndUnconditionally(EventEndType.Restart);
});

Event(2472, Default, function() {
    IfCharacterHasSpEffect(MAIN, 220, 31509931, true, Equal, 1);
    Unknown20031036(1050253722, 1028443341);
    EndUnconditionally(EventEndType.Restart);
});

Event(2473, Default, function() {
    IfCharacterHasSpEffect(MAIN, 220, 31509932, true, Equal, 1);
    Unknown20031036(1053609165, 1028443341);
    EndUnconditionally(EventEndType.Restart);
});

Event(2474, Default, function() {
    IfCharacterHasSpEffect(MAIN, 220, 31509933, true, Equal, 1);
    Unknown20031036(1056964608, 1028443341);
    EndUnconditionally(EventEndType.Restart);
});

Event(2475, Default, function() {
    IfCharacterHasSpEffect(MAIN, 221, 31509930, true, Equal, 1);
    Unknown20031036(1045220557, 1028443341);
    EndUnconditionally(EventEndType.Restart);
});

Event(2476, Default, function() {
    IfCharacterHasSpEffect(MAIN, 221, 31509931, true, Equal, 1);
    Unknown20031036(1050253722, 1028443341);
    EndUnconditionally(EventEndType.Restart);
});

Event(2477, Default, function() {
    IfCharacterHasSpEffect(MAIN, 221, 31509932, true, Equal, 1);
    Unknown20031036(1053609165, 1028443341);
    EndUnconditionally(EventEndType.Restart);
});

Event(2478, Default, function() {
    IfCharacterHasSpEffect(MAIN, 221, 31509933, true, Equal, 1);
    Unknown20031036(1056964608, 1028443341);
    EndUnconditionally(EventEndType.Restart);
});

Event(2480, Default, function() {
    Unknown41004(0, 10000, 220, 0);
    SetSpEffect(10000, 9999);
    SetSpEffect(10000, 9999);
});

Event(2490, Default, function() {
    SetCharacterAIState(240, Disabled);
    IfCharacterHasSpEffect(MAIN, 240, 9994821, true, Equal, 1);
    SetCharacterAIState(240, Enabled);
});

Event(2500, Default, function() {
    IfActionButtonInArea(MAIN, 10000030, 400);
    SetSpEffect(10000, 9994850);
});

Event(2510, Default, function() {
    Unknown20031031(1);
});

Event(2511, Default, function() {
    Unknown20031031(0);
});

Event(2512, Default, function() {
    ChangeCamera(110, 110);
    Unknown20031030(400);
    EndUnconditionally(EventEndType.Restart);
});

Event(2600, Default, function() {
    IfCharacterBackreadStatus(MAIN, 291, true, Equal, 1);
    SetSpEffect(291, 5000);
    SetSpEffect(291, 9991003);
    SetNetworkUpdateRate(291, true, CharacterUpdateFrequency.Every5Frames);
    SetNetworkUpdateRate(0, true, CharacterUpdateFrequency.AlwaysUpdate);
});

Event(2610, Default, function() {
    IfCharacterHasSpEffect(MAIN, 10000, 9998, true, Equal, 1);
    Unknown20031044(4200, 0);
});

Event(2620, Default, function() {
    ClearSpEffect(211, 9991001);
    ShootBullet(292, 292, 300, 205300070, 0, 0, 0);
    SetSpEffect(211, 9991003);
    IfElapsedFrames(MAIN, 300);
    ClearSpEffect(211, 9991003);
    ShootBullet(292, 292, 300, 205300070, 90, 0, 0);
    SetSpEffect(211, 9991002);
    IfElapsedFrames(MAIN, 300);
    ClearSpEffect(211, 9991002);
    ShootBullet(292, 292, 300, 205300070, 180, 0, 0);
    SetSpEffect(211, 9991001);
    IfElapsedFrames(MAIN, 300);
    ClearSpEffect(211, 9991001);
    ShootBullet(292, 292, 300, 205300070, 270, 0, 0);
    SetSpEffect(211, 9991001);
    EndUnconditionally(EventEndType.Restart);
});

Event(2630, Default, function() {
    SetSpEffect(5901, 9991002);
    SetNetworkUpdateRate(5900, true, CharacterUpdateFrequency.AlwaysUpdate);
});

Event(2640, Default, function(X0_4) {
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    Unknown41006(0, 20000, X0_4);
    SetCharacterEventTarget(X0_4, 20000);
    IfElapsedFrames(MAIN, 1);
    SetSpEffect(X0_4, 53005400);
    IfElapsedSeconds(MAIN, 5);
    SetSpEffect(X0_4, 53005421);
    EndUnconditionally(EventEndType.Restart);
});

Event(2650, Default, function(X0_4, X4_4, X8_4, X12_4) {
    IfElapsedSeconds(MAIN, 3);
    SetCharacterEventTarget(X0_4, X4_4);
    IfElapsedSeconds(MAIN, 3);
    SetCharacterEventTarget(X0_4, X8_4);
    IfElapsedSeconds(MAIN, 3);
    SetCharacterEventTarget(X0_4, X12_4);
    EndUnconditionally(EventEndType.Restart);
});

Event(2900, Default, function(X0_4) {
    Unknown41006(0, 20000, X0_4);
    SetCharacterEventTarget(X0_4, 20000);
    IfElapsedFrames(MAIN, 1);
    SetSpEffect(X0_4, 53005400);
    SetSpEffect(X0_4, 53005420);
    SetSpEffect(X0_4, 53005430);
    SetSpEffect(970, 53005410);
    SetSpEffect(971, 53005410);
    SetSpEffect(972, 53005410);
    SetSpEffect(973, 53005410);
    Unknown20031011(3990, 1);
});

Event(2920, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetCharacterEventTarget(X0_4, X4_4);
    IfElapsedSeconds(MAIN, 3);
    SetCharacterEventTarget(X0_4, X8_4);
    IfElapsedSeconds(MAIN, 3);
    SetCharacterEventTarget(X0_4, X12_4);
    IfElapsedSeconds(MAIN, 3);
    SetSpEffect(0, 0);
    EndUnconditionally(EventEndType.Restart);
});

Event(2940, Default, function(X0_4) {
    SetCharacterEventTarget(X0_4, 20000);
});

Event(2960, Default, function(X0_4) {
    SetSpEffect(X0_4, 53005421);
    SetSpEffect(X0_4, 53005411);
});

Event(3980, Default, function() {
    Unknown20031011(3990, 0);
});

Event(3990, Default, function() {
    SetSpEffect(0, 0);
});


