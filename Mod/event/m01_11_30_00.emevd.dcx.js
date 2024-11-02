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
    InitializeEvent(1, 3101, 101); 
    InitializeEvent(0, 3100, 102); 
    InitializeEvent(1, 3100, 103); 
    InitializeEvent(2, 3100, 104); 
    InitializeEvent(3, 3100, 105); 
    InitializeEvent(4, 3100, 106); 
    InitializeEvent(5, 3100, 107); 
    InitializeEvent(6, 3100, 108);
    InitializeEvent(7, 3100, 109);   
});

//=================================================
// Marker System - <wave group id>
//=================================================
Event(3200, Default, function(X0_4) {
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 4592);
    ClearSpEffect(X0_4, 9991003);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4592);
    SetSpEffect(X0_4, 9991003);
    
    EndUnconditionally(EventEndType.Restart);
});

//=================================================
// Trial System
//=================================================
Event(3000, Default, function() {
    ChangeCharacterEnableState(5300, Disabled);
    
    InitializeCommonEvent(6000, 0);
    
    WaitFixedTimeSeconds(5);
    
    SetSpEffect(20000, 9993200);
    
    //=================================================
    // Waves
    //=================================================
    // Wave 1 - Option A
    InitializeEvent(0, 3001, 0);
    InitializeEvent(1, 3200, 5301);
    
    // Wave 2 - Light Cavalry
    InitializeEvent(0, 3002, 0);
    InitializeEvent(2, 3200, 5302);
    
    // Wave 3 - Spider MT + TOYBOX MT
    InitializeEvent(0, 3003, 0);
    InitializeEvent(3, 3200, 5303);
    
    // Wave 4 - Ekdromoi
    InitializeEvent(0, 3004, 0);
    InitializeEvent(4, 3200, 5304);
    
    // Wave 5 - Boss: Bonewheel
    InitializeEvent(0, 3005, 0);
    InitializeEvent(5, 3200, 5305);
    
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
    ChangeCharacterEnableState(102, Enabled);
    ChangeCharacterEnableState(103, Enabled);
    ChangeCharacterEnableState(104, Enabled);
    ChangeCharacterEnableState(105, Enabled);
    
    WaitRandomTimeSeconds(1, 3);
    
    ChangeCharacterEnableState(101, Enabled);
    ChangeCharacterEnableState(106, Enabled);
    ChangeCharacterEnableState(107, Enabled);
    ChangeCharacterEnableState(108, Enabled);
    ChangeCharacterEnableState(109, Enabled);
    
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
// Loot System - Basic Enemies
//=================================================
Event(3100, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    BatchSetEventFlags(4800, 4899, OFF); 
    RandomlySetEventFlagInRange(4800, 4849, ON); // 2% chance
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 4800);
    
    InitializeCommonEvent(6010, 0);
});

//=================================================
// Loot System - Tough Enemies
//=================================================
Event(3101, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    BatchSetEventFlags(4800, 4899, OFF); 
    RandomlySetEventFlagInRange(4800, 4803, ON); // 25% chance
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 4800);
    
    InitializeCommonEvent(6010, 0);
});

//=================================================
// Loot System - Bosses
//=================================================
Event(3102, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    InitializeCommonEvent(6010, 0);
});

//=================================================
// Loot System - Final Boss
//=================================================
Event(3103, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    InitializeCommonEvent(6010, 0);
    
    // Special Item Here
});
