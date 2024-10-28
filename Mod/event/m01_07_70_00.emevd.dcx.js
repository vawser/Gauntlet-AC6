// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    "W:\\FNR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

Event(0, Default, function() {
    // Trial System
    InitializeEvent(0, 3000, 0);
    
    // TODO: edit this esd event
    // Handles on death menu + startup effect, but includes training prompts currently
    //InitializeEsdEvent(0, 5300, 200010, 0);
});


//=================================================
// Setup
//=================================================
Event(3000, Default, function() {
    ChangeCharacterEnableState(5300, Disabled);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4500, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4501, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4502, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4503, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4504, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4505, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4506, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4507, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4508, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4509, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4510, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4511, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4512, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4513, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4514, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4515, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4516, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4517, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4518, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4519, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4520, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4521, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4522, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4523, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4524, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4525, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4526, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4527, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4528, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4529, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4530, OFF);
    
    WaitFixedTimeSeconds(5);
    
    // AwardItemLot(5000);
    
    //WarpAssetToCharacter(900, 990, 1);
    
    //=================================================
    // Waves
    //=================================================
    // General Design:
    // Each wave has a unique set of enemies that spawn in.
    // The wave progresses once X enemies have been killed (X being the total count of enemies for the wave)
    // Every fifth wave is an 'boss' wave, which may be a boss or an AC encounter.
    // After this wave, a part is awarded to the player.
    
    // DEBUG FLAG
    // SetEventFlag(TargetEventFlagType.EventFlag, 4503, ON);
    
    // Wave 1 - Basic MT Wave
    InitializeEvent(0, 3001, 0);
    
    // Wave 2 - Light Cavalry + Basic MT Wave
    InitializeEvent(0, 3002, 0);
    
    // Wave 3 - Mass MT Wave
    InitializeEvent(0, 3003, 0);
    
    // Wave 4 - Heavy Cavalry * 2 + Light Cavalry * 2
    InitializeEvent(0, 3004, 0);
    
    // Wave 5
    
    // Wave 6
    
    // Wave 7
    
    // Wave 8
    
    // Wave 9
    
    // Wave 10 - Boss
    
    // Wave 11
    
    // Wave 12
    
    // Wave 13
    
    // Wave 14
    
    // Wave 15 - AC
    
    // Wave 16
    
    // Wave 17
    
    // Wave 18
    
    // Wave 19
    
    // Wave 20 - Boss
    
    // End Trial
});

//=================================================
// Wave 1
//=================================================
Event(3001, Default, function() {
    const WaveStartText = 100;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(100, Enabled);
    ChangeCharacterEnableState(101, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(102, Enabled);
    ChangeCharacterEnableState(103, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(104, Enabled);
    ChangeCharacterEnableState(105, Enabled);
    WaitRandomTimeSeconds(1, 3);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5301, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 300);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    ChangeAssetEnableState(900, Enabled);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4501, ON);
});

//=================================================
// Wave 2
//=================================================
Event(3002, Default, function() {
    const WaveStartText = 101;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4501);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(110, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(111, Enabled);
    ChangeCharacterEnableState(112, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(113, Enabled);
    ChangeCharacterEnableState(114, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(115, Enabled);
    ChangeCharacterEnableState(116, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(117, Enabled);
    ChangeCharacterEnableState(118, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(119, Enabled);
    WaitRandomTimeSeconds(1, 3);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5302, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 300);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4502, ON);
});

//=================================================
// Wave 3
//=================================================
Event(3003, Default, function() {
    const WaveStartText = 102;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4502);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(120, Enabled);
    ChangeCharacterEnableState(130, Enabled);
    ChangeCharacterEnableState(140, Enabled);
    ChangeCharacterEnableState(150, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(121, Enabled);
    ChangeCharacterEnableState(131, Enabled);
    ChangeCharacterEnableState(141, Enabled);
    ChangeCharacterEnableState(151, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(122, Enabled);
    ChangeCharacterEnableState(132, Enabled);
    ChangeCharacterEnableState(142, Enabled);
    ChangeCharacterEnableState(152, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(123, Enabled);
    ChangeCharacterEnableState(133, Enabled);
    ChangeCharacterEnableState(143, Enabled);
    ChangeCharacterEnableState(153, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(124, Enabled);
    ChangeCharacterEnableState(134, Enabled);
    ChangeCharacterEnableState(144, Enabled);
    ChangeCharacterEnableState(154, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(125, Enabled);
    ChangeCharacterEnableState(135, Enabled);
    ChangeCharacterEnableState(145, Enabled);
    ChangeCharacterEnableState(155, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(126, Enabled);
    ChangeCharacterEnableState(136, Enabled);
    ChangeCharacterEnableState(146, Enabled);
    ChangeCharacterEnableState(156, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(127, Enabled);
    ChangeCharacterEnableState(137, Enabled);
    ChangeCharacterEnableState(147, Enabled);
    ChangeCharacterEnableState(157, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(128, Enabled);
    ChangeCharacterEnableState(138, Enabled);
    ChangeCharacterEnableState(148, Enabled);
    ChangeCharacterEnableState(158, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(129, Enabled);
    ChangeCharacterEnableState(139, Enabled);
    ChangeCharacterEnableState(149, Enabled);
    ChangeCharacterEnableState(159, Enabled);
    WaitRandomTimeSeconds(1, 3);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5303, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 300);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4503, ON);
});

//=================================================
// Wave 4
//=================================================
Event(3004, Default, function() {
    const WaveStartText = 103;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4503);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(160, Enabled);
    ChangeCharacterEnableState(161, Enabled);
    ChangeCharacterEnableState(162, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5304, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 300);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4504, ON);
});
