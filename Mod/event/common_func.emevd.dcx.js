// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    ""
// @linked    []
// @version    3.4.2
// ==/EMEVD==

//=====================================================
// NPAC withdrawal catapult event
//=====================================================
Event(5200, Default, function(X0_4, X4_4, X8_4) {
    IfCharacterHasSpEffect(MAIN, X0_4, 9999010, true, Equal, 1);
    SetSpEffect(X0_4, 5000);
    Unknown20041018(X0_4, 2, X4_4);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, X0_4, X4_4, 1);
    Unknown20041018(200, 2, X8_4);
    IfElapsedSeconds(MAIN, 0.5);
    SetSpEffect(X0_4, 9999011);
    IfCharacterHasSpEffect(MAIN, X0_4, 400000000, true, Equal, 1);
    Unknown20041030(X0_4, 1092616192, 1120403456, 1153138688, X8_4, 1159479296, 1157234688, 0);
    Unknown20041018(X0_4, 0, 0);
    ClearSpEffect(X0_4, 9999011);
    IfElapsedSeconds(MAIN, 3);
    SetSpEffect(X0_4, 9999012);
    EndUnconditionally(EventEndType.Restart);
});

//=====================================================
// Destruction OBJ reaction event
//=====================================================
Event(5220, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    IfCharacterHPRatio(AND_01, X0_4, LessOrEqual, 0, Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.Label0, PASS, AND_01);
    IfDamageType(MAIN, X0_4, X4_4, DamageType.Unspecified);
    SpawnOneshotSFX(TargetEntityType.Asset, X8_4, X12_4, X16_4);
    IfElapsedSeconds(MAIN, 0.2);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    EndUnconditionally(EventEndType.End);
});

//=====================================================
// NPAC reinforcement catapult event
//=====================================================
Event(5250, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    IfCharacterHasSpEffect(MAIN, X0_4, 9999010, true, Equal, 1);
    SetSpEffect(X0_4, 9999010);
    IfElapsedFrames(MAIN, 1);
    SetSpEffect(X0_4, 9999011);
    IfCharacterHasSpEffect(MAIN, X0_4, 400000000, true, Equal, 1);
    Unknown20041030(X0_4, X8_4, X12_4, X16_4, X4_4, X20_4, X24_4, X28_4);
    ClearSpEffect(X0_4, 9999011);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, X0_4, X4_4, 1);
    SetSpEffect(X0_4, 9999012);
    EndUnconditionally(EventEndType.Restart);
});

//=====================================================
// Cutscene before entering the orbit
//=====================================================
Event(5260, Default, function(X0_4) {
    PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(X0_4, CutscenePlayMode.SkippableWithFadeOutSkip);
    WaitForCutsceneToEnd(0);
    SetSpEffect(0, 0);
});

//=====================================================
// AC repair kit count
//=====================================================
Event(5270, Default, function(X0_4) {
    SetSpEffect(X0_4, 9990400);
    IfCharacterHasSpEffect(OR_01, X0_4, 9403, true, Equal, 1);
    IfCharacterHasSpEffect(OR_01, X0_4, 9404, true, Equal, 1);
    IfCharacterHasSpEffect(OR_01, X0_4, 9405, true, Equal, 1);
    IfCharacterHasSpEffect(OR_01, X0_4, 9406, true, Equal, 1);
    IfCharacterHasSpEffect(OR_01, X0_4, 9407, true, Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetSpEffect(X0_4, 9990401);
    IfElapsedSeconds(MAIN, 0.5);
    IfCharacterHasSpEffect(OR_02, X0_4, 9403, true, Equal, 1);
    IfCharacterHasSpEffect(OR_02, X0_4, 9404, true, Equal, 1);
    IfCharacterHasSpEffect(OR_02, X0_4, 9405, true, Equal, 1);
    IfCharacterHasSpEffect(OR_02, X0_4, 9406, true, Equal, 1);
    IfCharacterHasSpEffect(OR_02, X0_4, 9407, true, Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetSpEffect(X0_4, 9990402);
    IfElapsedSeconds(MAIN, 0.5);
    IfCharacterHasSpEffect(OR_03, X0_4, 9403, true, Equal, 1);
    IfCharacterHasSpEffect(OR_03, X0_4, 9404, true, Equal, 1);
    IfCharacterHasSpEffect(OR_03, X0_4, 9405, true, Equal, 1);
    IfCharacterHasSpEffect(OR_03, X0_4, 9406, true, Equal, 1);
    IfCharacterHasSpEffect(OR_03, X0_4, 9407, true, Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_03);
    SetSpEffect(X0_4, 9990403);
    IfElapsedSeconds(MAIN, 0.5);
    IfCharacterHasSpEffect(OR_04, X0_4, 9403, true, Equal, 1);
    IfCharacterHasSpEffect(OR_04, X0_4, 9404, true, Equal, 1);
    IfCharacterHasSpEffect(OR_04, X0_4, 9405, true, Equal, 1);
    IfCharacterHasSpEffect(OR_04, X0_4, 9406, true, Equal, 1);
    IfCharacterHasSpEffect(OR_04, X0_4, 9407, true, Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_04);
    SetSpEffect(X0_4, 9990404);
    IfElapsedSeconds(MAIN, 0.5);
    IfCharacterHasSpEffect(OR_05, X0_4, 9403, true, Equal, 1);
    IfCharacterHasSpEffect(OR_05, X0_4, 9404, true, Equal, 1);
    IfCharacterHasSpEffect(OR_05, X0_4, 9405, true, Equal, 1);
    IfCharacterHasSpEffect(OR_05, X0_4, 9406, true, Equal, 1);
    IfCharacterHasSpEffect(OR_05, X0_4, 9407, true, Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_05);
    SetSpEffect(X0_4, 9990405);
    IfElapsedSeconds(MAIN, 0.5);
    SetSpEffect(0, 0);
});

//=====================================================
// light slow effect
//=====================================================
Event(5280, Default, function(X0_4) {
    IfCharacterHPRatio(MAIN, X0_4, Equal, 0, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 0.2);
    Unknown20031036(1045220557, 1056964608);
    IfElapsedSeconds(MAIN, 0.1);
    Unknown20031036(1050253722, 1050253722);
    IfElapsedSeconds(MAIN, 0.09);
    Unknown20031036(1056964608, 1045220557);
    IfElapsedSeconds(MAIN, 0.1);
    Unknown20031036(1061997773, 1036831949);
});

//=====================================================
// Pre-mission state_CS_Sortie from garage
//=====================================================
Event(5300, Default, function(X0_4, X4_4) {
    PlaySE(0, SoundType.BGM, 999992020);
    SetRelativeEventFlag(0, 5920, 1);
    IfElapsedFrames(MAIN, 1);
    Unknown200208(X0_4, 34, 0, 0, 0, X4_4); // Sound Cutscene Param ID?
    IfElapsedFrames(MAIN, 1);
    WaitForCutsceneToEnd(0);
    SetSpEffect(0, 200000100);
    Unknown201008(20000200);
});

//=====================================================
// Pre-mission state_CS_Sortie from garage_Continuous version
//=====================================================
Event(5305, Default, function(X0_4, X4_4, X8_4) {
    SetRelativeEventFlag(0, 5920, 1);
    PlaySE(20000, SoundType.BGM, 999992020);
    IfElapsedFrames(MAIN, 1);
    Unknown200208(X8_4, 384, 0, 0, 0, X4_4);
    SetSpEffect(20000, 9990650);
    Unknown200208(X0_4, 58, 0, 0, 0, X4_4);
    IfElapsedFrames(MAIN, 1);
    SetSpEffect(10000, 200000100);
    Unknown201008(20000200);
});

//=====================================================
// Pre-mission state_CS_Prologue-only sortie_Continuous version
//=====================================================
Event(5306, Default, function(X0_4, X4_4, X8_4, X12_4) {
    PlaySE(0, SoundType.BGM, 999992020);
    SetRelativeEventFlag(0, 5920, 1);
    IfElapsedFrames(MAIN, 1);
    PlayCutsceneToAll(X12_4, 1024);
    PlayCutsceneToAll(X8_4, 1024);
    ControlFlowUnknown10031014(1);
    Unknown200208(X0_4, 58, 0, 0, 0, X4_4);
    IfElapsedFrames(MAIN, 1);
    SetSpEffect(10000, 200000100);
    Unknown201008(20000200);
    EndUnconditionally(EventEndType.End);
    Label1();
    Unknown200208(200010, 34, 0, 0, 0, X4_4);
    SetSpEffect(10000, 200000100);
    Unknown201008(20000200);
});

//=====================================================
// Pre-mission state_CS_Prologue-only sortie_Continuous version_During free mission
//=====================================================
Event(5307, Default, function(X0_4, X4_4, X8_4) {
    PlaySE(20000, SoundType.BGM, 999992020);
    SetRelativeEventFlag(0, 5920, 1);
    IfElapsedFrames(MAIN, 1);
    PlayCutsceneToAll(X8_4, 1024);
    ControlFlowUnknown10031014(1);
    Unknown200208(X0_4, 58, 0, 0, 0, X4_4);
    IfElapsedFrames(MAIN, 1);
    SetSpEffect(10000, 200000100);
    Unknown201008(20000200);
    EndUnconditionally(EventEndType.End);
    Label1();
    Unknown200208(200010, 34, 0, 0, 0, X4_4);
    SetSpEffect(10000, 200000100);
    Unknown201008(20000200);
});

//=====================================================
// Pre-mission state_CS_Sortie from garage_Continuous version_Ice worm only
//=====================================================
Event(5308, Default, function(X0_4, X4_4, X8_4) {
    PlaySE(0, SoundType.BGM, 999992020);
    SetRelativeEventFlag(0, 5920, 1);
    IfElapsedFrames(MAIN, 1);
    Unknown200208(X8_4, 384, 0, 0, 0, X4_4);
    SetSpEffect(20000, 3230790);
    Unknown200208(X0_4, 58, 0, 0, 0, X4_4);
    IfElapsedFrames(MAIN, 1);
    SetSpEffect(10000, 200000100);
    Unknown201008(20000200);
});

//=====================================================
// Mission status_Restart event from checkpoint
//=====================================================
Event(5310, Default, function(X0_4) {
    Unknown20031046(X0_4);
});

//=====================================================
// Mission status_Camera specified event when restarting from Sherpa
//=====================================================
Event(5320, Default, function(X0_4) {
    Unknown20031046(X0_4);
});

//=====================================================
// Mission status_Sherpa used flag
//=====================================================
Event(5330, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Success completion status_CS_Return to garage
//=====================================================
Event(5350, Default, function(X0_4) {
    Unknown200014(2000);
    PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(X0_4, CutscenePlayMode.Skippable);
    WaitForCutsceneToEnd(0);
    SetSpEffect(0, 0);
});

//=====================================================
// Successful completion status_CS_Return to garage_Continuous version
//=====================================================
Event(5355, Default, function(X0_4, X4_4) {
    Unknown200014(2000);
    PlayCutsceneToPlayerUnknown200204(X4_4, 136, 2106302700, 41000000, 20000);
    Unknown20013(33554432, 0, 2);
    PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(X0_4, CutscenePlayMode.SkippableWithFadeOutSkip);
    WaitForCutsceneToEnd(0);
    SetSpEffect(0, 0);
});

//=====================================================
// Successfully completed state_CS_Return to garage_Continuous version_Biological weapon ALT version
//=====================================================
Event(5359, Default, function(X0_4, X4_4, X8_4) {
    Unknown200014(2000);
    PlayCutsceneToPlayerUnknown200204(X4_4, 136, 2106302700, 41000000, 20000);
    Unknown20013(33554432, 0, 2);
    PlayCutsceneToPlayerUnknown200204(X8_4, CutscenePlayMode.SkippableWithFadeOutSkip, 2106302700, 41000000, 20000);
    Unknown20013(33554432, 0, 2);
    PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(X0_4, CutscenePlayMode.SkippableWithFadeOutSkip);
    WaitForCutsceneToEnd(0);
    SetSpEffect(0, 0);
});

//=====================================================
// Success completion state_CS_Return to garage_Transition flag
//=====================================================
Event(5360, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Success completion status_Dark fade conversation end_Transition flag
//=====================================================
Event(5370, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Failure end status_Great cavity and furnace only_Transition flag
//=====================================================
Event(5380, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Failure end state_Boss TIPS_Transition flag
//=====================================================
Event(5385, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Success completion status_No completion display
//=====================================================
Event(5390, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Acceptance status complete_Event flag
//=====================================================
Event(5401, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Mission status completion_Event flag
//=====================================================
Event(5402, Default, function() {
    GotoIfEventFlag(Label.Label0, ON, TargetEventFlagType.EventFlag, 2101402000);
    SetCharacterInvincibility(20000, Enabled);
    SetSpEffect(20000, 9990300);
    Unknown201008(20000200);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetSpEffect(20000, 9990300);
    Unknown201008(20000200);
});

//=====================================================
// Result processing completed_Success
//=====================================================
Event(5403, Default, function() {
    SetEventFlagAc(6105, OFF);
});

//=====================================================
// Success DeBF state completion_Event flag
//=====================================================
Event(5404, Default, function() {
    SetCharacterImmortality(20000, Enabled);
    SetSpEffect(20000, 9990300);
});

//=====================================================
// Success completion status completion_Event flag
//=====================================================
Event(5405, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Production status_Success completion_Event flag
//=====================================================
Event(5406, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Result processing completed_Failure
//=====================================================
Event(5413, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Failure DeBF state completion_Event flag
//=====================================================
Event(5414, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Failure end status completion_Event flag
//=====================================================
Event(5415, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Production status_Failure completion_Event flag
//=====================================================
Event(5416, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Mission Start: Effect
//=====================================================
Event(5420, Default, function() {
    DisplayTextEffectMessage(10);
    SetSpEffect(10000, 500000005);
});

//=====================================================
// Mission Success
//=====================================================
Event(5424, Default, function() {
    EndTextEffectMessage(3);
    EndTextEffectMessage(0);
    EndTextEffectMessage(2);
    EndTextEffectMessage(1);
    ClearSpEffect(20000, 500000005);
    SetSpEffect(20000, 9990050);
    SetSpEffect(20000, 500000008);
    SetCharacterInvincibility(20000, Enabled);
    Unknown20041020(0);
    IfElapsedFrames(MAIN, 1);
    Unknown201008(90000200);
    IfElapsedFrames(MAIN, 1);
    HidePlayerHud();
    Unknown31000(511, 5390);
    GotoIfConditionGroupStateUncompiled(Label.Label2, PASS, OR_01);
    IfElapsedSeconds(MAIN, 2);
    DisplayTextEffectMessage(11);
    EndTextEffectMessage(3);
    EndTextEffectMessage(0);
    EndTextEffectMessage(2);
    EndTextEffectMessage(1);
    EndUnconditionally(EventEndType.End);
    Label2();
    IfElapsedSeconds(MAIN, 2);
    EndTextEffectMessage(3);
    EndTextEffectMessage(0);
    EndTextEffectMessage(2);
    EndTextEffectMessage(1);
});

//=====================================================
// Mission Failure
//=====================================================
Event(5425, Default, function() {
    EndTextEffectMessage(3);
    EndTextEffectMessage(0);
    EndTextEffectMessage(2);
    EndTextEffectMessage(1);
    HidePlayerHud();
    IfElapsedFrames(MAIN, 1);
    Unknown41007(255, 20000);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 2100703999);
    GotoIfConditionGroupStateUncompiled(Label.Label2, PASS, OR_01);
    IfElapsedSeconds(MAIN, 2);
    DisplayTextEffectMessage(12);
    IfElapsedSeconds(MAIN, 3);
    SetSpEffect(0, 0);
    EndUnconditionally(EventEndType.End);
    Label2();
    IfElapsedSeconds(MAIN, 0.1);
    DisplayTextEffectMessage(12);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
});

//=====================================================
// Mission Update
//=====================================================
Event(5426, Default, function() {
    DisplayTextEffectMessage(13);
    IfElapsedSeconds(MAIN, 2.5);
    SetSpEffect(0, 0);
});

//=====================================================
// Mission Failure: Exclusive for Caverns and Furnaces
//=====================================================
Event(5427, Default, function() {
    EndTextEffectMessage(3);
    EndTextEffectMessage(0);
    EndTextEffectMessage(2);
    EndTextEffectMessage(1);
    IfElapsedFrames(MAIN, 10);
    DisplayTextEffectMessage(12);
});

//=====================================================
// outside area display
//=====================================================
Event(5430, Default, function() {
    DisplayTextEffectMessage(111);
    IfElapsedSeconds(MAIN, 2.5);
    SetSpEffect(0, 0);
});

//=====================================================
// Kill because it is out of range
//=====================================================
Event(5431, Default, function() {
    DisplayTextEffectMessage(12);
    ForceCharacterDeath(10000, true);
});

//=====================================================
// For tips for failure
//=====================================================
Event(5432, Default, function() {
    SetBossBGM(1);
});

//=====================================================
// area determination_inside
//=====================================================
Event(5440, Default, function(X0_4) {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X0_4, 1);
    SetSpEffect(0, 0);
});

//=====================================================
// Area determination_Outside
//=====================================================
Event(5450, Default, function(X0_4) {
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, X0_4, 1);
    SetSpEffect(0, 0);
});

//=====================================================
// area determination_new edition
//=====================================================
Event(5460, Default, function() {
    Unknown329(0);
    SetSpEffect(0, 0);
});

//=====================================================
// outside area judgment_new edition
//=====================================================
Event(5461, Default, function() {
    Unknown329(256);
    SetSpEffect(0, 0);
});

//=====================================================
// area departure determination_new edition
//=====================================================
Event(5462, Default, function() {
    Unknown329(512);
    SetSpEffect(0, 0);
});

//=====================================================
// Connection Map: movement
//=====================================================
Event(5470, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Connection Map: hit invalidation
//=====================================================
Event(5480, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Connection Map: Hits Enabled
//=====================================================
Event(5481, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// FE invalidation
//=====================================================
Event(5490, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// FE Enable
//=====================================================
Event(5491, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Special effects for VOB mode
//=====================================================
Event(5500, Default, function() {
    SetSpEffect(10000, 9040);
});

//=====================================================
// Special effects for canceling VOB mode
//=====================================================
Event(5501, Default, function() {
    SetSpEffect(10000, 9040);
});

//=====================================================
// Garage Event: Garage initialization
//=====================================================
Event(5551, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Garage Event: Location discovery_One shot
//=====================================================
Event(5560, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Garage Event: Garage access_One shot
//=====================================================
Event(5561, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Garage Event: Uniform hardening animation
//=====================================================
Event(5562, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Garage Event: Action button determination
//=====================================================
Event(5563, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Training: start production
//=====================================================
Event(5600, Default, function() {
    ClearSpEffect(0, 0);
});

//=====================================================
// Training: Return to the garage
//=====================================================
Event(5610, Default, function() {
    Unknown20031048(0);
    ClearSpEffect(0, 0);
});

//=====================================================
// Short distance jump hill
//=====================================================
Event(5700, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    ForceAnimationPlayback(X0_4, 100, true, false, false, Equal, 1);
    IfEntityInoutsideRadiusOfEntity(MAIN, InsideOutsideState.Inside, 20000, X0_4, 21, 1);
    ForceAnimationPlayback(X0_4, 101, false, true, false, Equal, 1);
    IfCharacterHasSpEffect(AND_01, 20000, 9997000, true, Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Outside, 20000, X0_4, 21, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfConditionGroupStateCompiled(Label.Label0, PASS, AND_02);
    ForceAnimationPlayback(X0_4, 103, false, true, false, Equal, 1);
    SetSpEffect(0, X4_4);
    SetSpEffect(0, X8_4);
    SetSpEffect(0, X12_4);
    SetSpEffect(0, X16_4);
    SetSpEffect(0, X20_4);
    SetSpEffect(0, X24_4);
    SetSpEffect(0, X28_4);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    ForceAnimationPlayback(X0_4, 104, false, true, false, Equal, 1);
    SetSpEffect(0, X4_4);
    EndUnconditionally(EventEndType.Restart);
});

//=====================================================
// Success Result: BGM mute flag
//=====================================================
Event(5800, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Success Result: BGM mute ID3 flag
//=====================================================
Event(5801, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Success Result: BGM flag as is
//=====================================================
Event(5810, Default, function() {
    SetSpEffect(0, 0);
});

//=====================================================
// Retry Judgment
//=====================================================
Event(5820, Default, function() {
    Unknown31012(0);
    SetSpEffect(0, 0);
});

//=====================================================
// Initialization process for test map
//=====================================================
Event(5900, Default, function() {
    SetSpEffect(20000, 500000005);
});

//=====================================================
// GAUNTLET: Set Default Flags
//=====================================================
Event(6000, Default, function() {
    SetEventFlag(TargetEventFlagType.EventFlag, 4500, OFF); // WAVE 1
    SetEventFlag(TargetEventFlagType.EventFlag, 4501, OFF); // WAVE 2
    SetEventFlag(TargetEventFlagType.EventFlag, 4502, OFF); // WAVE 3
    SetEventFlag(TargetEventFlagType.EventFlag, 4503, OFF); // WAVE 4
    SetEventFlag(TargetEventFlagType.EventFlag, 4504, OFF); // WAVE 5
    SetEventFlag(TargetEventFlagType.EventFlag, 4505, OFF); // WAVE 6
    SetEventFlag(TargetEventFlagType.EventFlag, 4506, OFF); // WAVE 7
    SetEventFlag(TargetEventFlagType.EventFlag, 4507, OFF); // WAVE 8
    SetEventFlag(TargetEventFlagType.EventFlag, 4508, OFF); // WAVE 9
    SetEventFlag(TargetEventFlagType.EventFlag, 4509, OFF); // WAVE 10
    SetEventFlag(TargetEventFlagType.EventFlag, 4510, OFF); // WAVE 11
    SetEventFlag(TargetEventFlagType.EventFlag, 4511, OFF); // WAVE 12
    SetEventFlag(TargetEventFlagType.EventFlag, 4512, OFF); // WAVE 13
    SetEventFlag(TargetEventFlagType.EventFlag, 4513, OFF); // WAVE 14
    SetEventFlag(TargetEventFlagType.EventFlag, 4514, OFF); // WAVE 15
    SetEventFlag(TargetEventFlagType.EventFlag, 4515, OFF); // Trial Complete
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4591, OFF); // End Trial early
    //SetEventFlag(TargetEventFlagType.EventFlag, 4592, ON);  // Display Target Markers
    
    // 4600 - 4699 are the random roll range
});

//=====================================================
// GAUNTLET: Item Roll
//=====================================================
Event(6010, Default, function() {
    BatchSetEventFlags(4600, 4916, OFF);
    RandomlySetEventFlagInRange(4600, 4916, ON);
    
    //===============
    // Loot: Booster
    //===============
    // BST-G2/P04
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4600);
    AwardItemLot(10000);
    // BC-0600 12345
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4601);
    AwardItemLot(10010);
    // ALULA/21E
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4602);
    AwardItemLot(10020);
    // FLUEGEL/21Z
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4603);
    AwardItemLot(10030);
    // BUERZEL/21D
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4604);
    AwardItemLot(10040);
    // BST-G2/P06SPD
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4605);
    AwardItemLot(10050);
    // BC-0200 GRIDWALKER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4606);
    AwardItemLot(10060);
    // IB-C03B: NGI 001
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4607);
    AwardItemLot(10070);
    // IA-C01B: GILLS
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4608);
    AwardItemLot(10080);
    // AB-J-137 KIKAKU
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4609);
    AwardItemLot(10090);
    // BC-0400 MULE
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4610);
    AwardItemLot(10100);
    // BST-G1/P10
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4611);
    AwardItemLot(10110);
    
    //===============
    // Loot: FCS
    //===============
    // FCS-G1/P01
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4612);
    AwardItemLot(11000);
    // FCS-G2/P05
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4613);
    AwardItemLot(11010);
    // FCS-G2/P10SLT
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4614);
    AwardItemLot(11020);
    // FCS-G2/P12SML
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4615);
    AwardItemLot(11030);
    // FC-006 ABBOT
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4616);
    AwardItemLot(11040);
    // FC-008 TALBOT
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4617);
    AwardItemLot(11050);
    // VE-21A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4618);
    AwardItemLot(11060);
    // VE-21B
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4619);
    AwardItemLot(11070);
    // IA-C01F: OCELLUS
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4620);
    AwardItemLot(11080);
    // IB-C03F: WLT 001
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4621);
    AwardItemLot(11090);
    
    //===============
    // Loot: Generator
    //===============
    // AG-J-098 JOSO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4622);
    AwardItemLot(12000);
    // AG-E-013 YABA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4623);
    AwardItemLot(12010);
    // AG-T-005 HOKUSHI
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4624);
    AwardItemLot(12020);
    // DF-GN-02 LING-TAI
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4625);
    AwardItemLot(12030);
    // DF-GN-06 MING-TANG
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4626);
    AwardItemLot(12040);
    // DF-GN-08 SAN-TAI
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4627);
    AwardItemLot(12050);
    // VP-20S
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4628);
    AwardItemLot(12060);
    // VP-20C
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4629);
    AwardItemLot(12070);
    // VP-20D
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4630);
    AwardItemLot(12080);
    // VE-20A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4631);
    AwardItemLot(12090);
    // VE-20B
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4632);
    AwardItemLot(12100);
    // VE-20C
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4633);
    AwardItemLot(12110);
    // IA-C01G: AORTA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4634);
    AwardItemLot(12120);
    // IB-C03G: NGI 000
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4635);
    AwardItemLot(12130);
    
    //===============
    // Loot: Head
    //===============
    // HD-011 MELANDER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4636);
    AwardItemLot(13000);
    // HS-5000 APPETIZER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4637);
    AwardItemLot(13010);
    // HD-033M VERRILL
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4638);
    AwardItemLot(13020);
    // HD-012 MELANDER C3
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4639);
    AwardItemLot(13030);
    // DF-HD-08 TIAN-QIANG
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4640);
    AwardItemLot(13040);
    // NACHTREIHER/44E
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4641);
    AwardItemLot(13050);
    // KASUAR/44Z
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4642);
    AwardItemLot(13060);
    // VP-44S
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4643);
    AwardItemLot(13070);
    // VP-44D
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4644);
    AwardItemLot(13080);
    // VE-44A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4645);
    AwardItemLot(13090);
    // VE-44B
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4646);
    AwardItemLot(13100);
    // 20-081 MIND ALPHA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4647);
    AwardItemLot(13110);
    // 20-082 MIND BETA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4648);
    AwardItemLot(13120);
    // EL-TH-10 FIRMEZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4649);
    AwardItemLot(13130);
    // AH-J-124 BASHO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4650);
    AwardItemLot(13140);
    // HC-3000 WRECKER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4651);
    AwardItemLot(13150);
    // HC-2000 FINDER EYE
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4652);
    AwardItemLot(13160);
    // HC-2000/BC SHADE EYE
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4653);
    AwardItemLot(13170);
    // IB-C03H: HAL 826
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4654);
    AwardItemLot(13180);
    // IA-C01H: EPHEMERA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4655);
    AwardItemLot(13190);
    // EL-PH-00 ALBA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4656);
    AwardItemLot(13200);
    // LAMMERGEIER/44F
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4657);
    AwardItemLot(13210);
    // AH-J-124/RC JAILBREAK
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4658);
    AwardItemLot(13220);
    
    //===============
    // Loot: Core
    //===============
    // BD-011 MELANDER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4659);
    AwardItemLot(14000);
    // BD-012 MELANDER C3
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4660);
    AwardItemLot(14010);
    // CS-5000 MAIN DISH
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4661);
    AwardItemLot(14020);
    // DF-BD-08 TIAN-QIANG
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4662);
    AwardItemLot(14030);
    // NACHTREIHER/40E
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4663);
    AwardItemLot(14040);
    // VP-40S
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4664);
    AwardItemLot(14050);
    // VE-40A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4665);
    AwardItemLot(14060);
    // 07-061 MIND ALPHA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4666);
    AwardItemLot(14070);
    // EL-TC-10 FIRMEZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4667);
    AwardItemLot(14080);
    // AC-J-120 BASHO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4668);
    AwardItemLot(14090);
    // CC-3000 WRECKER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4669);
    AwardItemLot(14100);
    // CC-2000 ORBITER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4670);
    AwardItemLot(14110);
    // IB-C03C: HAL 826
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4671);
    AwardItemLot(14120);
    // IA-C01C: EPHEMERA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4672);
    AwardItemLot(14130);
    // EL-PC-00 ALBA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4673);
    AwardItemLot(14140);
    // LAMMERGEIER/40F
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4674);
    AwardItemLot(14150);
    // AC-J-120/RC JAILBREAK
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4675);
    AwardItemLot(14160);
    
    //===============
    // Loot: Arms
    //===============
    // AR-011 MELANDER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4676);
    AwardItemLot(15000);
    // AR-012 MELANDER C3
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4677);
    AwardItemLot(15010);
    // AS-5000 SALAD
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4678);
    AwardItemLot(15020);
    // DF-AR-08 TIAN-QIANG
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4679);
    AwardItemLot(15030);
    // DF-AR-09 TIAN-LAO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4680);
    AwardItemLot(15040);
    // NACHTREIHER/46E
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4681);
    AwardItemLot(15050);
    // VP-46S
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4682);
    AwardItemLot(15060);
    // VP-46D
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4683);
    AwardItemLot(15070);
    // VE-46A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4684);
    AwardItemLot(15080);
    // 04-101 MIND ALPHA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4685);
    AwardItemLot(15090);
    // EL-TA-10 FIRMEZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4686);
    AwardItemLot(15100);
    // AA-J-123 BASHO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4687);
    AwardItemLot(15110);
    // AC-3000 WRECKER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4688);
    AwardItemLot(15120);
    // AC-2000 TOOL ARM
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4689);
    AwardItemLot(15130);
    // IB-C03A: HAL 826
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4690);
    AwardItemLot(15140);
    // IA-C01A: EPHEMERA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4691);
    AwardItemLot(15150);
    // EL-PA-00 ALBA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4692);
    AwardItemLot(15160);
    // LAMMERGEIER/46F
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4693);
    AwardItemLot(15170);
    // AA-J-123/RC JAILBREAK
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4694);
    AwardItemLot(15180);
    
    //===============
    // Loot: Legs
    //===============
    // LG-011 MELANDER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4695);
    AwardItemLot(16000);
    // LG-012 MELANDER C3
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4696);
    AwardItemLot(16010);
    // 2S-5000 DESSERT
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4697);
    AwardItemLot(16020);
    // DF-LG-08 TIAN-QIANG
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4698);
    AwardItemLot(16030);
    // NACHTREIHER/42E
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4699);
    AwardItemLot(16040);
    // VP-422
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4700);
    AwardItemLot(16050);
    // VE-42A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4701);
    AwardItemLot(16060);
    // 06-041 MIND ALPHA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4701);
    AwardItemLot(16070);
    // EL-TL-10 FIRMEZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4702);
    AwardItemLot(16080);
    // AL-J-121 BASHO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4703);
    AwardItemLot(16090);
    // 2C-3000 WRECKER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4704);
    AwardItemLot(16100);
    // 2C-2000 CRAWLER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4705);
    AwardItemLot(16110);
    // IB-C03L: HAL 826
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4706);
    AwardItemLot(16120);
    // IA-C01L: EPHEMERA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4707);
    AwardItemLot(16130);
    // EL-PL-00 ALBA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4708);
    AwardItemLot(16140);
    // AL-J-121/RC JAILBREAK
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4709);
    AwardItemLot(16150);
    // KASUAR/42Z
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4710);
    AwardItemLot(16160);
    // 06-042 MIND BETA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4711);
    AwardItemLot(16170);
    // RC-2000 SPRING CHICKEN
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4712);
    AwardItemLot(16180);
    // LG-033M VERRILL
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4713);
    AwardItemLot(16190);
    // VP-424
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4714);
    AwardItemLot(16200);
    // LAMMERGEIER/42F
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4715);
    AwardItemLot(16210);
    // LG-022T BORNEMISSZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4716);
    AwardItemLot(16220);
    // VE-42B
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4717);
    AwardItemLot(16230);
    // EL-TL-11 FORTALEZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4718);
    AwardItemLot(16240);
    
    //===============
    // Loot: Weapons
    //===============
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4719);
    AwardItemLot(17000);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4720);
    AwardItemLot(17010);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4721);
    AwardItemLot(17020);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4722);
    AwardItemLot(17030);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4723);
    AwardItemLot(17040);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4724);
    AwardItemLot(17050);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4725);
    AwardItemLot(17060);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4726);
    AwardItemLot(17070);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4727);
    AwardItemLot(17080);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4728);
    AwardItemLot(17090);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4729);
    AwardItemLot(17100);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4730);
    AwardItemLot(17110);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4731);
    AwardItemLot(17120);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4732);
    AwardItemLot(17130);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4733);
    AwardItemLot(17140);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4734);
    AwardItemLot(17150);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4735);
    AwardItemLot(17160);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4736);
    AwardItemLot(17170);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4737);
    AwardItemLot(17180);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4738);
    AwardItemLot(17190);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4739);
    AwardItemLot(17200);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4740);
    AwardItemLot(17210);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4741);
    AwardItemLot(17220);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4742);
    AwardItemLot(17230);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4743);
    AwardItemLot(17240);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4744);
    AwardItemLot(17250);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4745);
    AwardItemLot(17260);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4746);
    AwardItemLot(17270);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4747);
    AwardItemLot(17280);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4748);
    AwardItemLot(17290);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4749);
    AwardItemLot(17300);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4750);
    AwardItemLot(17310);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4751);
    AwardItemLot(17320);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4752);
    AwardItemLot(17330);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4753);
    AwardItemLot(17340);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4754);
    AwardItemLot(17350);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4755);
    AwardItemLot(17360);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4756);
    AwardItemLot(17370);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4757);
    AwardItemLot(17380);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4758);
    AwardItemLot(17390);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4759);
    AwardItemLot(17400);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4760);
    AwardItemLot(17410);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4761);
    AwardItemLot(17420);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4762);
    AwardItemLot(17430);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4763);
    AwardItemLot(17440);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4764);
    AwardItemLot(17450);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4765);
    AwardItemLot(17460);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4766);
    AwardItemLot(17470);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4767);
    AwardItemLot(17480);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4768);
    AwardItemLot(17490);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4769);
    AwardItemLot(17500);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4770);
    AwardItemLot(17510);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4771);
    AwardItemLot(17520);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4772);
    AwardItemLot(17530);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4773);
    AwardItemLot(17540);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4774);
    AwardItemLot(17550);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4775);
    AwardItemLot(17560);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4776);
    AwardItemLot(17570);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4777);
    AwardItemLot(17580);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4778);
    AwardItemLot(17590);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4779);
    AwardItemLot(17600);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4780);
    AwardItemLot(17610);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4781);
    AwardItemLot(17620);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4782);
    AwardItemLot(17630);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4783);
    AwardItemLot(17640);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4784);
    AwardItemLot(17650);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4785);
    AwardItemLot(17660);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4786);
    AwardItemLot(17670);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4787);
    AwardItemLot(17680);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4788);
    AwardItemLot(17690);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4789);
    AwardItemLot(17700);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4790);
    AwardItemLot(17710);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4791);
    AwardItemLot(17720);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4792);
    AwardItemLot(17730);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4793);
    AwardItemLot(17740);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4794);
    AwardItemLot(17750);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4795);
    AwardItemLot(17760);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4796);
    AwardItemLot(17770);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4797);
    AwardItemLot(17780);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4798);
    AwardItemLot(17790);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4799);
    AwardItemLot(17800);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4800);
    AwardItemLot(17810);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4801);
    AwardItemLot(17820);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4802);
    AwardItemLot(17830);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4803);
    AwardItemLot(17840);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4804);
    AwardItemLot(17850);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4805);
    AwardItemLot(17860);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4806);
    AwardItemLot(17870);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4807);
    AwardItemLot(17880);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4808);
    AwardItemLot(17890);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4809);
    AwardItemLot(17900);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4810);
    AwardItemLot(17910);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4811);
    AwardItemLot(17920);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4812);
    AwardItemLot(17930);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4813);
    AwardItemLot(17940);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4814);
    AwardItemLot(17950);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4815);
    AwardItemLot(17960);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4816);
    AwardItemLot(17970);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4817);
    AwardItemLot(17980);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4818);
    AwardItemLot(17990);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4819);
    AwardItemLot(18000);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4820);
    AwardItemLot(18010);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4821);
    AwardItemLot(18020);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4822);
    AwardItemLot(18030);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4823);
    AwardItemLot(18040);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4824);
    AwardItemLot(18050);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4825);
    AwardItemLot(18060);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4826);
    AwardItemLot(18070);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4827);
    AwardItemLot(18080);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4828);
    AwardItemLot(18090);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4829);
    AwardItemLot(18100);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4830);
    AwardItemLot(18110);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4831);
    AwardItemLot(18120);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4832);
    AwardItemLot(18130);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4833);
    AwardItemLot(18140);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4834);
    AwardItemLot(18150);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4835);
    AwardItemLot(18160);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4836);
    AwardItemLot(18170);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4837);
    AwardItemLot(18180);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4838);
    AwardItemLot(18190);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4839);
    AwardItemLot(18200);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4840);
    AwardItemLot(18210);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4841);
    AwardItemLot(18220);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4842);
    AwardItemLot(18230);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4843);
    AwardItemLot(18240);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4844);
    AwardItemLot(18250);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4845);
    AwardItemLot(18260);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4846);
    AwardItemLot(18270);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4847);
    AwardItemLot(18280);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4848);
    AwardItemLot(18290);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4849);
    AwardItemLot(18300);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4850);
    AwardItemLot(18310);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4851);
    AwardItemLot(18320);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4852);
    AwardItemLot(18330);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4853);
    AwardItemLot(18340);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4854);
    AwardItemLot(18350);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4855);
    AwardItemLot(18360);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4856);
    AwardItemLot(18370);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4857);
    AwardItemLot(18380);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4858);
    AwardItemLot(18390);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4859);
    AwardItemLot(18400);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4860);
    AwardItemLot(18410);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4861);
    AwardItemLot(18420);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4862);
    AwardItemLot(18430);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4863);
    AwardItemLot(18440);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4864);
    AwardItemLot(18450);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4865);
    AwardItemLot(18460);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4866);
    AwardItemLot(18470);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4867);
    AwardItemLot(18480);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4868);
    AwardItemLot(18490);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4869);
    AwardItemLot(18500);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4870);
    AwardItemLot(18510);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4871);
    AwardItemLot(18520);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4872);
    AwardItemLot(18530);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4873);
    AwardItemLot(18540);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4874);
    AwardItemLot(18550);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4875);
    AwardItemLot(18560);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4876);
    AwardItemLot(18570);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4877);
    AwardItemLot(18580);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4878);
    AwardItemLot(18590);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4879);
    AwardItemLot(18600);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4880);
    AwardItemLot(18610);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4881);
    AwardItemLot(18620);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4882);
    AwardItemLot(18630);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4883);
    AwardItemLot(18640);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4884);
    AwardItemLot(18650);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4885);
    AwardItemLot(18660);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4886);
    AwardItemLot(18670);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4887);
    AwardItemLot(18680);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4888);
    AwardItemLot(18690);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4889);
    AwardItemLot(18700);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4890);
    AwardItemLot(18710);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4891);
    AwardItemLot(18720);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4892);
    AwardItemLot(18730);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4893);
    AwardItemLot(18740);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4894);
    AwardItemLot(18750);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4895);
    AwardItemLot(18760);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4896);
    AwardItemLot(18770);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4897);
    AwardItemLot(18780);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4898);
    AwardItemLot(18790);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4899);
    AwardItemLot(18800);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4900);
    AwardItemLot(18810);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4901);
    AwardItemLot(18820);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4902);
    AwardItemLot(18830);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4903);
    AwardItemLot(18840);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4904);
    AwardItemLot(18850);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4905);
    AwardItemLot(18860);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4906);
    AwardItemLot(18870);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4907);
    AwardItemLot(18880);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4908);
    AwardItemLot(18890);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4909);
    AwardItemLot(18900);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4910);
    AwardItemLot(18910);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4911);
    AwardItemLot(18920);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4912);
    AwardItemLot(18930);
    
    //===============
    // Loot: Expansion
    //===============
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4913);
    AwardItemLot(19000);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4914);
    AwardItemLot(19010);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4915);
    AwardItemLot(19020);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4916);
    AwardItemLot(19030);
});
