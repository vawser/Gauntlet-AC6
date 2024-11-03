// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    "W:\\FNR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

Event(0, Default, function() {
    // Map Boundary
    ActivateHit(50304905, Enabled);
    
    //===============
    // Trial System
    //===============
    InitializeEvent(0, 3000, 0);
    
    //===============
    // Loot System
    //===============
    // Wave 1
    InitializeEvent(0, 3101, 100); 
    
    // Wave 2
    InitializeEvent(0, 3101, 110); 
    
    // Wave 3
    InitializeEvent(0, 3102, 120);  
    
    // Wave 4
    InitializeEvent(0, 3101, 100); 
    
    // Wave 5
    InitializeEvent(0, 3101, 110); 
    
    // Wave 6
    InitializeEvent(1, 3102, 120);  
    
    // Wave 7
    InitializeEvent(0, 3101, 100); 
    
    // Wave 8
    InitializeEvent(0, 3101, 110); 
    
    // Wave 9
    InitializeEvent(3, 3102, 120);  
});

//=================================================
// Trial System
//=================================================
Event(3000, Default, function() {
    ChangeCharacterEnableState(5300, Disabled);
    
    InitializeCommonEvent(6000, 0);
    
    WaitFixedTimeSeconds(5);
    
    //=================================================
    // Waves
    //=================================================
    // Wave 1 - ?
    InitializeEvent(0, 3001, 0);
    InitializeEvent(1, 3200, 5301);
    
    // Wave 2 - ?
    InitializeEvent(0, 3002, 0);
    InitializeEvent(2, 3200, 5302);
    
    // Wave 3 - Boss: ?
    InitializeEvent(0, 3003, 0);
    InitializeEvent(3, 3200, 5303);
    
    // Wave 4 - ?
    InitializeEvent(0, 3004, 0);
    InitializeEvent(4, 3200, 5304);
    
    // Wave 5 - ?
    InitializeEvent(0, 3005, 0);
    InitializeEvent(5, 3200, 5305);
    
    // Wave 6 - Boss: ?
    InitializeEvent(0, 3006, 0);
    InitializeEvent(6, 3200, 5306);
    
    // Wave 7 - ?
    InitializeEvent(0, 3007, 0);
    InitializeEvent(7, 3200, 5307);
    
    // Wave 8 - ?
    InitializeEvent(0, 3008, 0);
    InitializeEvent(8, 3200, 5308);
    
    // Wave 9 - Boss: ?
    InitializeEvent(0, 3009, 0);
    InitializeEvent(9, 3200, 5309);
    
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 4515);
    WaitFixedTimeSeconds(5);
    SetEventFlag(TargetEventFlagType.EventFlag, 4591, ON);
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
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5301, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 180);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
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
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5302, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 180);
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
    ChangeCharacterEnableState(137, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5303, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 180);
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
    ChangeCharacterEnableState(140, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5304, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 180);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4504, ON);
});

//=================================================
// Wave 5
//=================================================
Event(3005, Default, function() {
    const WaveStartText = 104;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4504);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(150, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(MAIN, 150, DeathState.Dead, Equal, 1);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4505, ON);
});

//=================================================
// Wave 6
//=================================================
Event(3006, Default, function() {
    const WaveStartText = 105;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4505);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(160, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(MAIN, 160, DeathState.Dead, Equal, 1);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4506, ON);
});

//=================================================
// Wave 7
//=================================================
Event(3007, Default, function() {
    const WaveStartText = 106;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4506);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(170, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(MAIN, 170, DeathState.Dead, Equal, 1);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4507, ON);
});

//=================================================
// Wave 8
//=================================================
Event(3008, Default, function() {
    const WaveStartText = 107;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4507);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(180, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(MAIN, 180, DeathState.Dead, Equal, 1);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4508, ON);
});

//=================================================
// Wave 9
//=================================================
Event(3008, Default, function() {
    const WaveStartText = 108;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4508);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(190, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(MAIN, 190, DeathState.Dead, Equal, 1);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4509, ON);
    SetEventFlag(TargetEventFlagType.EventFlag, 4515, ON);
});

//=================================================
// Loot System - Basic Enemies
//=================================================
Event(3100, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    BatchSetEventFlags(4800, 4899, OFF); 
    
    // Standard Mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 4580);
    RandomlySetEventFlagInRange(4800, 4849, ON); // 2% chance
    
    // Hard Mode
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4580);
    RandomlySetEventFlagInRange(4800, 4819, ON); // 5% chance
    
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 4800);
    
    InitializeCommonEvent(6010, 0);
});

//=================================================
// Loot System - Tough Enemies
//=================================================
Event(3101, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    BatchSetEventFlags(4800, 4899, OFF); 
    
    // Standard Mode
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 4580);
    RandomlySetEventFlagInRange(4800, 4803, ON); // 25% chance
    
    // Hard Mode
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4580);
    RandomlySetEventFlagInRange(4800, 4801, ON); // 50% chance
    
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 4800);
    
    InitializeCommonEvent(6010, 0);
});

//=================================================
// Loot System - Bosses
//=================================================
Event(3102, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    // Base Reward
    InitializeCommonEvent(6010, 0);
    
    // Hard Mode - Additional Reward
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4580);
    InitializeCommonEvent(6010, 0);
});

//=================================================
// Loot System - Final Boss
//=================================================
Event(3103, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    // Base Reward
    InitializeCommonEvent(6010, 0);
    
    // Hard Mode - Additional Reward
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4580);
    InitializeCommonEvent(6010, 0);
    
    // Special Item Here
});

//=================================================
// Enemy SpEffects - <wave group id>
//=================================================
Event(3200, Default, function(X0_4) {
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 4592);
    ClearSpEffect(X0_4, 9991003);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4592);
    SetSpEffect(X0_4, 9991003);
    
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 4580);
    ClearSpEffect(X0_4, 30000);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4580);
    SetSpEffect(X0_4, 30000);
    
    EndUnconditionally(EventEndType.Restart);
});
