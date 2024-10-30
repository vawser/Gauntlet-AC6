// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    ""
// @linked    []
// @version    3.4.2
// ==/EMEVD==

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

Event(5260, Default, function(X0_4) {
    PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(X0_4, CutscenePlayMode.SkippableWithFadeOutSkip);
    UnknownCondition20(0);
    SetSpEffect(0, 0);
});

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

// ESD-Scheduled Event: 
Event(5300, Default, function(X0_4, X4_4) {
    PlaySE(0, SoundType.BGM, 999992020);
    SetRelativeEventFlag(0, 5920, 1);
    IfElapsedFrames(MAIN, 1);
    Unknown200208(X0_4, 34, 0, 0, 0, X4_4);
    IfElapsedFrames(MAIN, 1);
    UnknownCondition20(0);
    SetSpEffect(0, 200000100);
    Unknown201008(20000200);
});

// ESD-Scheduled Event: 
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

// ESD-Scheduled Event: 
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

// ESD-Scheduled Event: 
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

// ESD-Scheduled Event: 
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

// ESD-Scheduled Event: 
Event(5310, Default, function(X0_4) {
    Unknown20031046(X0_4);
});

// ESD-Scheduled Event: 
Event(5320, Default, function(X0_4) {
    Unknown20031046(X0_4);
});

// ESD-Scheduled Event: 
Event(5330, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5350, Default, function(X0_4) {
    Unknown200014(2000);
    PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(X0_4, CutscenePlayMode.Skippable);
    UnknownCondition20(0);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5355, Default, function(X0_4, X4_4) {
    Unknown200014(2000);
    PlayCutsceneToPlayerUnknown200204(X4_4, 136, 2106302700, 41000000, 20000);
    Unknown20013(33554432, 0, 2);
    PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(X0_4, CutscenePlayMode.SkippableWithFadeOutSkip);
    UnknownCondition20(0);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5359, Default, function(X0_4, X4_4, X8_4) {
    Unknown200014(2000);
    PlayCutsceneToPlayerUnknown200204(X4_4, 136, 2106302700, 41000000, 20000);
    Unknown20013(33554432, 0, 2);
    PlayCutsceneToPlayerUnknown200204(X8_4, CutscenePlayMode.SkippableWithFadeOutSkip, 2106302700, 41000000, 20000);
    Unknown20013(33554432, 0, 2);
    PlayCutsceneToPlayerAndWarpWithStablePositionUpdate(X0_4, CutscenePlayMode.SkippableWithFadeOutSkip);
    UnknownCondition20(0);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5360, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5370, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5380, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5385, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5390, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event:
Event(5401, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event:
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

// ESD-Scheduled Event: flag set when skipping cutscenes
Event(5403, Default, function() {
    SetEventFlagAc(6105, OFF);
});

// ESD-Scheduled Event: spawn immortality?
Event(5404, Default, function() {
    SetCharacterImmortality(20000, Enabled);
    SetSpEffect(20000, 9990300);
});

// ESD-Scheduled Event:
Event(5405, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event:
Event(5406, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event:
Event(5413, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event:
Event(5414, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event:
Event(5415, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event:
Event(5416, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: COMMENCE MISSION text
Event(5420, Default, function() {
    DisplayTextEffectMessage(10);
    SetSpEffect(10000, 500000005);
});

// ESD-Scheduled Event: 
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

// ESD-Scheduled Event: 
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

// ESD-Scheduled Event: MISSION UPATE text
Event(5426, Default, function() {
    DisplayTextEffectMessage(13);
    IfElapsedSeconds(MAIN, 2.5);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: MISSION FAILED text
Event(5427, Default, function() {
    EndTextEffectMessage(3);
    EndTextEffectMessage(0);
    EndTextEffectMessage(2);
    EndTextEffectMessage(1);
    IfElapsedFrames(MAIN, 10);
    DisplayTextEffectMessage(12);
});

// ESD-Scheduled Event: 
Event(5430, Default, function() {
    DisplayTextEffectMessage(111);
    IfElapsedSeconds(MAIN, 2.5);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5431, Default, function() {
    DisplayTextEffectMessage(12);
    ForceCharacterDeath(10000, true);
});

// ESD-Scheduled Event: 
Event(5432, Default, function() {
    SetBossBGM(1);
});

// ESD-Scheduled Event: 
Event(5440, Default, function(X0_4) {
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X0_4, 1);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5450, Default, function(X0_4) {
    IfInoutsideArea(MAIN, InsideOutsideState.Outside, 10000, X0_4, 1);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5460, Default, function() {
    Unknown329(0);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5461, Default, function() {
    Unknown329(256);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5462, Default, function() {
    Unknown329(512);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5470, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5480, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5481, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5490, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5491, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: ? - SpEffect plays a VFX
Event(5500, Default, function() {
    SetSpEffect(10000, 9040);
});

// ESD-Scheduled Event: ? - SpEffect plays a VFX
Event(5501, Default, function() {
    SetSpEffect(10000, 9040);
});

// ESD-Scheduled Event: 
Event(5551, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5560, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5561, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5562, Default, function() {
    SetSpEffect(0, 0);
});

Event(5563, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5600, Default, function() {
    ClearSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5610, Default, function() {
    Unknown20031048(0);
    ClearSpEffect(0, 0);
});

// ESD-Scheduled Event: 
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

// ESD-Scheduled Event: 
Event(5800, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5801, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5810, Default, function() {
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5820, Default, function() {
    Unknown31012(0);
    SetSpEffect(0, 0);
});

// ESD-Scheduled Event: 
Event(5900, Default, function() {
    SetSpEffect(20000, 500000005);
});
