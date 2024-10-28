// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    "W:\\FNR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

Event(0, Default, function() {
    EndEventEsd(0, 5401, 0);
    EndEventEsd(0, 5402, 0);
    EndEventEsd(0, 5403, 0);
    EndEventEsd(0, 5404, 0);
    EndEventEsd(0, 5405, 0);
    EndEventEsd(0, 5413, 0);
    EndEventEsd(0, 5414, 0);
    EndEventEsd(0, 5415, 0);
    EndEventEsd(0, 5420, 0);
    EndEventEsd(0, 5424, 0);
    EndEventEsd(0, 5425, 0);
    EndEventEsd(0, 5460, 0);
    EndEventEsd(0, 5461, 0);
    EndEventEsd(0, 5462, 0);
    EndEventEsd(0, 5431, 0);
    EndEventEsd(0, 5300, 200010, 0);
    EndEventEsd(0, 5610, 0);
    InitializeEventEsd(0, 2000, 0);
    InitializeEventEsd(0, 2005, 0);
    InitializeEventEsd(0, 2001, 0);
    InitializeEventEsd(0, 2003, 0);
    InitializeEventEsd(0, 2020, 0);
    InitializeEventEsd(0, 2021, 0);
    InitializeEventEsd(0, 2022, 0);
    InitializeEventEsd(0, 2050, 0);
    InitializeEventEsd(0, 2051, 0);
    InitializeEventEsd(0, 2052, 0);
    InitializeEventEsd(0, 2053, 0);
    InitializeEventEsd(0, 2030, 0);
    InitializeEventEsd(0, 2031, 0);
    InitializeEventEsd(0, 2032, 0);
    InitializeEventEsd(0, 2033, 0);
    InitializeEventEsd(0, 2300, 0);
    InitializeEventEsd(0, 2301, 0);
    InitializeEventEsd(0, 2302, 0);
    InitializeEventEsd(0, 2310, 0);
    InitializeEventEsd(0, 2311, 0);
    InitializeEventEsd(0, 2312, 0);
    InitializeEventEsd(0, 2044, 0);
    InitializeEventEsd(0, 2045, 0);
    InitializeEventEsd(0, 2046, 0);
    InitializeEventEsd(0, 2047, 0);
    InitializeEventEsd(0, 2060, 0);
    InitializeEventEsd(0, 2200, 0);
    InitializeEventEsd(0, 2201, 0);
    InitializeEventEsd(0, 2202, 0);
    InitializeEventEsd(0, 2203, 0);
    InitializeEventEsd(0, 2204, 0);
    InitializeEventEsd(0, 2205, 0);
    InitializeEventEsd(0, 2090, 0);
    InitializeEventEsd(0, 2091, 0);
    InitializeEventEsd(0, 2500, 0);
    InitializeEventEsd(0, 2501, 0);
    InitializeEventEsd(0, 2502, 0);
    InitializeEventEsd(0, 2503, 0);
    InitializeEvent(0, 2600, 901200);
    InitializeEvent(1, 2600, 901201);
    InitializeEvent(2, 2600, 901202);
    InitializeEvent(3, 2600, 901203);
    InitializeEvent(4, 2600, 901210);
    InitializeEvent(5, 2600, 901211);
    InitializeEvent(6, 2600, 901220);
    InitializeEvent(7, 2600, 901230);
    InitializeEvent(8, 2600, 901240);
    InitializeEvent(9, 2600, 901250);
    InitializeEvent(10, 2600, 901260);
    InitializeEvent(0, 2601, 0);
    InitializeEvent(0, 2602, 0);
    Unknown201213(900000, 0, 0);
    InitializeEventEsd(0, 2650, 1000, 1001);
});

Event(2000, Default, function() {
    SetSpEffect(510, 9200000);
    SetSpEffect(511, 9200000);
    SetSpEffect(512, 9200001);
    SetSpEffect(513, 9200001);
});

Event(2001, Default, function() {
    SetCharacterAIState(501, Disabled);
    SetCharacterAIState(502, Disabled);
    SetCharacterAIState(503, Disabled);
    SetCharacterAIState(504, Disabled);
});

Event(2003, Default, function() {
    ActivateHit(2100901500, Enabled);
    ActivateHit(2100901510, Enabled);
    ActivateHit(2100901520, Enabled);
    ActivateHit(2100901530, Enabled);
});

Event(2005, Default, function() {
    IssueShortWarpRequest(20000, TargetEntityType.Area, 2000, -1);
});

Event(2020, Default, function() {
    ActivateHit(2100901510, Disabled);
});

Event(2021, Default, function() {
    ActivateHit(2100901520, Disabled);
});

Event(2022, Default, function() {
    ActivateHit(2100901530, Disabled);
});

Event(2030, Default, function() {
    SetSpEffect(501, 9991003);
    SetSpEffect(502, 9991003);
    SetSpEffect(503, 9991003);
    SetSpEffect(504, 9991003);
    IfCharacterRatioDeadalive(OR_04, 5310, DeathState.Dead, Equal, 1);
    IfEntityInoutsideRadiusOfEntity(OR_04, InsideOutsideState.Inside, 20000, 5300, 330, 1);
    IfConditionGroup(MAIN, PASS, OR_04);
    SetSpEffect(505, 9991003);
    SetSpEffect(506, 9991003);
    SetSpEffect(507, 9991003);
});

Event(2031, Default, function() {
    SetSpEffect(510, 9991003);
    SetSpEffect(511, 9991003);
    SetSpEffect(512, 9991003);
    SetSpEffect(513, 9991003);
});

Event(2032, Default, function() {
    SetSpEffect(530, 9991003);
    SetSpEffect(531, 9991003);
    SetSpEffect(532, 9991003);
    SetSpEffect(533, 9991003);
    SetSpEffect(534, 9991003);
    SetSpEffect(532, 99993201);
    SetSpEffect(533, 99993201);
    SetSpEffect(534, 99993201);
    SetSpEffect(532, 99993202);
    SetSpEffect(533, 99993202);
    SetSpEffect(534, 99993202);
});

Event(2033, Default, function() {
    SetSpEffect(552, 9991003);
    SetSpEffect(551, 9991003);
});

Event(2044, Default, function() {
    ChangeCharacterEnableState(5500, Disabled);
});

Event(2045, Default, function() {
    ChangeCharacterEnableState(5003, Enabled);
});

Event(2046, Default, function() {
    ChangeCharacterEnableState(5001, Enabled);
});

Event(2047, Default, function() {
    ChangeCharacterEnableState(5002, Enabled);
});

Event(2050, Default, function() {
    IfUnknown416(0, 5000, 0, 0, 0, 1065353216);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 0.8);
    SetSpEffect(0, 0);
});

Event(2051, Default, function() {
    IfCharacterRatioDeadalive(MAIN, 5001, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2052, Default, function() {
    IfCharacterRatioDeadalive(MAIN, 5002, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2053, Default, function() {
    IfCharacterRatioDeadalive(MAIN, 5003, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
});

Event(2060, Default, function() {
    SetCharacterAIState(501, Enabled);
    SetCharacterAIState(502, Enabled);
    SetCharacterAIState(503, Enabled);
    SetCharacterAIState(504, Enabled);
});

Event(2090, Default, function() {
    SetSpEffect(20000, 9999);
});

Event(2091, Default, function() {
    SetSpEffect(20000, 9998);
});

Event(2200, Default, function() {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 20000, 2100, 1);
    SetSpEffect(0, 0);
});

Event(2201, Default, function() {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 20000, 2101, 1);
    ClearSpEffect(512, 72300000);
    ClearSpEffect(513, 72300000);
});

Event(2202, Default, function() {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 20000, 2102, 1);
    ClearSpEffect(530, 72300000);
    ClearSpEffect(531, 72300000);
});

Event(2203, Default, function() {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 20000, 2103, 1);
    SetSpEffect(0, 0);
});

Event(2204, Default, function() {
    IfCharacterHasSpEffect(OR_01, 502, 30209310, true, Equal, 1);
    IfCharacterHasSpEffect(OR_01, 503, 30209310, true, Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetSpEffect(0, 0);
});

Event(2205, Default, function() {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 20000, 2110, 1);
    Unknown20041021(510, 20000, -1082130432, 0);
    IfElapsedSeconds(MAIN, 1);
    Unknown20041021(511, 20000, -1082130432, 0);
});

Event(2300, Default, function() {
    Unknown20031000(2200, 1);
});

Event(2301, Default, function() {
    Unknown20031000(2201, 1);
});

Event(2302, Default, function() {
    Unknown20031000(2202, 1);
});

Event(2310, Default, function() {
    Unknown20031000(2200, 0);
});

Event(2311, Default, function() {
    Unknown20031000(2201, 0);
});

Event(2312, Default, function() {
    Unknown20031000(2202, 0);
});

Event(2500, Default, function() {
    SetSpEffect(0, 0);
});

Event(2501, Default, function() {
    SetSpEffect(0, 0);
});

Event(2502, Default, function() {
    SetSpEffect(0, 0);
});

Event(2503, Default, function() {
    SetSpEffect(0, 0);
});

Event(2600, Default, function(X0_4) {
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X0_4, 100, false, true, false, Equal, 1);
    ForceAnimationPlayback(X0_4, 101, true, false, false, Equal, 1);
});

Event(2601, Default, function() {
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(901260, 100, false, true, false, Equal, 1);
    Unknown201214(0, 1073741824);
    ForceAnimationPlayback(901260, 101, true, false, false, Equal, 1);
});

Event(2602, Default, function() {
    WaitFixedTimeSeconds(1);
    PlaySE(20000, SoundType.EnvironmentalSound, 810);
});

Event(2650, Default, function(X0_4, X4_4) {
    EndTextEffectMessage(3);
    EndTextEffectMessage(0);
    EndTextEffectMessage(2);
    EndTextEffectMessage(1);
    HidePlayerHud();
    ClearSpEffect(20000, 500000005);
    SetSpEffect(20000, 9990050);
    SetSpEffect(20000, 500000008);
    Unknown20041020(0);
    Unknown201213(900000, 0, 1065353216);
    ForceAnimationPlayback(901200, X0_4, false, false, false, Equal, 1);
    ForceAnimationPlayback(901201, X0_4, false, false, false, Equal, 1);
    ForceAnimationPlayback(901202, X0_4, false, false, false, Equal, 1);
    ForceAnimationPlayback(901203, X0_4, false, false, false, Equal, 1);
    ForceAnimationPlayback(901210, X0_4, false, false, false, Equal, 1);
    ForceAnimationPlayback(901211, X0_4, false, false, false, Equal, 1);
    ForceAnimationPlayback(901220, X0_4, false, false, false, Equal, 1);
    ForceAnimationPlayback(901230, X0_4, false, false, false, Equal, 1);
    ForceAnimationPlayback(901260, X0_4, false, false, false, Equal, 1);
    ForceAnimationPlayback(901250, X0_4, false, true, false, Equal, 1);
    ForceAnimationPlayback(901200, X4_4, true, false, false, Equal, 1);
    ForceAnimationPlayback(901201, X4_4, true, false, false, Equal, 1);
    ForceAnimationPlayback(901202, X4_4, true, false, false, Equal, 1);
    ForceAnimationPlayback(901203, X4_4, true, false, false, Equal, 1);
    ForceAnimationPlayback(901210, X4_4, true, false, false, Equal, 1);
    ForceAnimationPlayback(901211, X4_4, true, false, false, Equal, 1);
    ForceAnimationPlayback(901220, X4_4, true, false, false, Equal, 1);
    ForceAnimationPlayback(901230, X4_4, true, false, false, Equal, 1);
    ForceAnimationPlayback(901260, X4_4, true, false, false, Equal, 1);
    ForceAnimationPlayback(901250, X4_4, true, false, false, Equal, 1);
});


